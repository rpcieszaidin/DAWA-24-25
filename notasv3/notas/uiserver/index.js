import express from 'express';
import cors from 'cors';
import { model1 } from './interfaces/model_1.js';
import { notes } from './interfaces/notes.js';

const appUI = new express();
appUI.use(cors());

appUI.get('/ui', (req, res) => {
    res.send(model1);
})

appUI.get('/notes', (req, res) => {
    res.send(notes);
})

appUI.listen(3000, ()=>{
    console.log("UI Server running.")
});