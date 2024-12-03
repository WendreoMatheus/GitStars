import { IRepo } from '@/models'

export const RepoCard: React.FC<{ repo: IRepo }> = ({ repo }) => {
  return (
    <div className="card repo-item" style={{ margin: '10px' }}>
      <div className="card-content">
        <p className="title is-5">{repo.name}</p>
        <p className="subtitle is-6">{repo.language || 'Desconhecida'}</p>
        <div className="content">⭐ {repo.stargazers_count}</div>
      </div>
    </div>
  )
}
