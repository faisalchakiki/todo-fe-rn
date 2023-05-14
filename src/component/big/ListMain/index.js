import { ScrollView, StyleSheet } from 'react-native'
import React, { useEffect } from 'react'
import { responsiveHeight, responsiveWidth } from '../../../utils';
import { fetchListTodo } from '../../../features/todos/todoSlice';
import { useDispatch, useSelector } from 'react-redux';
import { BoxModal, CardList } from '../../small';


const ListMain = () => {
  const dispatch = useDispatch();
  const testData = useSelector((state) => state);
  const todosData = useSelector((state) => state.todos?.data?.results);

  useEffect(() => {
    dispatch(fetchListTodo());
  }, [dispatch])

  // console.log(testData)

  return (
    <ScrollView showsVerticalScrollIndicator={false} style={styles.mainContainer}>
      {todosData?.map((data, index) => (
        <CardList key={index} data={data} />
      ))}
      <BoxModal />
    </ScrollView>
  )
}

export default ListMain

const styles = StyleSheet.create({
  mainContainer: {
    marginTop: responsiveHeight(105),
    paddingTop: responsiveHeight(20),
    flex: 1,
    zIndex: 0,
  },
})