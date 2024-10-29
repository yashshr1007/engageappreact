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
  return fetch('https://engageapi-1.onrender.com/api/v1/home', {headers:{'Authorization': 'Bearer eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6IlBuN01Ubm5mczlWNWt4N2QtMEk1byJ9.eyJpc3MiOiJodHRwczovL2Rldi1pb2tmMnRybncyeXFvNnp1LnVzLmF1dGgwLmNvbS8iLCJzdWIiOiJhdXRoMHw2NjViNzM5YTdhYjAwNmY2ZTI2ZTcxMzMiLCJhdWQiOlsiQWlFbmdhZ2VBcGkiLCJodHRwczovL2Rldi1pb2tmMnRybncyeXFvNnp1LnVzLmF1dGgwLmNvbS91c2VyaW5mbyJdLCJpYXQiOjE3MzAxNDMwOTEsImV4cCI6MTczMDIyOTQ5MSwic2NvcGUiOiJvcGVuaWQgcHJvZmlsZSBlbWFpbCByZWFkOnBvc3RzIHdyaXRlOnBvc3RzIiwib3JnX2lkIjoib3JnXzBjZ0Fnd0hDNE9qYzM0c1EiLCJhenAiOiJsc3YzWXQ2UWNnUkZEc2JVSmdUU0RrNWN5cGwzWm5hUiIsInBlcm1pc3Npb25zIjpbInJlYWQ6cG9zdHMiLCJ3cml0ZTpwb3N0cyJdfQ.QUdeF60l_MBef7Sg6K2o3hoVY2r5SjJxjVwWlwJ6u3rrR54c-GJ8YWlPcp3wgu0HiMI3E1R6fnZH977Aen0s2508uz9Mnb8tXzxwfo0cDU7RGkAsuFf4uS8SG8X4l3Bd0qPtuPcW-9fRxiyGkXvPs64FOEATWX4eW225g6BhNbTMYsArl2PIDQ4sjwVnT24MOXc0P7AtfN4u6wQF__kiSfXlWRHwoaVBEVIKVo-0clhoyER1VpYDCq3lCGdpBUB_juJteXxT7gfl2NFa6X-1ozPnNETuH3CsDprfp2DWK7o61-Ox5Mq9mUj-5o-Z56cRAdRUJ1J1ddAgv4P80voHsw' }})
  .then(res => res.json()).then(response => {return response as EmployeeComments[]})
}


const Home : React.FC = () => {
    const [value, setValue] = useState(Array);
    const {getAccessTokenSilently} = useAuth0()
    const getToken = getAccessTokenSilently({authorizationParams:{
      audience: "AiEngageApi",
      scope: "read:posts write:posts",
    },})
    useEffect(() => {
      getToken.then((token) => axios.get('https://engageapi-1.onrender.com/api/v1/home', {headers:{'Authorization': 'Bearer '+token }}).then(response => setValue(response.data))
    )
      // GET request using axios inside useEffect React hook
    // empty dependency array means this effect will only run once (like componentDidMount in classes)
    }, [])
    const {Content} = Layout
    console.log(value)
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