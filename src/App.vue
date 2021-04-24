<template>
  <Layout style="min-height: 100vh">
    <Sider v-model:collapsed="collapsed" collapsible>
      <div class="logo" />
      <Menu theme="dark" v-model:selectedKeys="selectedKeys" mode="inline">
        <MenuItem key="1">
          <pie-chart-outlined />
          <span>Option 1</span>
        </MenuItem>
        <MenuItem key="2">
          <desktop-outlined />
          <span>Option 2</span>
        </MenuItem>
        <SubMenu key="sub1">
          <template #title>
            <span>
              <user-outlined />
              <span>User</span>
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
        </SubMenu>
        <MenuItem key="9">
          <file-outlined />
          <span>File</span>
        </MenuItem>
      </Menu>
    </Sider>
    <Layout>
      <Content
        style="margin: 16px"
        v-for="(category, index) in navList" :key="index"
      >
        <Card
          :title="category.category"
          :bordered="false"
          :headStyle="{'border-bottom': 'none'}"
        >
          <Row :gutter="[8, 8]">
            <Col
              :xs="24"
              :md="12"
              :lg="8"
              :xl="6"
              v-for="(nav, navIndex) in category.children" :key="navIndex"
            >
              <a :href="nav.link" target="_blank">
                <Card size="small">
                  <CardMeta
                    :title="nav.title"
                  >
                    <template #avatar>
                      <Avatar :src="nav.icon" />
                    </template>
                    <template #description>
                      <div style="height: 45px">{{ nav.description }}</div>
                    </template>
                  </CardMeta>
                </Card>
              </a>
            </Col>
          </Row>
        </Card>
      </Content>
      <Footer style="text-align: center">
        COLDTEA INSIGHT OF INNOVATION ROAD
      </Footer>
    </Layout>
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
import { Layout, Menu, Card, Row, Col, Avatar } from 'ant-design-vue';
const { Sider, Content, Footer} = Layout
const MenuItem = Menu.Item
const SubMenu = Menu.SubMenu
const CardMeta = Card.Meta
export default defineComponent({
  components: {
    PieChartOutlined,
    DesktopOutlined,
    UserOutlined,
    TeamOutlined,
    FileOutlined,
    Layout,
    Sider,
    Content,
    Footer,
    Menu,
    MenuItem,
    SubMenu,
    Card,
    Row,
    Col,
    CardMeta,
    Avatar,
  },

  data() {
    return {
      collapsed: ref(false),
      selectedKeys: ref(['1']),
      navList: [{
        category: '团队组织',
        children: [{
          title: '腾讯全端AlloyTeam团队',
          icon: 'http://www.alloyteam.com/favicon.ico',
          description: '腾讯全端AlloyTeam团队',
          link: 'http://www.alloyteam.com/',
        },{
          title: 'ISUX',
          icon: 'https://isux.tencent.com/favicon.ico',
          description: '腾讯社交用户体验设计',
          link: 'https://isux.tencent.com/',
        },{
          title: 'FEX',
          icon: 'http://fex.baidu.com/favicon.ico',
          description: 'FEX_FEX_做最专业的前端_百度前端研发部_百度前端团队Blog',
          link: 'http://fex.baidu.com/',
        },{
          title: '凹凸实验室',
          icon: 'https://aotu.io/favicon.ico',
          description: '凹凸实验室(Aotu.io) 始建于2015年，是一个年轻基情的技术社区组织。O2面向多终端技术体系，致力于构建沉淀与分享包括但不限于交互、页面制作技巧、前端开发、原生APP开发等方面的专业知识及案例。',
          link: 'https://aotu.io/',
        },{
          title: 'Ant Design',
          icon: 'https://ant.design/favicon.ico',
          description: '一套企业级 UI 设计语言和 React 组件库',
          link: 'https://ant.design/',
        },]
      },{
        category: '开发社区',
        children: [{
          title: '掘金',
          icon: 'https://juejin.cn/favicon.ico',
          description: '掘金是一个帮助开发者成长的社区,技术大牛和极客共同编辑为你筛选出最优质的阅读干货',
          link: 'https://juejin.cn/',
        },{
          title: 'Stack Overflow',
          icon: 'https://stackoverflow.com/favicon.ico',
          description: 'Where Developers Learn, Share, & Build Careers',
          link: 'https://stackoverflow.com/',
        },{
          title: 'GitHub',
          icon: 'https://github.com/favicon.ico',
          description: '面向开源及私有软件项目的git托管平台',
          link: 'https://github.com/',
        },{
          title: 'SegmentFault',
          icon: 'https://segmentfault.com/favicon.ico',
          description: '一个专注于解决编程问题，提高开发技能的社区。',
          link: 'https://segmentfault.com/',
        },{
          title: 'Smashingmagazine',
          icon: 'https://www.smashingmagazine.com/favicon.ico',
          description: '一个web技术类的博客杂志站点',
          link: 'https://www.smashingmagazine.com/',
        },{
          title: 'V2EX',
          icon: 'https://www.v2ex.com/favicon.ico',
          description: '一个关于分享和探索的地方。',
          link: 'https://www.v2ex.com/',
        },{
          title: 'CNode',
          icon: 'https://cnodejs.org/favicon.ico',
          description: 'Node.js专业中文社区',
          link: 'https://cnodejs.org/',
        },{
          title: 'JS Tips',
          icon: 'http://www.jstips.co/favicon.ico',
          description: '每天推出一个JS技巧的网站',
          link: 'http://www.jstips.co/',
        },]
      },{
        category: '前端门户',
        children: [{
          title: '印记中文',
          icon: 'https://docschina.org/favicon.ico',
          description: '印记中文是最权威是技术中文文档社区',
          link: 'https://docschina.org/',
        },{
          title: 'W3cplus',
          icon: 'http://www.w3cplus.com/favicon.ico',
          description: 'W3cplus是一个致力于推广国内前端行业的技术博客',
          link: 'http://www.w3cplus.com/',
        },{
          title: 'HTML5梦工场',
          icon: 'http://www.html5dw.com/favicon.ico',
          description: 'HTML5梦工场 助推HTML5发展',
          link: 'http://www.html5dw.com/',
        },{
          title: 'w3ctech',
          icon: 'https://w3ctech.com/favicon.ico',
          description: '中国最大的前端技术社区',
          link: 'https://w3ctech.com/',
        },{
          title: '大前端',
          icon: 'http://www.daqianduan.com/favicon.ico',
          description: '旨在更完善的为各位前端爱好者提供阅读和自我提升服务。',
          link: 'http://www.daqianduan.com/',
        },]
      },{
        category: '框架类库',
        children: [{
          title: 'React',
          icon: 'https://facebook.github.io/react/favicon.ico',
          description: '用于构建用户界面的Javscript库',
          link: 'https://facebook.github.io/react/',
        },{
          title: 'VUE',
          icon: 'https://cn.vuejs.org/favicon.ico',
          description: '构建数据驱动的web界面的渐进式框架',
          link: 'https://cn.vuejs.org/',
        },{
          title: 'JQuery',
          icon: 'https://www.jquery123.com/favicon.ico',
          description: '优秀的JavaScript代码库',
          link: 'https://www.jquery123.com/',
        },{
          title: 'Bootstrap',
          icon: 'http://www.bootcss.com/favicon.ico',
          description: '基于HTML/CSS/Javscript的前端框架',
          link: 'http://www.bootcss.com/',
        },{
          title: 'React Native',
          icon: 'https://reactnative.cn/favicon.ico',
          description: '使用React构建原生app的框架',
          link: 'https://reactnative.cn/',
        },{
          title: 'RxJs',
          icon: 'http://reactivex.io/rxjs/favicon.ico',
          description: '提供强大的数据流组合和控制能力的Reactive编程库',
          link: 'http://reactivex.io/rxjs/',
        },]
      },{
        category: '图形动效',
        children: [{
          title: 'D3',
          icon: 'https://d3js.org/favicon.ico',
          description: '用动态图形显示数据的JavaScript库',
          link: 'https://d3js.org/',
        },{
          title: 'Threejs',
          icon: 'https://threejs.org/favicon.ico',
          description: '运行在浏览器中的3D 引擎',
          link: 'https://threejs.org/',
        },{
          title: 'Echarts',
          icon: 'http://echarts.baidu.com/favicon.ico',
          description: '百度开发的可定制的数据可视化图表',
          link: 'http://echarts.baidu.com/',
        },{
          title: 'Highcharts',
          icon: 'http://www.highcharts.com/favicon.ico',
          description: '兼容 IE6+、支持移动端、图表类型丰富的HTML5交互性图表库',
          link: 'http://www.highcharts.com/',
        },]
      },{
        category: '',
        children: [{
          title: '',
          icon: 'favicon.ico',
          description: '',
          link: '',
        },]
      },{
        category: '',
        children: [{
          title: '',
          icon: 'favicon.ico',
          description: '',
          link: '',
        },]
      },{
        category: '',
        children: [{
          title: '',
          icon: 'favicon.ico',
          description: '',
          link: '',
        },]
      },{
        category: '',
        children: [{
          title: '',
          icon: 'favicon.ico',
          description: '',
          link: '',
        },]
      },{
        category: '',
        children: [{
          title: '',
          icon: 'favicon.ico',
          description: '',
          link: '',
        },]
      },]
    };
  },
});
</script>
<style scoped>
.logo {
  height: 32px;
  margin: 16px;
  background: rgba(255, 255, 255, 0.3);
}

.site-layout .site-layout-background {
  background: #fff;
}
[data-theme='dark'] .site-layout .site-layout-background {
  background: #141414;
}
</style>