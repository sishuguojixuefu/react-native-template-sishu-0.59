import React from 'react'
import { View, StyleSheet } from 'react-native'
import theme from '~/theme'

const FormSpace: React.SFC = () => <View style={styles.container} />

const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.fill_body,
    height: theme.v_spacing_md,
  },
})

export default FormSpace
