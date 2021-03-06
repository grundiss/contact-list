import express from 'express';
import path from 'path';

export function main(root) {
  const app = express();

  app.use("/static", express.static(path.join(root, "dist/static"), {extensions: ['js']}));

  app.get('/', function(req, res) {
    res.send(`<!doctype html>
      <html>
        <head>
          <title>contacts-list</title>
          <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500">
          <style>
            body {font-family: 'Roboto', sans-serif;}
          </style>
        </head>
        <body>
          <div id="app"></div>
          <script type="text/javascript" src="/static/bundle.js"></script>
        </body>
      </html>
    `);
  });

  app.listen(3000, function() {
    console.log('App is running and listening port 3000');
  })
}