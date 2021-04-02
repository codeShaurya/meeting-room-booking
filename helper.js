function log(res) {
    if(res['success']) {
        console.log(res['data']);
    } else {
        console.error(res['error']);
    }
}

module.exports.log = log;