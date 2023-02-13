import '@controllers/DummyController';
import express from 'express';

const app = express();

console.log('⚡ Server running ⚡');

app.get('/', (request, response) => {
  return response.json({ message: 'Hello World' });
});

app.listen(3333);
