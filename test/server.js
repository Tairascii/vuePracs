const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')
const cities = require('./db/cities.json')

const app = express()

app.use(cors())
app.use(bodyParser.json())

app.get('/cities', (req, res) => {
    res.json({
        cities: cities
    })
    
})

app.listen(3000, () => {
  console.log('Server started on port 3000')
})

// app.post('/cities', (child, res) => {
//   res.json({
//     child: child
//   })
// })

// app.post('/register', (req, res) => {
//   if (req.body) {
//     const user = {
//       name: req.body.name,
//       email: req.body.email,
//       password: req.body.password
//       // In a production app, you'll want to encrypt the password
//     }

//     const data = JSON.stringify(user, null, 2)
//     var dbUserEmail = require('./db/user.json').email

//     if (dbUserEmail === req.body.email) {
//       res.sendStatus(400)
//     } else {
//       fs.writeFile('./db/user.json', data, err => {
//         if (err) {
//           console.log(err + data)
//         } else {
//           const token = jwt.sign({ user }, 'the_secret_key')
//           // In a production app, you'll want the secret key to be an environment variable
//           res.json({
//             token,
//             email: user.email,
//             name: user.name
//           })
//         }
//       })
//     }
//   } else {
//     res.sendStatus(400)
//   }
// })