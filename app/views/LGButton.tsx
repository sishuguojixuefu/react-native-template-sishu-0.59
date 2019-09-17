import React, { Component } from 'react'
import { Text, StyleSheet, ViewStyle, TouchableOpacity, GestureResponderEvent } from 'react-native'
import { observer } from 'mobx-react'
import LinearGradient from 'react-native-linear-gradient'
import theme from '~/theme'

interface Props {
  children: React.ReactText
  onPress?: ((event: GestureResponderEvent) => void) | undefined
  colors?: (string | number)[]
  disabled?: boolean
  style?: ViewStyle
  type?: 'horizontal' | 'vertical' | 'angle'
}

@observer
class LGButton extends Component<Props, any> {
  static defaultProps = {
    colors: ['#FFC661', '#FEA835'],
    disabled: false,
    type: 'horizontal',
  }

  _getStart = () => {
    const { type } = this.props
    switch (type) {
      case 'horizontal':
      case 'vertical':
        return { x: 0, y: 0 }
      case 'angle':
        return { x: 1, y: 0 }
      default:
        return { x: 0, y: 0 }
    }
  }

  _getEnd = () => {
    const { type } = this.props
    switch (type) {
      case 'horizontal':
        return { x: 1, y: 0 }
      case 'angle':
      case 'vertical':
        return { x: 0, y: 1 }
      default:
        return { x: 0, y: 1 }
    }
  }

  render() {
    const { children, colors, disabled, onPress, style } = this.props
    return (
      <TouchableOpacity
        activeOpacity={disabled ? 1 : 0.5}
        style={[styles.wrapperStyle, style]}
        onPress={e => {
          !disabled && onPress && onPress(e)
        }}
      >
        <LinearGradient
          start={this._getStart()}
          end={this._getEnd()}
          colors={colors!}
          style={[styles.innerWrapperStyle, { opacity: disabled ? 0.5 : 1 }]}
        >
          <Text style={styles.buttonText}>{children}</Text>
        </LinearGradient>
      </TouchableOpacity>
    )
  }
}

const styles = StyleSheet.create({
  buttonText: {
    color: '#fff',
    fontSize: 18,
    marginLeft: theme.h_spacing_sm,
  },
  innerWrapperStyle: {
    alignItems: 'center',
    borderRadius: 20,
    height: 40,
    justifyContent: 'center',
  },
  wrapperStyle: {
    backgroundColor: '#ffffff',
    borderRadius: 20,
  },
})

export default LGButton
