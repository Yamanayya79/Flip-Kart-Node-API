const express = require('express')
const cors =require('cors')
const app = express()
let mongo = require('mongodb')
let MongoClient = mongo.MongoClient;
let mongourl =process.env.MONGODB_URI || 'mongodb+srv://YamanayyaBG:Yama1234@flip-kart.gvmpppq.mongodb.net/Flip-kart?retryWrites=true&w=majority'
const port = 5000
let db

/////
app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
    res.send("FLIP-KART NODE API ")

})
app.get('/Dress', (req, res) => {
    db.collection('Dress').find().toArray((err, data) => {
        if (err) throw err;
        res.send(data)
    })
})
app.get('/Electronics', (req, res) => {
    db.collection('Dress').find().toArray((err, data) => {
        if (err) throw err;
        res.send(data)
    })

})
app.get('/EssentaialsWinnter', (req, res) => {
    db.collection('Dress').find().toArray((err, data) => {
        if (err) throw err;
        res.send(data)
    })

})
app.get('/Furniture', (req, res) => {
    db.collection('Dress').find().toArray((err, data) => {
        if (err) throw err;
        res.send(data)
    })

})
app.get('/Kitchen', (req, res) => {
    db.collection('Dress').find().toArray((err, data) => {
        if (err) throw err;
        res.send(data)
    })
})
app.get('/Products', (req, res) => {
    db.collection('Dress').find().toArray((err, data) => {
        if (err) throw err;
        res.send(data)
    })

})
app.get('/Sports', (req, res) => {
    db.collection('Dress').find().toArray((err, data) => {
        if (err) throw err;
        res.send(data)
    })

})
app.get('/WeddingGifts', (req, res) => {
    db.collection('Dress').find().toArray((err, data) => {
        if (err) throw err;
        res.send(data)
    })

})
app.get('/grocery', (req, res) => {
    db.collection('Dress').find().toArray((err, data) => {
        if (err) throw err;
        res.send(data)
    })

})

MongoClient.connect(mongourl, { useNewUrlParser: true }, (err, data) => {
    if (err) console.log('error whilw connting');
    db = data.db('Flip-kart')
    app.listen(port, () => {
       console.log(`server started on ${port}`)
    })
})
