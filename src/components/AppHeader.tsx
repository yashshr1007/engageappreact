import {Layout, Menu} from 'antd'
import { HomeOutlined, HistoryOutlined} from '@ant-design/icons'
import { Link } from 'react-router-dom'
import Logout from './Logout'

const headerStyle: React.CSSProperties = {
  textAlign: 'center',
  color: '#fff',
  height: 64,
  paddingInline: 48,
  lineHeight: '64px',
  backgroundColor: '#4096ff',
}

const menuStyle: React.CSSProperties = {
  textAlign: 'center',
  color: '#fff',
  height: 64,
  paddingInline: 48,
  lineHeight: '64px',
  backgroundColor: '#4096ff',
}

const AppHeader = () => {
  const {Header} = Layout
  return (
    <Layout>
      <Header style={headerStyle}>
        <Menu
          mode="horizontal"
          defaultSelectedKeys={['home']}
          style={menuStyle}
        >
          <Menu.Item>
          <HomeOutlined />
                                <span>HOME</span>
                                <Link to="/home" />
          </Menu.Item>
          <Menu.Item>
          <HistoryOutlined />
                                <span>HISTORY</span>
                                <Link to="/history" />
          </Menu.Item>
          <Menu.Item>
            <Logout />
          </Menu.Item>
          </Menu>
        </Header>
        </Layout>
  )
}

export default AppHeader