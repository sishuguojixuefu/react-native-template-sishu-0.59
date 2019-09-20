/* eslint prefer-destructuring:0 */
import React from 'react'
import AntDesign from 'react-native-vector-icons/AntDesign'
import { HeaderButtons, HeaderButton } from 'react-navigation-header-buttons'

// define IconComponent, color, sizes and OverflowIcon in one place
const SsHeaderButton = props => <HeaderButton color="#000000" iconSize={23} {...props} IconComponent={AntDesign} />

const Item = HeaderButtons.Item

const SsHeaderButtons = props => {
  return <HeaderButtons HeaderButtonComponent={SsHeaderButton} {...props} />
}

SsHeaderButtons.Item = Item

export default SsHeaderButtons
