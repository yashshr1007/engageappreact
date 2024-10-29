import AppHeader from "./AppHeader"
import AppFooter from "./AppFooter"
import { Flex, Layout } from "antd"
import Leaderboard from "./Leaderboard"

const layoutStyle1 = {
  borderRadius: 8,
  overflow: 'hidden',
  width: 'calc(70% - 8px)',
  maxWidth: 'calc(70% - 8px)',
}

const layoutStyle2 = {
  borderRadius: 8,
  overflow: 'hidden',
  width: 'calc(30% - 8px)',
  maxWidth: 'calc(30% - 8px)',
}

const contentStyle: React.CSSProperties = {
  textAlign: 'center',
  minHeight: 800,
  lineHeight: '120px',
  color: '#fff',
  backgroundColor: '#62cef3',
}

const History = () => {
  const {Content} = Layout
  return (
    <Flex gap="middle" wrap>
    <Layout style={layoutStyle1}>
        <AppHeader/>
        <Content style={contentStyle}>
history content
    </Content><AppFooter /></Layout><Layout style={layoutStyle2}>
      <Content style={contentStyle}><Leaderboard /></Content>
     
      </Layout></Flex>)
}

export default History