import {router} from "./routes";
import {errorMiddleware} from "./middlewares/error";
require('express-async-errors');
const express = require('express');

const app = express();

app.use(express.json());

app.use(router);
app.use(errorMiddleware)


app.listen(3000, () => {
  console.log("Server is running on port 3000");
});