const { Router } = require("express")
const router = Router()

const mysql = require('mysql2')
 

// task - 2 , 3 , 4 , 5 , 6 , 7
router.post('/:id', async(req, res)=>{
   const connection = await  mysql.createConnection({
      host: 'remotemysql.com',
      port: '3306',
      user: 'Zb5kwnHNMV',
      database: 'Zb5kwnHNMV',
      password: 'sJKoSG5ReN'
   })
   let result = () => {
      return new Promise((resolve, reject)=> {
         connection.query(`SELECT name_city FROM city WHERE name_country_id  LIKE '%${req.params.id}%'`, (error, result)=> {
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