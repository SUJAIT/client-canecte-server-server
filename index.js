const express = require('express');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 5000;

// middleware strt
app.use(cors());
app.use(express.json());
// middleware End
 

const users = [
    {id: 1, name:'losi',email:'losi@gmail.com'},
    {id: 2, name:'rahat',email:'rahat@gmail.com'},
    {id: 3, name:'abid',email:'abid@gmail.com'},
    {id: 4, name:'suvo',email:'suvo@gmail.com'},
    {id: 5, name:'rohim',email:'rohim@gmail.com'},
    {id: 6, name:'saimon',email:'saimon@gmail.com'}
]


app.get('/users',(req,res)=>{
 res.send(users);
});

app.post('/users',(req,res) =>{
    console.log('post api Hitting')
    console.log(req.body);
    const newUser = req.body;
    newUser.id = users.length + 1;
    users.push(newUser);
    res.send(newUser);
})

app.get('/',(req,res)=>{
 res.send('server is running')
});


app.listen(port,()=>{
    console.log(`Ami kisu pari na ${port}`)
})
