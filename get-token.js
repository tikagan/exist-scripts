import axios from 'axios'
import 'dotenv/config'

const username = process.env.EXIST_USERNAME
const password = process.env.EXIST_PASSWORD

const url = 'https://exist.io/api/2/auth/simple-token/'

axios.post(url, { username, password})
  .then((res) => {
    console.log('Token: ', res.data.token)
  })
