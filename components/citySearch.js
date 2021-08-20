const { Router } = require("express")
const router = Router()

const mysql = require('mysql2')

router.post('/', async(req, res)=>{
   const connection = await  mysql.createConnection({
      host: 'remotemysql.com',
      port: '3306',
      user: 'GFmikMM7Uo',
      database: 'GFmikMM7Uo',
      password: 'IL4388twNR'
   })
   let result = () => {
      return new Promise((resolve, reject)=> {
         connection.query("SELECT name_country FROM country", (error, result)=> {
            if(error) {
               reject(error)
            }
            else {
               resolve(result)
            }
         })
   })}

   result()
   .then(async result => {

      await res.json({message: result})
   })
   .catch(async error => {

      await res.json({message: 'ошибка сервера'})
   })
   .finally(()=>{
      
      connection.end()
   })
})
module.exports = router