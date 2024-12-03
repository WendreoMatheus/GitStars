import 'bulma/css/bulma.min.css'
import { IUser } from '@/models'
import { NavLink } from 'react-router'

interface GitHubCardProps {
  userData: IUser
}

export const GitHubCard: React.FC<GitHubCardProps> = ({ userData }) => {
  return (
    <NavLink to={`/profile/${userData.login}`}>
      <div className="card" style={{ margin: '10px' }}>
        <div className="card-content">
          <div className="media">
            <div className="media-left">
              <figure className="image is-128x128">
                <img
                  src={userData.avatar_url}
                  alt={`${userData.login}'s avatar`}
                  style={{ borderRadius: '50%', objectFit: 'cover' }}
                />
              </figure>
            </div>
            <div className="media-content">
              <p className="title is-4">{userData.name || userData.login}</p>
              <p className="subtitle is-6">@{userData.login}</p>
              <p className="content" style={{ fontSize: '0.9em' }}>
                {userData.bio || 'Bio não disponível'}
              </p>
              <div className="columns is-mobile">
                <div className="column is-half">
                  <p>
                    <strong>Seguidores:</strong> {userData.followers}
                  </p>
                </div>
                <div className="column is-half">
                  <p>
                    <strong>Seguindo:</strong> {userData.following}
                  </p>
                </div>
              </div>
              {userData.email && (
                <p>
                  <strong>Email:</strong> {userData.email}
                </p>
              )}
            </div>
          </div>
        </div>
      </div>
    </NavLink>
  )
}
