import { Pressable, StyleSheet, Text, View } from 'react-native'
import React, { useEffect } from 'react'
import { Checklist, Edit, Trash } from '../../../assets'
import { colors, responsiveHeight, responsiveWidth } from '../../../utils'
import { useDispatch, useSelector } from 'react-redux'
import { addData, toggle, typeModal } from '../../../features/modal/modalSlice'
import { deleteData, fetchDetail, fetchListTodo } from '../../../features/todos/todoSlice'

const CardList = ({ data }) => {
  const isVisible = useSelector(state => state.modal.isVisible)
  const type = useSelector(state => state.modal.type)

  const dispatch = useDispatch()
  const toggleModal = () => {
    dispatch(toggle(!isVisible));
  };
  
  
  const editTodo = () => {
    dispatch(typeModal("edit"))
    dispatch(fetchDetail(data.id))
    toggleModal(!isVisible)
  }

   const deleteTodo = () => {
    console.log('first')
    dispatch(deleteData(data.id))
    dispatch(fetchListTodo());

  }

  return (
    <View style={styles.wrapperList}>
      <View style={styles.wrapperMainList}>
        <View style={styles.wrapperText}>
          <Text style={styles.textCategory} t>{data.category}</Text>
          <Text style={styles.textDate}>{data.createdAt}</Text>
          <Text style={styles.textDescription}>{data.description}</Text>
        </View>
        <View style={styles.wrapperChecklist}>
          <Checklist />
        </View>
      </View>
      <View style={styles.wrapperFooterList}>
        <Pressable onPress={deleteTodo} style={styles.wrapperFooterIcon}>
          <Trash />
        </Pressable>
        <Pressable style={styles.wrapperFooterIcon} onPress={editTodo}>
          <Edit />
        </Pressable>
      </View>
    </View>
  )
}

export default CardList

const styles = StyleSheet.create({
  wrapperList: {
    paddingVertical: responsiveHeight(10),
    paddingHorizontal: responsiveWidth(10),
    marginHorizontal: responsiveWidth(20),
    marginBottom: responsiveHeight(35),
    borderWidth: 1,
    borderRadius: 10,
    backgroundColor: colors.white,
  },
  wrapperMainList: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center',
  },
  wrapperFooterList: {
    justifyContent: 'flex-end',
    flexDirection: 'row',
    alignItems: 'center',
  },
  textDescription: {
    fontSize: 14,
    fontWeight: '400',
    // color: colors.white
  },
  textCategory: {
    fontSize: 16,
    fontWeight: '500',
    // color: colors.white
    textTransform: 'lowercase',
    fontStyle: 'italic'
  },
  textDate: {
    fontSize: 14,
    fontWeight: '400',
    color: colors.secondary,
    marginBottom: responsiveHeight(5),
  },
  wrapperChecklist: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: responsiveHeight(14),
    paddingHorizontal: responsiveWidth(10),
    backgroundColor: colors.green,
    borderRadius: 25,
  },
  wrapperFooterIcon: {
    marginHorizontal: responsiveWidth(8),
  },
})