import Fastify, { FastifyInstance } from 'fastify'
import dotenv from 'dotenv'
import { TypeBoxTypeProvider } from '@fastify/type-provider-typebox'

export function createServer(): FastifyInstance {
  dotenv.config()
  const fastify = Fastify({
    logger: {
      transport:
        process.env.NODE_ENV === 'development'
          ? {
              target: 'pino-pretty',
              options: {
                translateTime: 'HH:MM:ss Z',
                ignore: 'pid,hostname',
              },
            }
          : undefined,
    },
    // ajv: getAjvConfig() // from KM
    // querystringParser: (str: any) => qs.parse(str),
    // ignoreTrailingSlash: true,
  }).withTypeProvider<TypeBoxTypeProvider>()

  // fastify.register(/* autoloads */)
  // fastify.register(/* autoloads */)
  // fastify.register(helmet, { global: true, hsts: { maxAge: 31536000 }})
  // fastify.register(disableCache)
  return fastify
}
