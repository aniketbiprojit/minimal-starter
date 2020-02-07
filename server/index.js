const express = require('express')
const fs = require('fs')
const promisify = require('util').promisify

const readFileAsync = promisify(fs.readFile)
const writeFileAsync = promisify(fs.writeFile)
const appendFileAsync = promisify(fs.appendFile)

const app = express()
const port = 8080

const logger = async (req, _, next) => {
	try {
		await fs.writeFileAsync('new.txt', 'Hello!')
		next()
	} catch (err) {
		console.log(err)
	}
}

app.use(logger)

app.get('/', (req, res) => {
	console.log('check')
})

app.listen(port, () => console.log(`Listening on port ${port}`))
