const request = require('request')
const fs = require('fs')
const savePath = '/home/labber/page-fetcher/index.html'
const args = process.argv.slice(2)

const url = args[0]
const filePath = args[1]


function fetcher(url, filePath) {
  
  request((url), (error, response, body) => {
    const fileSize = response.headers['content-length']
    if (error) {
      console.error('Error:', error);
      return;
    }
    fs.writeFile(filePath, body,  err => {
      if (err) {
        console.log(err)
      }
    })

    console.log(response)
    console.log(`downloaded and saved  ${fileSize} bytes to ${filePath}`)
  })
}

fetcher(url, filePath)