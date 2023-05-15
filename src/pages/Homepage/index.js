import React from 'react';
import { StyleSheet, View } from 'react-native';
import { ListMain, Logo } from '../../component';
import { colors, responsiveHeight, responsiveWidth } from '../../utils';
import AddButton from '../../component/small/AddButton';

const Homepage = () => {
  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <Logo />
        <AddButton />
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
  },
  headerContainer: {
    backgroundColor: colors.primary,
    paddingTop: responsiveHeight(50),
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
});