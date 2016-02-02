/**
 * Created by dobyeongsu on 2016. 2. 2..
 */
import httpProxy from 'http-proxy';

const proxy = httpProxy.createProxyServer();

export function AjaxProxy(req, res) {
  proxy.web(req, res, {target: 'http://localhost:3001/ajax'}, error => {
    res.send('Ajax Error : ', error);
  });
}

export function ImageProxy(req, res) {
  proxy.web(req, res, {target: 'http://localhost:3002'}, error => {
    res.send('Image-Server Error : ', error);
  });
}
