import express from 'express';

const router=express.Router();

const users =[
    {

firstname:"John",
lastname:"Doe",
age:"25"

},
{
   firstname:"John",
lastname:"Doe",
age:"24" 
}
]

router.get('/',(req,res)=>{

res.send(users);
});

router.post('/',(req,res)=>{

 const user = req.body;
 users.push(user);

  res.send(`user with the same ${user.firstname} added to the database!`);


});

export default router;