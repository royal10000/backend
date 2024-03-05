const express = require('express')
require('dotenv').config()

const app = express()

const githubData = {
    "login": "royal10000",
    "id": 111305561,
    "node_id": "U_kgDOBqJjWQ",
    "avatar_url": "https://avatars.githubusercontent.com/u/111305561?v=4",
    "gravatar_id": "",
    "url": "https://api.github.com/users/royal10000",
    "html_url": "https://github.com/royal10000",
    "followers_url": "https://api.github.com/users/royal10000/followers",
    "following_url": "https://api.github.com/users/royal10000/following{/other_user}",
    "gists_url": "https://api.github.com/users/royal10000/gists{/gist_id}",
    "starred_url": "https://api.github.com/users/royal10000/starred{/owner}{/repo}",
    "subscriptions_url": "https://api.github.com/users/royal10000/subscriptions",
    "organizations_url": "https://api.github.com/users/royal10000/orgs",
    "repos_url": "https://api.github.com/users/royal10000/repos",
    "events_url": "https://api.github.com/users/royal10000/events{/privacy}",
    "received_events_url": "https://api.github.com/users/royal10000/received_events",
    "type": "User",
    "site_admin": false,
    "name": "lurey",
    "company": null,
    "blog": "",
    "location": null,
    "email": null,
    "hireable": null,
    "bio": null,
    "twitter_username": null,
    "public_repos": 4,
    "public_gists": 0,
    "followers": 0,
    "following": 1,
    "created_at": "2022-08-15T17:39:24Z",
    "updated_at": "2024-03-05T09:04:15Z"
}

app.get('/', (req, res) => {
    res.send('hello world   ')
})

app.get("/about", (req, res) => {
    res.send("this is about page")
})

app.get("/register", (req, res) => {
    res.send(githubData.login)
})

app.get('/gitData',(req,res)=>{
    res.json({githubData})
})

app.listen(process.env.PORT, () => {
    console.log(`localhost is running in ${process.env.PORT}`)
})