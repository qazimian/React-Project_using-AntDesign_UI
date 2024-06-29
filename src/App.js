import "./App.css";
import "antd/dist/antd";
import React from "react";
import { Layout } from "antd";
import AppHeader from "./Components/common/Header";
import AppHome from "./views/home";
import { Footer } from "antd/es/layout/layout";
import AppFooter from "./Components/common/Footer";

const { Header, Content } = Layout;
function App() {
  return (
    <Layout className="mainLayout">
      <Header>
        <AppHeader/>
      </Header>
      <Content>
        <AppHome/>
      </Content>
      <Footer>
        <AppFooter/>
      </Footer>
    </Layout>
  );
}

export default App;
