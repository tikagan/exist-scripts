import axios from 'axios'
import 'dotenv/config'

const apiToken = process.env.EXIST_API_TOKEN

const url = 'https://exist.io/api/2/attributes/increment/'

const config = {
  headers: {
    'Authorization': `Bearer ${apiToken}`,
    'Content-Type': 'application/json'
  }
}

const data = JSON.stringify([
  {
    name: 'coffees',
    date: new Date(Date.now()).toLocaleDateString(),
    value: 1
  }
])

axios.post(url, data, config)
.then((res) => {
  console.log(res.data)

  })
  .catch((e) => {
    console.log('e ', e)
  })
