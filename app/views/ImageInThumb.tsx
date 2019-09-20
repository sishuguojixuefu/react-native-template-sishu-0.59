import React from 'react'
import { View, Image, ImageSourcePropType } from 'react-native'
import theme from '~/theme'

interface Props {
  source: ImageSourcePropType
  height?: number
  width?: number
  text?: number
}

const ImageInThumb: React.SFC<Props> = ({ source, height, width, text }) => (
  <View style={{ height, width, marginRight: theme.h_spacing_lg }}>
    <Image source={source} style={{ height, width }} resizeMode="contain" />
  </View>
)

ImageInThumb.defaultProps = {
  height: 32,
  width: 32,
}

export default ImageInThumb
