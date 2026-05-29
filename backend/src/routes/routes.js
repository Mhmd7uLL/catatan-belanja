import express from 'express';
import {
    addList,
    getList,
    deleteList,
    toggleList,
    clearList,
} from '../controllers/controller.js'

const router = express.Router();

router.post('/', addList);
router.get('/', getList);
router.delete('/', clearList);     # Clear list semua
router.delete('/:id', deleteList);
router.put('/:id', toggleList);    # Clear list yang dipilih


export default router;