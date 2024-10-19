import { useAuth0 } from "@auth0/auth0-react"

const Logout = () => {
  const { logout } = useAuth0()
  return (
    <button onClick={() => logout({ logoutParams: { returnTo: "https://yashshr1007.github.io/engageappreact" } })}>
      Log Out
    </button>
  )
}

export default Logout