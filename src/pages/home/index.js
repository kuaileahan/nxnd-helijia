import React, { Component } from 'react'
import { TabBar } from 'antd-mobile';


import First from '../first/index'
import home from '../../assets/iconfonts/home.svg'
import homeActive from '../../assets/iconfonts/home-active.svg'
import order from '../../assets/iconfonts/order.svg'
import orderActive from '../../assets/iconfonts/order-active.svg'
import myself from '../../assets/iconfonts/my.svg'
import myselfActive from '../../assets/iconfonts/my-active.svg'
import classifi from '../../assets/iconfonts/classifi.svg'
import classifiActive from '../../assets/iconfonts/classifi-active.svg'


import './index.scss'

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedTab: 'index',
      hidden: false,
      fullScreen: false,
    };
  }
  render(){
    return ( 
    <TabBar
      unselectedTintColor="#949494"
      tintColor="#33A3F4"
      barTintColor="white"
      hidden={this.state.hidden}
    >
      <TabBar.Item
        title="首页"
        key="index"
        icon={<div style={{
          width: '22px',
          height: '22px',
          background: `url(${home}) center center /  21px 21px no-repeat` }}
        />
        }
        selectedIcon={<div style={{
          width: '22px',
          height: '22px',
          background: `url(${homeActive}) center center /  21px 21px no-repeat` }}
        />
        }
        selected={this.state.selectedTab === 'index'}
        badge={1}
        onPress={() => {
          this.setState({
            selectedTab: 'index',
          });
        }}
        data-seed="logId"
      >
        <First></First>
      </TabBar.Item>
      <TabBar.Item
        title="热门"
        key="hot"
        icon={<div style={{
          width: '22px',
          height: '22px',
          background: `url(${classifi}) center center /  21px 21px no-repeat` }}
        />
        }
        selectedIcon={<div style={{
          width: '22px',
          height: '22px',
          background: `url(${classifiActive}) center center /  21px 21px no-repeat` }}
        />
        }
        selected={this.state.selectedTab === 'hot'}
        badge={1}
        onPress={() => {
          this.setState({
            selectedTab: 'hot',
          });
        }}
        data-seed="logId"
      >
        <div>热门</div>
      </TabBar.Item>
      <TabBar.Item
        title="自选"
        key="myself"
        icon={<div style={{
          width: '22px',
          height: '22px',
          background: `url(${order}) center center /  21px 21px no-repeat` }}
        />
        }
        selectedIcon={<div style={{
          width: '22px',
          height: '22px',
          background: `url(${orderActive}) center center /  21px 21px no-repeat` }}
        />
        }
        selected={this.state.selectedTab === 'myself'}
        badge={1}
        onPress={() => {
          this.setState({
            selectedTab: 'myself',
          });
        }}
        data-seed="logId"
      >
        <div>自选页</div>
      </TabBar.Item>
      <TabBar.Item
        title="设置"
        key="setting"
        icon={<div style={{
          width: '22px',
          height: '22px',
          background: `url(${myself}) center center /  21px 21px no-repeat` }}
        />
        }
        selectedIcon={<div style={{
          width: '22px',
          height: '22px',
          background: `url(${myselfActive}) center center /  21px 21px no-repeat` }}
        />
        }
        selected={this.state.selectedTab === 'setting'}
        onPress={() => {
          this.setState({
            selectedTab: 'setting',
          });
        }}
        data-seed="logId"
      >
        <div>设置页</div>{//渲染TabBar选项的页面
        }
      </TabBar.Item>
      </TabBar>)
  }
}
export default Home