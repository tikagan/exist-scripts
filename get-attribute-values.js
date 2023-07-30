import axios from 'axios'
import 'dotenv/config'

const apiToken = process.env.EXIST_API_TOKEN

const url = 'https://exist.io/api/2/attributes/with-values/'

const config = {
  headers: { 'Authorization': `Bearer ${apiToken}` }
}

axios.get(url, config)
  .then((res) => {
    console.log('Results: ', res.data)
  })
  .catch((e) => {
    console.log('e ', e)
  })
