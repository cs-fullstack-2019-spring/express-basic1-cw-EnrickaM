const express = require('express');
const app = express();

app.use(express.static('public'));

app.get ('/enricka',(request,response)=>{
    response.send('i am so excited that i am continuing in my bootcamp!!!!!!!')
});

app.post('/enrickam',(request,response)=>{
    response.send('Post hello')
});
app.listen(8001, () => {
    console.log('Example app listening on port 8001!')
});

