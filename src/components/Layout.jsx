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
      "collapsed": true,
      "menulist":[
        {
          'text': '首页',
          'type': 'home',
          'to': '/home',
          'key': 'home'
        },
        {
          'text': '系统管理',
          'type': 'project',
          'to': '/system',
          'key': 'system'
        },
        {
          'text': '用户中心',
          'type': 'user',
          'to': '/user',
          'key': 'user'
        },
        {
          'text': '对象管理',
          'type': 'database',
          'key': 'objlist',
          'list': [
            {
              'text': '对象管理',
              'type': 'obj',
              'to': '/obj',
              'key': 'obj'
            },
            {
              'text': '对象类别',
              'type': 'obj',
              'to': 'obj',
              'key': 'objtype'
            }
          ]
        },
        {
          'text': '规则管理',
          'type': 'share-alt',
          'to': '/rule',
          'key': 'rulelist',
          'list': [
            {
              'text': '规则管理',
              'type': 'rule',
              'to': '/rule',
              'key': 'rule'
            },
            {
              'text': '远程规则管理',
              'type': 'rule',
              'to': '/rule',
              'key': 'remoterule'
            },
            {
              'text': '规则类别',
              'type': 'rule',
              'to': '/rule',
              'key': 'ruletype'
            }
          ]
        },
        {
          'text': '模块管理',
          'type': 'cluster',
          'to': '/mod',
          'key': 'modlist',
          'list':[
            {
              'text': '模块管理',
              'type': 'mod',
              'to': '/mod',
              'key': 'mod',
            },
            {
              'text': '模块类别',
              'type': 'mod',
              'to': '/mod',
              'key': 'modtype',
            }
          ]
        },
        {
          'text': '模版管理',
          'type': 'layout',
          'to': '/mod',
          'key': 'modlsit',
          'list': [
            {
              'text': '模版管理',
              'type': 'mod',
              'to': '/template',
              'key': 'template',
            },
            {
              'text': '行业类别',
              'type': 'trade',
              'to': '/trade',
              'key': 'trade',
            },
            {
              'text': '模版类别',
              'type': 'mod',
              'to': '/template',
              'key': 'templatetype',
            }
          ]
        },
        {
          'text': '资源管理',
          'type': 'deployment-unit',
          'to': '/data',
          'key': 'datalist',
          'list': [
            {
              'text': '资源管理',
              'type': 'mod',
              'to': '/dada',
              'key': 'data',
            },
            {
              'text': '资源类别',
              'type': 'data',
              'to': '/data',
              'key': 'datatype',
            }
          ]
        },
        {
          'text': '其他',
          'type': 'gold',
          'to': '/other',
          'key': 'otherlist',
          'list': [
            {
              'text': '知识库',
              'type': 'node',
              'to': '/node',
              'key': 'node',
            }
          ]
        }
      ]
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
    const menulist = this.state.menulist.map((item) =>{
      debugger
      if(item.list){
        
        return <SubMenu key={item.key} title={<span><Icon type={item.type} /><span>{item.text}</span></span>}>
        {item.list.map((list) =>{
          return <Menu.Item key={list.key}><Link to={list.to}>{list.text}</Link></Menu.Item>
        })}
      </SubMenu>
      }else{
        return <Menu.Item key={item.key}>
        <Link to={item.to}>
          <Icon type={item.type} />
          <span>{item.text}</span>
        </Link>
      </Menu.Item>
      }
    })
    return (
      <Layout>
        <Sider
          trigger={null}
          collapsible
          collapsed={this.state.collapsed}
        >
          <div className="logo"><img src={Logo} alt="logo" /><Link to="/login">React Udev</Link></div>
          <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
            {menulist}
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
                <MenuItemGroup title="设置中心">
                  <Menu.Item key="setting:3">个人设置</Menu.Item>
                  <Menu.Item key="setting:4">系统设置</Menu.Item>
                </MenuItemGroup>
                <MenuItemGroup title="用户中心">
                  <Menu.Item key="setting:1">你好 - {'Caleb'}</Menu.Item>
                  <Menu.Item key="setting:2">个人信息</Menu.Item>
                  <Menu.Item key="logout"><span onClick={this.logout}>退出登录</span></Menu.Item>
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