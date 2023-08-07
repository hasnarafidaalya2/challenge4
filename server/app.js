import express from 'express'
import fs from 'fs'

const app = express()
const port = 8080

app.get('/', (req, res)=>){

})

app.listen(port, ()=>{
  console.log(`Server is running on ${port}`)
})

const getData = ()=> {
  const data = fs.readFileSync('./data/cars.json', 'utf-8', (err, data => console.log(data))
}