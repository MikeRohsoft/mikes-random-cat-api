const http = require('http-wrapper');

const url = 'http://aws.random.cat/meow';
module.exports = () => new Promise(resolver => {
    http.get(url).then(res => {
        if (res.code !== 200) {
            return console.error(`can't get a random cat from the api`);
        }
        const content = res.content.toString();
        let obj;
        try {
            obj = JSON.parse(content);
        } catch(e) {
            console.error(e)
        };
        resolver(obj);
    });
});
