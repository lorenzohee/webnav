<template>
  <Layout style="min-height: 100vh">
    <Header :style="{ display: 'flex', position: 'fixed', zIndex: 1, width: '100%', background: 'white' }">
      <img src="./assets/logo.jpg" class="logo" alt="">
      <Menu theme="light" v-model:selectedKeys="selectedKeys" mode="horizontal" :style="{lineHeight: '64px'}">
        <MenuItem key="1">
          <router-link to="/">
            <pie-chart-outlined />
            <span>首页</span>
          </router-link>
        </MenuItem>
        <MenuItem key="2">
          <router-link to="/hello">
            <desktop-outlined />
            <span>动态</span>
          </router-link>
        </MenuItem>
        <SubMenu key="sub1">
          <template #title>
            <span>
              <user-outlined />
              <span>链接</span>
            </span>
          </template>
          <MenuItem key="3">Tom</MenuItem>
          <MenuItem key="4">Bill</MenuItem>
          <MenuItem key="5">Alex</MenuItem>
        </SubMenu>
        <SubMenu key="sub2">
          <template #title>
            <span>
              <team-outlined />
              <span>Team</span>
            </span>
          </template>
          <MenuItem key="6">Team 1</MenuItem>
          <MenuItem key="8">Team 2</MenuItem>
          <router-link to="/nav">
            <MenuItem key="8">Nav Manage</MenuItem>
          </router-link>
        </SubMenu>
        <MenuItem key="9">
          <file-outlined />
          <span>File</span>
        </MenuItem>
      </Menu>
    </Header>
    <Content
      style="margin: 64px 16px 20px"
    >
      <router-view></router-view>
    </Content>
    <Footer style="text-align: center">
      COLDTEA INSIGHT OF INNOVATION ROAD
    </Footer>
  </Layout>
</template>
<script>
import {
  PieChartOutlined,
  DesktopOutlined,
  UserOutlined,
  TeamOutlined,
  FileOutlined,
} from '@ant-design/icons-vue';
import { defineComponent, ref } from 'vue';
import { Layout, Menu } from 'ant-design-vue';
const { Header, Content, Footer} = Layout
const MenuItem = Menu.Item
const SubMenu = Menu.SubMenu
export default defineComponent({
  components: {
    PieChartOutlined,
    DesktopOutlined,
    UserOutlined,
    TeamOutlined,
    FileOutlined,
    Layout,
    Header,
    Content,
    Footer,
    Menu,
    MenuItem,
    SubMenu,
  },
  metaInfo: {
    title: 'title of haha',
    htmlAttrs: {
      lang: 'en',
      amp: true
    }
  },
  data() {
    return {
      selectedKeys: ref(['1']),
    }
  }
})
</script>
<style scoped>
  .logo {
    height: 32px;
    margin: 16px;
  }
</style>