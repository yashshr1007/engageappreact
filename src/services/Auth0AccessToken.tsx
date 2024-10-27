import { useAuth0 } from "@auth0/auth0-react"

const Auth0AccessToken = () => {
    const {getAccessTokenSilently} = useAuth0()
    const getToken = async () => {
        const accessToken = await getAccessTokenSilently({
            audience: "",
            scope: "",
        })
        return accessToken
    }
    return getToken   
}

export default Auth0AccessToken