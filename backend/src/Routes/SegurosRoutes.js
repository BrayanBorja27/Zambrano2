import express from 'express'
import { getAllS } from '../Controller/SegurosController.js';

const router = express.Router()

router.get('/listars' , getAllS);

export default router;