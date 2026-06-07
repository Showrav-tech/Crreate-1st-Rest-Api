import express from 'express';
import { v4 as uuidv4 } from "uuid";
uuidv4(); 
const router=express.Router();

const users =[];


router.get('/',(req,res)=>{

res.send(users);
});

router.post('/',(req,res)=>{

 const user = req.body;


   const userId= uuidv4(); 


    users.push({...user, id : uuidv4()});

  res.send(`user with the same ${user.firstname} added to the database!`);


});

export default router;