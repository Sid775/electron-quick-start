

request.on('response', (response) => {
    console.log(`STATUS: ${response.statusCode}`);
response.on('error', (error) => {
    console.log(`ERROR: ${JSON.stringify(error)}`)
})
})