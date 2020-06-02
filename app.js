const app = require('express')()

app.get('/', (req, res) => {
  res.send("Hello from yessss!");
});
 
module.exports.app = app;
