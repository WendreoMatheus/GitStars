export interface IUser {
  login: string
  avatarURL: string
  name: string
  email: null | string
  bio: string
  publicRepos: number
  followers: number
  following: number
}
