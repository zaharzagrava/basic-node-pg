const express = require('express');
const path = require('path');

const app = express();

app.listen(4001, () => {
  // eslint-disable-next-line no-console
  console.log(`API is running on http://localhost:${ 4001 }`);
});