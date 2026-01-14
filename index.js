
import express from 'express';
import httpProxy from 'http-proxy';

const app = express();
const proxy = httpProxy.createProxyServer();

app.use('/api/traffic', (req,res)=>{
  proxy.web(req,res,{target:'http://traffic-service:3000'})
});

app.listen(3000);
