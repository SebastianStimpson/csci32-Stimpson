import Fastify from 'fastify'
import { TypeBoxTypeProvider } from '@fastify/type-provider-typebox'
import dotenv from 'dotenv'
import app from './app'

dotenv.config()

const server = Fastify({ logger: true }).withTypeProvider<TypeBoxTypeProvider>()

server.register(app)

server.listen({ port: 7000 }, (err, address) => {
  if (err) {
    server.log.error(err)
    process.exit(1)
  }
  server.log.info(`Server listening at ${address}`)
})
