import axios from 'axios'
import 'dotenv/config'

const apiToken = process.env.EXIST_API_TOKEN

const attribute = ['coffees']

const url = `https://exist.io/api/2/attributes/values/?attribute=${attribute}`

const config = {
  headers: { 'Authorization': `Bearer ${apiToken}` },
}

axios.get(url, config)
  .then((res) => {
    console.log('Results: ', res.data.results)
  })
  .catch((e) => {
    console.log('e ', e)
  })
