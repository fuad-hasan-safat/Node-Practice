function encrypt(data){
    return 'encrypted';
}

function send(url, data){
    const encryptedData = encrypt(data);

    console.log(`Sending ${encryptedData} to ${url}`);
}

module.exports = {
    send: send,
}