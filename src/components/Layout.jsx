import React, { Component } from 'react';
import { Layout, Menu, Icon, Badge } from 'antd';
import { Link } from 'react-router-dom';
import '../styles/LayoutBox/LayoutBox.scss';
import Logo from '../logo.svg';
const { Header, Sider, Content } = Layout;
const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;
class LayoutBox extends Component {
  constructor(props) {
    super(props);
    this.state = {
      "activeIndex": 0,
      "collapsed": true
    }
  }
  toggle = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  }
  menuClick = e => {
    console.log(e);
    e.key === 'logout' && this.logout();
  };
  logout = () => {
    localStorage.removeItem('user');
    this.props.history.push('/login')
  };
  render() {
    return (
      <Layout>
        <Sider
          trigger={null}
          collapsible
          collapsed={this.state.collapsed}
        >
          <div className="logo"><img src={Logo} alt="logo" /><Link to="/login">React Wheel</Link></div>
          <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
            <Menu.Item key="1">
              <Link to="/home">
                <Icon type="home" />
                <span>首页</span>
              </Link>
            </Menu.Item>
            <Menu.Item key="2">
              <Link to="/user">
                <Icon type="user" />
                <span>用户管理</span>
              </Link>
            </Menu.Item>
            <SubMenu key="sub1" title={<span><Icon type="mail" /><span>Navigation One</span></span>}>
              <Menu.Item key="5">Option 5</Menu.Item>
              <Menu.Item key="6">Option 6</Menu.Item>
              <Menu.Item key="7">Option 7</Menu.Item>
              <Menu.Item key="8">Option 8</Menu.Item>
            </SubMenu>
            <SubMenu key="sub2" title={<span><Icon type="mail" /><span>Navigation One</span></span>}>
              <Menu.Item key="5">Option 5</Menu.Item>
              <Menu.Item key="6">Option 6</Menu.Item>
              <Menu.Item key="7">Option 7</Menu.Item>
              <Menu.Item key="8">Option 8</Menu.Item>
            </SubMenu>
            <SubMenu key="sub3" title={<span><Icon type="mail" /><span>Navigation One</span></span>}>
              <Menu.Item key="5">Option 5</Menu.Item>
              <Menu.Item key="6">Option 6</Menu.Item>
              <Menu.Item key="7">Option 7</Menu.Item>
              <Menu.Item key="8">Option 8</Menu.Item>
            </SubMenu>
            <SubMenu key="sub4" title={<span><Icon type="mail" /><span>Navigation One</span></span>}>
              <Menu.Item key="5">Option 5</Menu.Item>
              <Menu.Item key="6">Option 6</Menu.Item>
              <Menu.Item key="7">Option 7</Menu.Item>
              <Menu.Item key="8">Option 8</Menu.Item>
            </SubMenu>
            <SubMenu key="sub5" title={<span><Icon type="mail" /><span>Navigation One</span></span>}>
              <Menu.Item key="5">Option 5</Menu.Item>
              <Menu.Item key="6">Option 6</Menu.Item>
              <Menu.Item key="7">Option 7</Menu.Item>
              <Menu.Item key="8">Option 8</Menu.Item>
            </SubMenu>
            <SubMenu key="sub6" title={<span><Icon type="mail" /><span>Navigation One</span></span>}>
              <Menu.Item key="5">Option 5</Menu.Item>
              <Menu.Item key="6">Option 6</Menu.Item>
              <Menu.Item key="7">Option 7</Menu.Item>
              <Menu.Item key="8">Option 8</Menu.Item>
            </SubMenu>
            <SubMenu key="sub7" title={<span><Icon type="mail" /><span>Navigation One</span></span>}>
              <Menu.Item key="5">Option 5</Menu.Item>
              <Menu.Item key="6">Option 6</Menu.Item>
              <Menu.Item key="7">Option 7</Menu.Item>
              <Menu.Item key="8">Option 8</Menu.Item>
            </SubMenu>
            <SubMenu key="sub8" title={<span><Icon type="mail" /><span>Navigation One</span></span>}>
              <Menu.Item key="5">Option 5</Menu.Item>
              <Menu.Item key="6">Option 6</Menu.Item>
              <Menu.Item key="7">Option 7</Menu.Item>
              <Menu.Item key="8">Option 8</Menu.Item>
            </SubMenu>
            <SubMenu key="sub9" title={<span><Icon type="mail" /><span>Navigation One</span></span>}>
              <Menu.Item key="5">Option 5</Menu.Item>
              <Menu.Item key="6">Option 6</Menu.Item>
              <Menu.Item key="7">Option 7</Menu.Item>
              <Menu.Item key="8">Option 8</Menu.Item>
            </SubMenu>
            <Menu.Item key="3">
              <Link to="/about">
                <Icon type="upload" />
                <span>关于</span>
              </Link>
            </Menu.Item>
          </Menu>
        </Sider>
        <Layout>
          <Header style={{ background: '#fff', padding: 0 }}>
            <Icon
              className="trigger"
              type={this.state.collapsed ? 'menu-unfold' : 'menu-fold'}
              onClick={this.toggle}
            />
            <Menu
              mode="horizontal"
              style={{ lineHeight: '64px', float: 'right' }}
              onClick={this.menuClick}
            >
              <Menu.Item key="1">
                <Badge count={25} overflowCount={10} style={{ marginLeft: 10 }}>
                  <Icon type="notification" />
                </Badge>
              </Menu.Item>
              <SubMenu title={<span className="avatar"><img src={Logo} alt="头像" /><i className="on bottom b-white" /></span>}>
                <MenuItemGroup title="用户中心">
                  <Menu.Item key="setting:1">你好 - {'Caleb'}</Menu.Item>
                  <Menu.Item key="setting:2">个人信息</Menu.Item>
                  <Menu.Item key="logout"><span onClick={this.logout}>退出登录</span></Menu.Item>
                </MenuItemGroup>
                <MenuItemGroup title="设置中心">
                  <Menu.Item key="setting:3">个人设置</Menu.Item>
                  <Menu.Item key="setting:4">系统设置</Menu.Item>
                </MenuItemGroup>
              </SubMenu>
            </Menu>
          </Header>
          <Content>
            {this.props.children}
          </Content>
        </Layout>
      </Layout>
    )
  }
}
export default LayoutBox