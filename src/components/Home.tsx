import { Button, Flex, Layout} from "antd"
import AppHeader from "./AppHeader"
import AppFooter from "./AppFooter"
import Leaderboard from "./Leaderboard"
import EmployeeComment from "./HomeComponents/EmployeeComment"
import { useAuth0 } from "@auth0/auth0-react"
import axios from "axios"
import { useEffect, useState } from "react"
import { BrowserView, MobileView } from 'react-device-detect'

const layoutStyleBrowser = {
  overflow: 'hidden',
  width: 'calc(70% - 8px)',
  maxWidth: 'calc(70% - 8px)',
}
const layoutStyleMobile = {
  overflow: 'hidden',
  width: 'calc(100% - 8px)',
  maxWidth: 'calc(100% - 8px)',
}

const layoutStyle2 = {
  overflow: 'hidden',
  width: 'calc(30% - 8px)',
  maxWidth: 'calc(30% - 8px)',
}

const contentStyle: React.CSSProperties = {
  textAlign: 'center',
  color: '#fff',
  backgroundColor: '#8b4282',
  alignItems: 'center'
}

// function getComments(): Promise<EmployeeComments[]> {
//   // For now, consider the data is stored on a static `users.json` file
//   return fetch('https://engageapi-1.onrender.com/api/v1/home', {headers:{'Authorization': 'Bearer Token' }})
//   .then(res => res.json()).then(response => {return response as EmployeeComments[]})
// }
const Home : React.FC = () => {
  interface EmployeeComments {
    ipath:string
    description:string 
    title:string
  }
    const [value, setValue] = useState<EmployeeComments[]>([])
    const [isLoading, setIsLoading] = useState(true)
    const {getAccessTokenSilently} = useAuth0()
    const getToken = getAccessTokenSilently({authorizationParams:{
      audience: "AiEngageApi",
      scope: "read:posts write:posts",
    },})
    useEffect(() => {
      getToken.then((token) => axios.get('https://engageapi-1.onrender.com/api/v1/home', {headers:{'Authorization': 'Bearer '+token }}).then(response => {setValue(response.data);
        setIsLoading(false);
      })
    )
    }, [])
    const {Content} = Layout
  return (
    <Layout>
      <div hidden={!isLoading}>
      <Layout>
         <Button>This is loading...</Button>
      </Layout>
      </div>
      <div hidden={isLoading}>
      <AppHeader/>
      <Content style={contentStyle}>
      <Flex gap="middle" vertical={false}>
      <BrowserView>
    <Layout style={layoutStyleBrowser}>
{value.map(emp => <EmployeeComment employee={emp}/>)}
    </Layout>
    <Layout style={layoutStyle2}>
      <Leaderboard />
      </Layout></BrowserView><MobileView>    <Layout style={layoutStyleMobile}>
{value.map(emp => <EmployeeComment employee={emp}/>)}
    </Layout></MobileView></Flex></Content><AppFooter /></div></Layout>)
}

export default Home