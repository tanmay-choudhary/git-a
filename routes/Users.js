import express from 'express';
//import data from "../jsondata.json" assert {type : "json"};
import {createRequire} from "module";

const require = createRequire(import.meta.url);
const router = express.Router();
const data = require("../jsondata.json");

router.get('/', (req,res)=>{
    res.send(data);
});

export default router;