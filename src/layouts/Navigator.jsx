import React, { Component } from 'react';
import { Layout, Menu, Breadcrumb, Icon } from 'antd';
const { SubMenu } = Menu;
const { Header, Content, Sider } = Layout;

class Navigator extends Component {
  state = {
    current: '1',
    openKeys: ['said'],
  }
  handleClick = (e) => {
    console.log('Clicked: ', e);
    this.setState({ current: e.key });
  }
  onOpenChange = (openKeys) => {
    const state = this.state;
    const latestOpenKey = openKeys.find(key => !~state.openKeys.indexOf(key));
    this.setState({ openKeys: [latestOpenKey] });
  }
  render() {
    return (
      <Layout>
        <Header className="header">
          <div className="logo" />
          <Menu
            theme="dark"
            mode="horizontal"
            style={{ lineHeight: '64px' }}
          >
          </Menu>
        </Header>
        <Layout>
          <Sider width={200} style={{ background: '#fff' }} trigger={null}>
            <Menu
              mode="inline"
              theme="dark"
              openKeys={this.state.openKeys}
              selectedKeys={[this.state.current]}
              onOpenChange={this.onOpenChange}
              onClick={this.handleClick}
              style={{ height: '100%' }}
            >
              <SubMenu key="said" title={<span><Icon type="book" />Said 管理</span>}>
                <Menu.Item key="1"><Icon type="book" />Said 概况</Menu.Item>
                <Menu.Item key="2"><Icon type="book" />添加 Said</Menu.Item>
              </SubMenu>
              <SubMenu key="blog" title={<span><Icon type="laptop" />日志管理</span>}>
                <Menu.Item key="3"><Icon type="book" />Blog 管理</Menu.Item>
                <Menu.Item key="4"><Icon type="book" />添加 Blog</Menu.Item>
              </SubMenu>
              <SubMenu key="other" title={<span><Icon type="notification" />其他管理</span>}>
                <Menu.Item key="5"><Icon type="book" />图片管理</Menu.Item>
                <Menu.Item key="6"><Icon type="book" />音乐管理</Menu.Item>
                <Menu.Item key="7"><Icon type="book" />标签管理</Menu.Item>
              </SubMenu>
              <SubMenu key="site" title={<span><Icon type="notification" />站点管理</span>}>
                <Menu.Item key="8"><Icon type="book" />访问概况</Menu.Item>
                <Menu.Item key="9"><Icon type="book" />站点日志</Menu.Item>
              </SubMenu>
            </Menu>
          </Sider>
          <Layout style={{ padding: '0 24px 24px' }}>
            <Breadcrumb style={{ margin: '12px 0' }}>
              <Breadcrumb.Item>Home</Breadcrumb.Item>
              <Breadcrumb.Item>List</Breadcrumb.Item>
              <Breadcrumb.Item>App</Breadcrumb.Item>
            </Breadcrumb>
            <Content style={{ background: '#fff', padding: 24, margin: 0, minHeight: 280 }}>
              Content
        </Content>
          </Layout>
        </Layout>
      </Layout>
    );
  }
}

export default Navigator;