const express = require('express')
const app = express();
const Datastore = require('nedb');
app.listen(3000, () => (console.log('listening at 3000')));
app.use(express.static('public'));
app.use(express.json({ limit: '1mb'}));

const database = new Datastore('database.db');
database.loadDatabase();

app.post('/api', (request, response) => {

    console.log("recieved request")
    const data = request.body;
    database.insert(data);
   
    response.json({
        status:'success'
    });
});

app.get('/api', (request, response) => {

    database.find({}, (err, data) => {
    
    if(err) {
        response.end();
        return;
    }

    response.json(data);
    
    });
});