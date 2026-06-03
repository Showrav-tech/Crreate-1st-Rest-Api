const express =require("express");
const users=require("./MOCK_DATA.json");
const app=express();
const PORT=8000;
app.listen(PORT,()=> console.log(`Server Started at port :${PORT}`))
app.get("/api/user",(req,res)=>{
    return res.json(users);
});
app.get('/users', (req, res) => {
    const html = `
    <ul>
        ${users.map((user)=>`<li>${user.first_name}</li>`).join("")}
    </ul>
    `;
    res.send(html);
});

//REST API
app.get("/api/user/",(req,res)=>{
    return res.json(users);
});
app.get("/api/users/:id",(req,res)=>{
const id=Number(req.params.id);
const user=users.find((user)=>user.id===id);
return res.json(user);
});
app.post('/api/users',(req,res)=>{
return res.json({status:"Pending"});
});

app.patch('/api/users:id',(req,res)=>{
return res.json({status:"Pending"});
});
app.delete('/api/users:id',(req,res)=>{
return res.json({status:"Pending"});
});

app.listen(PORT,()=>console.log(`Server Started at PORT 8000`));