import { Breadcrumb, Layout, Menu } from 'antd';
import React from 'react';
import Shamrock from '../assets/Shamrock.png';
const { Header, Content, Footer } = Layout;

const Authenticated = () => (
  <Layout style={{
    height: '100vh',
    margin: '0px'
  }}>
    <Header
      style={{
        position: 'fixed',
        zIndex: 1,
        width: '100%',
        padding: 0,
        backgroundColor: 'white'
      }}
    >
      <Menu
        theme="light"
        mode="horizontal"
        defaultSelectedKeys={['2']}
        
      >        
        
      </Menu>
    </Header>
    <Content
      className="site-layout"
      style={{
        padding: '0 50px',
        marginTop: 64,
      }}
    >
      <div
        className="site-layout-background"
        style={{
          padding: 24,
          minHeight: 380,
        }}
      >
        Content
      </div>
    </Content>
    <Footer
      style={{
        textAlign: 'center',
      }}
    >
      Ant Design ©2018 Created by Ant UED
    </Footer>
  </Layout>
);

export default Authenticated;


// <Breadcrumb
//         style={{
//           margin: '16px 0',
//         }}
//       >
//         <Breadcrumb.Item>Home</Breadcrumb.Item>
//         <Breadcrumb.Item>List</Breadcrumb.Item>
//         <Breadcrumb.Item>App</Breadcrumb.Item>
//       </Breadcrumb>
