const express = require('express');
const mongoose = require('mongoose');
const postRouter = require('./routes/post.route.js');
const getRoute = require('./routes/get.route.js');
const updateRoute = require('./routes/update.route.js');
const deleteRoute = require('./routes/delete.route.js');

const app = express();

// MiddleWare
app.use(express.json());

mongoose
  .connect('mongodb://localhost:27017/nodeAPI')
  .then(() => {
    console.log('connected');
  })
  .catch((error) => {
    console.log('Connection failed: ', error);
  });

app.use('/v1', postRouter);
app.use('/v1', getRoute);
app.use('/v1', updateRoute);
app.use('/v1', deleteRoute);
// app.use('/v1', (postRouter, getRoute));
// app.use('/v1', (postRoute, getRoute, deleteRoute, updateRoute));

app.listen(5000, () => {
  console.log('running on port 5000');
});
