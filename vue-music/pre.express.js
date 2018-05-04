const express = require('express');
const axios = require('axios');
const app = express();

const apiRouter = express.Router();

apiRouter.get('/',function(req,res){
	res.send("<h1>music api</h1>")
	
})

apiRouter.get('/getSliders',function(req,res){
	var url = 'https://c.y.qq.com/musichall/fcgi-bin/fcg_yqqhomepagerecommend.fcg';
    axios.get(url,{
        headers: {
          referer: 'https://c.y.qq.com/',
          authority: 'c.y.qq.com'
        },
        params: req.query
    })
	.then(resp=>{
		res.json(resp.data)
	})
	.catch(resp=>{
		res.json(resp)
	})
	
});

app.use('/api',apiRouter);

var port = '3001';
app.listen(port,function(err){
	if(err){
		console.log(err);return;
	}
	console.log("server start at ��http://localhost:"+port);
})