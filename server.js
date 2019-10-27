const express = require('express');
const camelcase = require('camelcase');
const path = require('path');
const app = express();
const fs = require('fs')

// Port
const port = 5000

app.use(express.static(path.join(__dirname, 'client', 'build')));

app.get('/api/posts', (req, res) => {
    const posts = [{
        id: 1, name: 'John', lastname: 'Doe'
    }]
    res.json(posts)
});

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'client', 'build', 'index.html'));
});

app.get('/blog/posts.json', (req, res) => {
    const POST_PATH = path.resolve(__dirname, 'client/static/posts')
    const posts = fs.readdirSync(POST_PATH)
    const result = []
    
    for (const post of posts) {
        const md = fs.readFileSync(path.resolve(POST_PATH, post)).toString('utf-8')
        const [_, postMeta] = md.split('---')
        const metaItems = postMeta.split('\n')
        const meta = {}
        
        for (const item of metaItems) {
            if(!item.includes(':')){
                continue
            }

            const [key, ...value] = item.split(':')
            meta[camelcase(key).trim()] = value.join(':').trim()
        }

        if(meta.published !== 'true'){
            continue
        }

        const [year, month, day, ...url] = post.replace('.md', '').split('-')
        meta.url = `${year}/${month}/${day}/${url.join('-')}`
        result.push(meta)
    }
    
    res.send(result.reverse)
})

app.listen(port, () => console.log(`Server is running on port ${port}`));