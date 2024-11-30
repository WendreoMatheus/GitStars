import {createServer, Model} from 'miragejs'

export function makeServer({environment = "test"} = {}) {
    const server = createServer({
        environment,
        models: {
            user: Model
        },

        seeds(server) {
            server.create("user", {name: "Bob"} as object)
        },

        routes() {
            this.namespace = "api"

            this.get("/users", (schema) => schema.all('users'))
        }
    })

    return server
}