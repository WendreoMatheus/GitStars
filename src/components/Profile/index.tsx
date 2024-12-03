import { GET_REPOS_LIST_ATOM, REPOS_ERROR_ATOM, REPOS_LIST_ATOM, REPOS_LOADING_ATOM } from "@/atoms/profile.atom"
import { useSetAtom } from "jotai"
import { useAtomValue } from "jotai"
import { useEffect } from "react"
import { useParams } from "react-router"

const Profile = () => {
  const {username} = useParams();
  const repos = useAtomValue(REPOS_LIST_ATOM)
  const error = useAtomValue(REPOS_ERROR_ATOM)
  const getRepos = useSetAtom(GET_REPOS_LIST_ATOM)

  useEffect(() => {
    getRepos(username?.trim())  
  }, [])

  const loading = useAtomValue(REPOS_LOADING_ATOM)
  return (
    <div>
      {loading && <p>Loading...</p>}
      {error && <p>Error: {error}</p>}
      <div className="repo-list">
        {repos?.map(repo => (
          <p className="repo-item" key={repo.id}>{repo.name}</p>
        ))}
      </div>
    </div>
  )
}

export default Profile