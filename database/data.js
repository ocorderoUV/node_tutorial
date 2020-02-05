const fs = require('fs')

app.post('/users', function (req, res) {
    const user = req.body
    fs.appendFile('users.txt', JSON.stringify({ name: user.name, age: user.age }), (err) => {
        res.send('successfully registered')
    })
})