import React from 'react';
import { Pressable, StyleSheet, View } from 'react-native';
import { ListMain, Logo } from '../../component';
import { colors, responsiveHeight, responsiveWidth } from '../../utils';
import { Add } from '../../assets/image';
import { useSelector, useDispatch } from 'react-redux'
import { toggle, typeModal } from '../../features/modal/modalSlice';

const Homepage = () => {
  const isVisible = useSelector(state => state.modal.isVisible)
  const dispatch = useDispatch()
  const toggleModal = () => {
    dispatch(typeModal("add"));
    dispatch(toggle(!isVisible));
  };

  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <Logo />
        <Pressable style={styles.wrapperAddButton} onPress={toggleModal} >
          <Add />
        </Pressable>
      </View>
      <ListMain />
    </View>
  )
}

export default Homepage

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
    position: 'relative',
    // alignItems: 'center',
    // justifyContent: 'center',
  },
  headerContainer: {
    backgroundColor: colors.primary,
    paddingTop: responsiveHeight(30),
    paddingBottom: responsiveHeight(20),
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: responsiveWidth(20),
    position: 'absolute',
    flex: 1,
    top: 0,
    right: 0,
    left: 0,
    zIndex: 10,
  },
  wrapperAddButton: {
    paddingHorizontal: responsiveWidth(10),
    paddingVertical: responsiveHeight(10),
    backgroundColor: colors.white,
    borderRadius: 10
  },

});