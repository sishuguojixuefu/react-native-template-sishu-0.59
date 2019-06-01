/* eslint-disable @typescript-eslint/no-empty-interface */
import React from 'react'
import { NavigationScreenProps } from 'react-navigation'

interface Props<T> extends NavigationScreenProps {}

// 泛型组件: http://t.cn/Ai9zc35Y
export default class BaseScreen<T> extends React.Component<Props<T>, any> {}
