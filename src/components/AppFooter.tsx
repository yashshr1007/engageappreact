import {Layout} from 'antd'

const footerStyle: React.CSSProperties = {
  textAlign: 'center',
  color: '#fff',
  backgroundColor: '#4096ff',
}

const AppFooter = () => {
  const {Footer} = Layout
  return (
    <Layout>
    <Footer style={footerStyle}>
    App Design ©{new Date().getFullYear()} Created by App Designers
    </Footer>
        </Layout>
  )
}

export default AppFooter