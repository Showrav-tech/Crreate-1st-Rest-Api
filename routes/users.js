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

router.get('/',(res,req)=>{

res.send('Hello');
});

export default router;