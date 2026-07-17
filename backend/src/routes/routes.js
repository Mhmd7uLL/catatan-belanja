import express from 'express';
import {
    addList,
    getList,
    deleteList,
    toggleList,
    clearList,
} from '../controllers/notesController.js'

const router = express.Router();

router.post('/', addList);
router.get('/', getList);
router.delete('/', clearList);     //Clear list semua
router.delete('/:id', deleteList); //Clear list yang dipilih
router.put('/:id', toggleList);    

export default router;