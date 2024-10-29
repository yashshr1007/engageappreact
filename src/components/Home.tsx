import { Flex, Layout} from "antd"
import AppHeader from "./AppHeader"
import AppFooter from "./AppFooter"
import Leaderboard from "./Leaderboard"
import EmployeeComment from "./HomeComponents/EmployeeComment"
import { useAuth0 } from "@auth0/auth0-react"
import axios from "axios"
import { useEffect, useState } from "react"

const layoutStyle1 = {
  overflow: 'hidden',
  width: 'calc(70% - 8px)',
  maxWidth: 'calc(70% - 8px)',
}

const layoutStyle2 = {
  overflow: 'hidden',
  width: 'calc(30% - 8px)',
  maxWidth: 'calc(30% - 8px)',
}

const contentStyle: React.CSSProperties = {
  textAlign: 'center',
  color: '#fff',
  backgroundColor: '#62cef3',
  alignItems: 'center'
}

interface EmployeeComments {
  ipath:string
  description:string 
  title:string
}

function getComments(): Promise<EmployeeComments[]> {
  // For now, consider the data is stored on a static `users.json` file
  return fetch('https://engageapi-1.onrender.com/api/v1/home', {headers:{'Authorization': 'Bearer Token' }})
  .then(res => res.json()).then(response => {return response as EmployeeComments[]})
}


const Home : React.FC<EmployeeComments> = () => {
    const [value, setValue] = useState<EmployeeComments[]>([]);
    const {getAccessTokenSilently} = useAuth0()
    const getToken = getAccessTokenSilently({authorizationParams:{
      audience: "AiEngageApi",
      scope: "read:posts write:posts",
    },})
    useEffect(() => {
      getToken.then((token) => axios.get('https://engageapi-1.onrender.com/api/v1/home', {headers:{'Authorization': 'Bearer '+token }}).then(response => setValue(response.data))
    )
    }, [])
    const {Content} = Layout
  return (
    <Flex gap="middle" wrap>
    <Layout style={layoutStyle1}>
        <AppHeader/>
        <Content style={contentStyle}>
{value.map(emp => <EmployeeComment employee={emp}/>)}
    </Content><AppFooter /></Layout><Layout style={layoutStyle2}>
      <Content style={contentStyle}><Leaderboard /></Content>
    
      </Layout></Flex>)
}

export default Home