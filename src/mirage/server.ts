import {createServer, Model} from 'miragejs'
import {User, Repos} from './fixtures'
import { IUser, IRepo } from '@/types'

export function makeServer({environment = "test"} = {}) {
    const server = createServer({
        environment,
        models: {
            user: Model.extend<Partial<IUser>>({}),
            repo: Model.extend<Partial<IRepo>>({})
        },

        seeds(server) {
            server.create("user", {...User} as object)
            Repos.forEach(repo => {
                server.create("repo", repo as object)
            })
        },

        routes() {
            this.namespace = "api"

            this.get("/users/:username", (schema, request) => {
                const username = request.params.username
                return schema.findBy("user", { attrs: {username} })
            })
            this.get("/users/:username/repos", (schema) => schema.all('repo'))
            this.get("/repo/:fullname", (schema, request) => {
                const fullName = request.params.fullname
                return schema.findBy("repo", {attrs: {fullName}})
            })
        }
    })

    return server
}