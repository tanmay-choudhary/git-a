import express from "express";
// const express = require('express');
import bodyParser from 'body-parser';
import userRoutes from './routes/Users.js';
import { createRequire } from "module";

const require = createRequire(import.meta.url);
const router = express.Router();
const app = express();
const PORT = 5000;

var cors = require("cors");
app.use(cors());

app.use(bodyParser.json());
app.use('/users',userRoutes);

app.listen(PORT, ()=> console.log(`server running on port: http://localhost:${PORT}`));
