import axios from 'axios'
import 'dotenv/config'

const apiToken = process.env.EXIST_API_TOKEN

const url = 'https://exist.io/api/2/attributes/templates/'

const config = {
  headers: { 'Authorization': `Bearer ${apiToken}` }
}



const addToGroups = async (next, results, groups) => {
  console.log('addToGroups next ', next)
  console.log('addToGroups results.length ', results.length)
  results.forEach(element => {
    if (groups[element.group.name]) {
      groups[element.group.name].push(element.name)
    }
    else { groups[element.group.name] = [element.name] }
  })
  if (next) {
    await axios.get(next, config)
    .then((res) => {
      const data = res.data
      addToGroups(data.next, data.results, groups)
    })
  } else {
    console.log('groups ', groups)
  }
}

axios.get(url, config)
.then((res) => {

  const groups = {}
  const data = res.data
  addToGroups(data.next, data.results, groups)

  })
  .catch((e) => {
    console.log('e ', e)
  })
