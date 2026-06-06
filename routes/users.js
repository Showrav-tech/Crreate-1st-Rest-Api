import express from 'express';
import { v4 as uuidv4 } from "uuid";
uuidv4(); 
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

   const userId= uuidv4(); 

   const userWithId={...user,id:userId};

  res.send(`user with the same ${user.firstname} added to the database!`);


});

export default router;