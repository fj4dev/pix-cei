import noderfc, { Pool, Client, RfcObject, RfcVariable } from 'node-rfc'
import { targetDestination } from './destination'
import cors from 'cors'
import express from 'express'

const app = express()

app.use(express.urlencoded({ extended: true }))
app.use(express.json())

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*')
  res.header('Access-Control-Allow-Methods', 'GET')
  res.header('Access-Control-Allow-Headers', 'X-PINGOTHER, Content-Type, Authorization')
  app.use(cors())
  next()
})

/* Destination cadastrada no arquivo de destinations */
const rfcPoolConfiguration : noderfc.RfcPoolConfiguration = {
  connectionParameters: targetDestination
}

app.get('/webhook(/pix)?', async (req, res) => {
  try {
    /* Determina a conexão */
    const pool = new Pool(rfcPoolConfiguration)

    /* Inicia a conexão */
    const client: void | Client = await pool.acquire()

    if (typeof client === 'undefined') return

    /* Nome da função */
    const rfcName: string = 'ZFM_API_PIX_WEBHOOK'

    /* Parameter IMPORT */
    const importValue: RfcVariable = 'Teste 123'

    /* Parametros da RFC */
    const parameters : RfcObject = {

      IV_STRING: importValue

    }

    /* Chama a RFC */
    const result: RfcObject = await client.call(rfcName, parameters)

    console.log(req.body);
    res.send('200');

  } catch (err) {
    console.log(err)
  }
})

const PORT = process.env.PORT || 3030
app.listen(PORT, () => {
  console.log(`Our app is running on port ${PORT}`)
})
