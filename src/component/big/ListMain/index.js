import { ActivityIndicator, ScrollView, StyleSheet, Text, View } from 'react-native'
import React, { useEffect } from 'react'
import { responsiveHeight, responsiveWidth } from '../../../utils';
import { fetchListTodo } from '../../../features/todos/todoSlice';
import { useDispatch, useSelector } from 'react-redux';
import { BoxModal, CardList } from '../../small';


const ListMain = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(state => state.todos.isLoading)
  const todosData = useSelector((state) => state.todos?.data?.results);

  useEffect(() => {
    dispatch(fetchListTodo());
  }, [dispatch])

  if (isLoading) {
    return (
      <View style={[styles.container, styles.horizontal]} >
        <ActivityIndicator size="large" />
      </View >
    )
  }

  return (
    <ScrollView showsVerticalScrollIndicator={false} style={styles.mainContainer}>
      {todosData?.map((data, index) => (
        <CardList key={index} data={data} />
      ))}
      {todosData?.length === 0 && <Text style={styles.notFound}>Not Found</Text>}
      <BoxModal />
    </ScrollView>
  )
}

export default ListMain

const styles = StyleSheet.create({
  mainContainer: {
    marginTop: responsiveHeight(105),
    paddingTop: responsiveHeight(30),
    flex: 1,
    zIndex: 0,
  },
  notFound: {
    flex: 1,
    textAlign: 'center',
    fontSize: 16,
    fontWeight: '500'
  },
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  horizontal: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 10,
  },
})