import React, { Component } from 'react'
import { SearchBar } from '@sishuguojixuefu/antd-mobile-rn'
import { observer } from 'mobx-react'
import { action, observable } from 'mobx'
import { SearchBarProps } from '@sishuguojixuefu/antd-mobile-rn/lib/search-bar'

class Store {
  searchBar: any
  @observable value = ''

  @action setSearchBar = searchBar => {
    this.searchBar = searchBar
  }

  @action onCancel = () => {
    this.searchBar.inputRef.blur()
    this.value = ''
  }

  @action onChange = (value: string) => {
    this.value = value
  }
}

@observer
class SearchBarView extends Component<SearchBarProps, any> {
  static defaultProps = {}
  value: string | undefined
  store: Store

  constructor(props: SearchBarProps) {
    super(props)
    this.store = new Store()
  }

  clearText = () => {
    const { onChange } = this.store
    onChange('')
  }

  render() {
    const { setSearchBar, value } = this.store
    return (
      <SearchBar
        {...this.props}
        ref={c => {
          setSearchBar(c)
        }}
        value={value}
        onCancel={val => {
          this.store.onCancel()
          this.props.onCancel && this.props.onCancel(val)
        }}
        onChange={val => {
          this.store.onChange(val)
          this.props.onChange && this.props.onChange(val)
        }}
        onSubmit={val => {
          this.props.onSubmit && this.props.onSubmit(val)
        }}
      />
    )
  }
}

export default SearchBarView
