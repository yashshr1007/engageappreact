import { Flex, Layout} from "antd"
import AppHeader from "./AppHeader"
import AppFooter from "./AppFooter"
import Leaderboard from "./Leaderboard"
import EmployeeComment from "./HomeComponents/EmployeeComment"
import { useAuth0 } from "@auth0/auth0-react"

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
  backgroundColor: '#0958d9',
  alignItems: 'center'
}

const list = [{"title":"abc1", "description":"abc description", "ipath":"https://i.giphy.com/media/v1.Y2lkPTc5MGI3NjExaW5qb25qNG1ubzc3cGxnZmIybWJjMDAwaHZ1cmlnNWQxbXh1YXRqMiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/BAnGhhVwZUW6EvN7ET/giphy.gif"},
  {"title":"xyz1", "description":"abc description", "ipath":"https://i.giphy.com/media/v1.Y2lkPTc5MGI3NjExMzVqOGh6MTJ6aDlrc2EzdTY1Z3lvaWN5aWk3OGliZjh2N3ZxNHE2dyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/Y3FJ0Ghc1sDiBpTmjg/giphy.gif"}
]

const Home = () => {
    const {Content} = Layout
    const {getAccessTokenSilently} = useAuth0()
    const getToken = getAccessTokenSilently({authorizationParams:{
      audience: "AiEngageApi",
      scope: "read:posts write:posts",
    },})
    getToken.then((token) => console.log(token))
  return (
    <Flex gap="middle" wrap>
    <Layout style={layoutStyle1}>
        <AppHeader/>
        <Content style={contentStyle}>
{list.map(emp => <EmployeeComment employee={emp}/>)}
    </Content><AppFooter /></Layout><Layout style={layoutStyle2}>
      <Content style={contentStyle}><Leaderboard /></Content>
     
      </Layout></Flex>)
}

export default Home