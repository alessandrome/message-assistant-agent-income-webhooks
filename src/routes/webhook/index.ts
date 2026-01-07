import { FastifyPluginAsync } from 'fastify'

const webhook: FastifyPluginAsync = async (fastify, opts): Promise<void> => {
  fastify.get('/whatsapp', async function (request, reply) {
    return 'this is an example'
  })

  fastify.get('/telegram', async function (request, reply) {
    return 'this is an example'
  })
}

export default webhook
