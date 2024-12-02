import {createServer, Response} from 'miragejs'
import {User} from './fixtures'
import { UserSerializer } from './serializers/UserSerializer'
import { AppSchema } from './types'
import { models } from './models'

export function makeServer({environment = "development"} = {}) {
    const server = createServer({
        environment,
        models,
        serializers: {
            user: UserSerializer
        },

        seeds(server) {
            server.create("user", {...User} as object)
            // Repos.forEach(repo => {
                // server.create("repo", repo)
            // })
        },

        routes() {
            this.namespace = "api.github.com"

            this.get("/users/:username", (schema: AppSchema, request) => {
                const username = request.params.username
                console.log(schema.users.findBy({login: username}))
                const data = schema.users.findBy({login: username})
                console.log('username anda data', username, data)
                if(data) {
                    return new Response(200, {}, data)
                }

                return new Response(404, {}, {msg: 'Usuário não encontrado'})
            })
            this.get("/users/:username/repos", (schema) => schema.all('repo'))
            this.get("/repo/:fullname", (schema, request) => {
                const fullName = request.params.fullname
                return schema.findBy("repo", {attrs: {fullName}})
            })
        }
    })

    server.logging = true

    return server
}