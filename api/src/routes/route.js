const express = require('express')
const app = express()
const axios = require('axios')
const bodyParser = require('body-parser');
const morgan = require('morgan');
const cors = require('cors');
const redis = require('redis')
const ExpressRedisCache = require('express-redis-cache')
const cache = ExpressRedisCache({
    expire:60
})

app.use(bodyParser.urlencoded({ extended: true, limit: '50mb' }));
app.use(bodyParser.json({ limit: '50mb' }));
app.use(cors());
app.use(morgan('dev'));

/* app.get('/api/search',cache.route(), async(req,res) => {
    let {query} = req.query
    const {data} = await axios.get(`https://api.mercadolibre.com/sites/MLA/search?q=${query}&limit=3&offset=${3}`)
    res.status(200).json(data.results)
}) */

app.get('/api/search',cache.route(), async(req,res) => {
    let {query} = req.query
    const {data} = await axios.get(`https://api.mercadolibre.com/sites/MLA/search?q=${query}`)
    res.status(200).json(data.results)
})

/* app.get('/api/search',cache.route(), (req,res) => {
    let {query} = req.query
    axios.get(`https://api.mercadolibre.com/sites/MLA/search?q=${query}`)
    .then(products => {
        products.findAll({limit:5})
        res.status(200).json(data.results)
    })
}) */

module.exports = app;