const express = require('express');
const dotenv = require('dotenv');
dotenv.config();

const app = express();

app.get('/', (req: any, res: { send: (arg0: string) => void }) => {
  res.send('Hello');
});

app.listen(process.env.PORT, () => console.log('server is running'));
