const express = require('express');
const dotenv = require('dotenv');
const PORT = process.env.PORT || 9000
dotenv.config();

const app = express();

app.get('/', (req: any, res: { send: (arg0: string) => void }) => {
  res.send('Hello');
});

app.listen(PORT, () => console.log('server is running on', PORT));
