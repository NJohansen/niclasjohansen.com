const express = require('express');
const camelcase = require('camelcase');
const path = require('path');
const app = express();
const fs = require('fs')
const CACHE = path.resolve(__dirname, 'cache')
const cors = require('cors')

app.use(cors())
app.use(express.static(path.join(__dirname, 'build')));

app.get('/ping', function (req, res) {
 return res.send('pong');
});

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

app.get('/blog/posts.json', (req, res) => {
    const POST_PATH = path.resolve(__dirname, 'static/posts')
    const posts = fs.readdirSync(POST_PATH)
    const result = []

    for (const post of posts) {
        const md = fs.readFileSync(path.resolve(POST_PATH, post)).toString('utf-8')
        const [_, rawMeta] = md.split('---')
        const metaItems = rawMeta.split('\n')
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

const getFileName = p => {
    const date = new Date()

    return [
        date.getFullYear(),
        date.getMonth() + 1,
        date.getDate(),
        p.split('/').join('-')        
    ].join('-') + '.html'
}

app.get('*', (req, res) => {
    res.set('Content-Type', 'text/html')

    if(fs.existsSync(path.resolve(CACHE), getFileName(req.path))) {
        res.send(
            fs.readFileSync(
                path.resolve(CACHE, getFileName(req.path))
            )
        )
        return
    }

    res.send(
        fs.readFileSync(path.resolve(__dirname, 'build', 'index.html'))
    )
})

app.listen(process.env.PORT || 8080);