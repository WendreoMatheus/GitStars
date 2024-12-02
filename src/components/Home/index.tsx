import { USER_ATOM, USER_ERROR_ATOM, USER_LOADING_ATOM } from "@/atoms/user.atom"
import { useAtomValue } from "jotai"
import SearchField from "./SearchField"
import { NavLink } from "react-router"

const Home = () => {
  const user = useAtomValue(USER_ATOM)
  const error = useAtomValue(USER_ERROR_ATOM)
  const loading = useAtomValue(USER_LOADING_ATOM)

  return (
    <div>
      <h1>GitStars</h1>
      <h3>Busque aqui o perfil do usuário</h3>
      <SearchField />
      {error && <p>{error}</p> }
      {(user && !loading) && (
        <>
          <p>{user.name}</p>
          <p>{user.login}</p>
          <p>{user.avatarURL}</p>
          <p>{user.bio}</p>
          <p>{user.email}</p>
          <p>{user.followers}</p>
          <p>{user.following}</p>
          <p>{user.publicRepos}</p>
          <NavLink to={`/profile/${user.login}`}>Abrir Perfil</NavLink>
        </>
      )}
    </div>
  )
}

export default Home