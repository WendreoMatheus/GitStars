import { USER_ATOM, USER_ERROR_ATOM, USER_LOADING_ATOM } from '@/atoms/user.atom'
import { useAtomValue } from 'jotai'
import SearchField from './SearchField'
import { GitHubCard } from '@/components'

const Home = () => {
  const user = useAtomValue(USER_ATOM)
  const error = useAtomValue(USER_ERROR_ATOM)
  const loading = useAtomValue(USER_LOADING_ATOM)

  return (
    <div className="container is-fluid px-3 py-5">
      <div className="columns is-centered">
        <div className="column is-8">
          <div className="box has-text-centered">
            <h1 className="title is-3 mb-4">GitStars</h1>
            <SearchField />

            {error && <div className="notification is-danger is-light mt-3">{error}</div>}

            {user && !loading && (
              <div className="mt-5">
                <GitHubCard userData={user} />
              </div>
            )}

            {loading && <p className="has-text-grey-light mt-4">Carregando...</p>}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home
