import http from 'http'

const server = http.createServer((req, res) => {//req é a request oque esta vindo e o res e oque vai responder toda request havera uma resposta
    res.writeHead(200, {
        "Content-type" : "text/plain"
    })
    res.end('servidor rodando')
})

server.listen(3000, () => {
    console.log('servidor rodandoo');
})