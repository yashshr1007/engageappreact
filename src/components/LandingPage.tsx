import AppFooter from "./AppFooter"
import AppHeader from "./AppHeader"
import Login from "./Login"
import { useAuth0 } from "@auth0/auth0-react"

const LandingPage = () => {
    const { isAuthenticated, isLoading, getAccessTokenSilently} = useAuth0()

  console.log("landing auth "+ isAuthenticated)
  return (<div><div hidden = {!isAuthenticated || isLoading}><AppHeader /><AppFooter /></div><div hidden = {isAuthenticated || isLoading}><Login /></div></div>)
}

export default LandingPage