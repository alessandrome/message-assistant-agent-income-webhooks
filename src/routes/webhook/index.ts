import { FastifyPluginAsync } from 'fastify'

const webhook: FastifyPluginAsync = async (fastify, opts): Promise<void> => {
    fastify.post('/whatsapp', async function (request, reply) {
        console.log("Body");
        console.log(request.body);
        // console.log(JSON.stringify(request.body));
        console.log("Query");
        console.log(request.query);
        return `Example of response. This is the body of your request ${JSON.stringify(request.query, null, 2)}`
    })

    fastify.post('/telegram', async function (request, reply) {
        return 'this is an example'
    })
}

export default webhook
