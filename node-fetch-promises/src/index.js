const fetch = require('node-fetch')
const app = express()
const PORT = 3000
app.use(express.json())

app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
})

