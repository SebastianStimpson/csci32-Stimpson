import fp from 'fastify-plugin'
import swagger from '@fastify/swagger'
import swaggerUI from '@fastify/swagger-ui'

/**
 * This plugin adds Swagger documentation to your Fastify API
 *
 * @see https://github.com/fastify/fastify-swagger
 * @see https://github.com/fastify/fastify-swagger-ui
 */
export default fp(async (fastify) => {
  // Register the Swagger plugin
  await fastify.register(swagger, {
    mode: 'dynamic',
    swagger: {
      info: {
        title: 'RecipeStacker API',
        description: 'API documentation for RecipeStacker',
        version: '1.0.0',
      },
      host: 'localhost:7000', // Update with your host and port
      schemes: ['http'],
      consumes: ['application/json'],
      produces: ['application/json'],
    },
  })

  // Register the Swagger UI plugin
  await fastify.register(swaggerUI, {
    routePrefix: '/docs', // The URL path to access the Swagger UI
    uiConfig: {
      docExpansion: 'list', // Controls how the API list is displayed
      deepLinking: false,
    },
    uiHooks: {
      onRequest: function (request, reply, next) {
        next()
      },
      preHandler: function (request, reply, next) {
        next()
      },
    },
    staticCSP: true,
    transformStaticCSP: (header) => header,
  })
})
