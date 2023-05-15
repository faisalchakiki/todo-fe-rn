import { Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Add } from '../../../assets'
import { useDispatch, useSelector } from 'react-redux'
import { toggle, typeModal } from '../../../features/modal/modalSlice'
import { colors, responsiveHeight, responsiveWidth } from '../../../utils'

const AddButton = () => {
  const isVisible = useSelector(state => state.modal.isVisible)
  const dispatch = useDispatch()
  const toggleModal = () => {
    dispatch(typeModal("add"));
    dispatch(toggle(!isVisible));
  };

  return (
    <Pressable style={styles.wrapperAddButton} onPress={toggleModal} >
      <Add />
    </Pressable>
  )
}

export default AddButton

const styles = StyleSheet.create({
  wrapperAddButton: {
    paddingHorizontal: responsiveWidth(10),
    paddingVertical: responsiveHeight(10),
    backgroundColor: colors.white,
    borderRadius: 10
  },
})