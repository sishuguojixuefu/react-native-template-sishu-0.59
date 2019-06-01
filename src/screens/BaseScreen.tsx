import React from 'react'
import { NavigationScreenProp } from 'react-navigation'

interface Props {
  navigation: NavigationScreenProp<any, any>
}
// 泛型组件: http://t.cn/Ai9zc35Y
export default class BaseScreen<P = {}, S = {}, SS = any> extends React.Component<Props> {
  public constructor(props: any) {
    super(props)
  }
}
