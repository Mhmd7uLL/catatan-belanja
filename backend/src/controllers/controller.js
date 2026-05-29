import { nanoid } from 'nanoid';
import groceryItems from '../db/groceryItems.js';

export const addList = (req, res) => {
    const {
        name,
        quantity,
        checked
    } = req.body

    const id = nanoid()
    const newItems = {
        id, 
        name,
        quantity,
        checked
    }

    groceryItems.push(newItems);

    return res.status(201).json({
        status: 'success',
        data: newItems
    });
};

export const getList = (req, res) => {
    return res.status(200).json({
        status: 'success',
        data: groceryItems
    });
};

export const deleteList = (req, res) => {
    const { id } = req.params;
    const itemsIndex = groceryItems.findIndex(item => item.id === id);
    
    if (itemsIndex === -1){
        return res.status(404).json({
            status: 'error',
            message: 'List tidak ditemukan'
        });
    };

    groceryItems.splice(itemsIndex, 1);
    return res.json({
        status: 'success',
        data: groceryItems
    });
};

export const toggleList = (req, res) => {
    const { id } = req.params;
    const grocList = groceryItems.find(grocList => grocList.id === id);

    if (!grocList){
        return res.status(404).json({
            status: 'error'
        });
    }

    grocList.checked = !grocList.checked;

    return res.json({
        status: 'success',
        data: grocList
    });
};

export const clearList = (req, res) => {
    groceryItems.length = 0;
    return res.json({
        status: 'success',
        data: []
    });
};

