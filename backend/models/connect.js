const mongoose = require('mongoose');

const dbURI = 'mongodb://127.0.0.1:27017'
mongoose.connect(dbURI, {
    useNewUrlParser: true
})
.then(()=>console.log('connection successful'))
.catch(console.error)