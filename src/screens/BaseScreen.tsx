import React from 'react'
import { NavigationScreenProp, NavigationParams } from 'react-navigation'

export interface BaseScreenProps {
  navigation: NavigationScreenProp<any, any>
}

export default class BaseScreen<P = {}, S = {}, SS = any> extends React.Component<P, S, SS> {
  public params: NavigationParams
  public constructor(props: any) {
    super(props)
    // @ts-ignore
    this.params = this.props.navigation.state.params
  }
}
