import server from './server'

server.listen({port: process.env.PORT || 4000}, () =>
    console.log('Server is ready at http://localhost:4000'),
)
