import {createServer, Response} from 'miragejs'
import {Repos, User} from './fixtures'
import { AppSchema } from './types'
import { models } from './models'
import { serializers } from './serializers'
import { IRepo } from '@/models'

export function makeServer({environment = "development"} = {}) {
    const server = createServer({
        environment,
        models,
        serializers,

        seeds(server) {
            server.create("user", {...User} as object)
            Repos.list.forEach(repo => server.create("repo", {...repo} as object))
        },

        routes() {
            this.namespace = "api.github.com"

            this.get("/users/:username", (schema: AppSchema, request) => {
                const { username } = request.params
                const data = schema.users.findBy({login: username})
                if(data) {
                    return new Response(200, {}, data)
                }

                return new Response(404, {}, {msg: 'Usuário não encontrado'})
            })
            this.get("/users/:username/repos", (schema: AppSchema, request) => {
                const { username } = request.params
                const data = schema.repos.where((repo: IRepo) => repo.owner.login === username).models
                if(data.length > 0) {
                    return new Response(200, {}, data)
                }

                return new Response(404, {}, {msg: 'Repositórios não encontrados'})
            })
            this.get("/repo/:fullname", (schema, request) => {
                const fullName = request.params.fullname
                return schema.findBy("repo", {attrs: {fullName}})
            })
        }
    })

    server.logging = false
    return server
}