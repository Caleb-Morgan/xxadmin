import React, {Component} from 'react';
import { Layout, Menu, Icon } from 'antd';
import { Link } from 'react-router-dom';
import '../styles/LayoutBox/LayoutBox.scss';
import Logo from '../logo.svg';
const { Header, Sider, Content } = Layout;
class LayoutBox extends Component{
    constructor(props) {
        super(props);
        this.state = {
            "activeIndex":0
        }
    }
    toggle = () => {
        this.setState({
            collapsed: !this.state.collapsed,
        });
    }
    render(){
        return(
            <Layout>
        <Sider
          trigger={null}
          collapsible
          collapsed={this.state.collapsed}
        >
          <div className="logo"><img src={Logo} alt="logo"/><a href=""><Link to="/login">React Wheel</Link></a></div>
          <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
            <Menu.Item key="1">
                <Link to="/about">
                    <Icon type="user" />
                    <span>nav 1</span>
                </Link>
            </Menu.Item>
            <Menu.Item key="2">
              <Icon type="video-camera" />
              <span>nav 2</span>
            </Menu.Item>
            <Menu.Item key="3">
              <Icon type="upload" />
              <span>nav 3</span>
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
          </Header>
          <Content>
            Content
          </Content>
        </Layout>
      </Layout>
        )
    }
}
export default LayoutBox