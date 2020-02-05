const { Client } = require('pg');

const connectionData = {
  user: 'postgres',
  host: '',
  database: 'node',
  password: 'Pass1234',
  port: 5432,
}

const query = {
  text: 'INSERT INTO users(name, age) VALUES($1, $2)',
  values: ['brianc', 25 ],
}

const client = new Client(connectionData)

client.connect()

    
/*
    client.query('SELECT * FROM users')
    .then(response => {
        console.log(response.rows)
        client.end()
    })
    .catch(err => {
        client.end()
    })
*/

// callback
client.query(query, (err, res) => {
  if (err) {
    console.log(err.stack)
  } else {
    console.log(res.rows[0])
  }
})