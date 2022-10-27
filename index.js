const express = require('express');
const app = express();
const cors = require('cors');
const port = process.env.PORT || 5000;

app.use(cors());


const categories = require('./data/categories.json');
const data = require('./data/data.json');


app.get('/', (req, res) => {
    res.send('server side is Running')
});

app.get('/categories', (req, res) => {
    res.send(categories)
})

// app.get('/category:/id', (req, res) => {
//     const id = req.params.id;
//     const categoryId = data.filter(c => c.category_id == id);
//     res.send(categoryId)
// })


app.get('/category/:id', (req, res)=>{
    const id = req.params.id;
    const category = data.filter(c => c.category_id == id)
    res.send(category)
})


app.get('/courseDetails/:id',(req, res)=>{
    const id = req.params.id;
    const item = data.find(itm => itm.id == id)
    res.send(item)
})

// all courses data 
app.get('/courses', (req, res)=>{
    res.send(data)
})

app.listen(port, () => {
    console.log('server is running on port', port)
})