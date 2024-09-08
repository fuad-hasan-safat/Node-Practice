// const http = require('http');
const {request, get} = require('https');


const req =  request('https://www.google.com', (res) => {
    res.on('data', (chunk)=>{
        console.log(`Data Chank: ${chunk}`)
    });

    res.on('end', () => {
        console.log('No more data')
    })
});

req.end();



// ---- get 
const req1 =  get('https://www.google.com', (res) => {
    res.on('data', (chunk)=>{
        console.log(`Data Chank 11111: ${chunk}`)
    });

    res.on('end', () => {
        console.log('No more data 3333333')
    })
});
