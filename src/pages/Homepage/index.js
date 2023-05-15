import React, { useEffect } from 'react';
import { SafeAreaView, StatusBar, StyleSheet, View } from 'react-native';
import { ListMain, Logo } from '../../component';
import { colors, responsiveHeight, responsiveWidth } from '../../utils';
import AddButton from '../../component/small/AddButton';

const Homepage = () => {
  useEffect(() => {
    StatusBar.setBackgroundColor(colors.primary);
  }, []);
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: colors.primary }}>
      {/* <StatusBar backgroundColor="white" translucent={true} hidden={true} /> */}
      <View style={styles.container}>
        <View style={styles.headerContainer}>
          <Logo />
          <AddButton />
        </View>
        <ListMain />
      </View>
    </SafeAreaView>
  )
}

export default Homepage

const styles = StyleSheet.create({
  safeView: {
    flex: 1,
    backgroundColor: colors.primary,
  },
  container: {
    flex: 1,
    backgroundColor: colors.white,
    position: 'relative',
  },
  headerContainer: {
    backgroundColor: colors.primary,
    paddingTop: responsiveHeight(10),
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