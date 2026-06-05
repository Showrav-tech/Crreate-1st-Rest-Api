import express from 'express';

const router=express.Router();

router.get('/user',(res,req)=>{
res.send('Hello');
});

export default router;