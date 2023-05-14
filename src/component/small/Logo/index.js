import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { colors } from '../../../utils'

const Logo = ({ color = 'white', size = 17 }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text(color, size)}>TO DO</Text>
      <Text style={styles.text(color, size)}>TODAY</Text>
    </View>
  )
}

export default Logo

const styles = StyleSheet.create({
  container: {
    // borderWidth: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: (color, size) => ({
    color: color,
    fontSize: size,
    fontWeight: '500',
  })
})