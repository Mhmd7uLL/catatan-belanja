import { nanoid } from 'nanoid';
import { db } from '../db/mysql.js';

export const addList = async (req, res) => {
    const {
        name,
        quantity,
        checked
    } = req.body

    const id = nanoid();
    const newItems = {
        id,
        name,
        quantity,
        checked
    }

    try {
        await db.query(
            'INSERT INTO items (id, name, quantity, checked) VALUES (?, ?, ?, ?)',
            [id, name, quantity, checked]
        );

        return res.status(201).json({
            status: 'success',
            data: newItems
        });
    } catch (error) {
        return res.status(500).json({
            status: 'error',
            message: error.message
        });
    }
};

export const getList = async (req, res) => {
    try {
        const [rows] = await db.query('SELECT * FROM items ORDER BY created_at DESC');
        return res.status(200).json({
            status: 'success',
            data: rows
        });
    } catch (error) {
        return res.status(500).json({
            status: 'error',
            message: error.message
        });
    }
};

export const deleteList = async (req, res) => {
    const { id } = req.params;

    try {
        const [result] = await db.query('DELETE FROM items WHERE id = ?', [id]);

        if (result.affectedRows === 0) {
            return res.status(404).json({
                status: 'error',
                message: 'List tidak ditemukan'
            });
        }

        return res.json({
            status: 'success',
            data: []
        });
    } catch (error) {
        return res.status(500).json({
            status: 'error',
            message: error.message
        });
    }
};

export const toggleList = async (req, res) => {
    const { id } = req.params;

    try {
        const [rows] = await db.query('SELECT * FROM items WHERE id = ?', [id]);
        const grocList = rows[0];

        if (!grocList) {
            return res.status(404).json({
                status: 'error',
                message: 'List tidak ditemukan'
            });
        }

        const newChecked = !grocList.checked;
        await db.query('UPDATE items SET checked = ? WHERE id = ?', [newChecked, id]);

        return res.json({
            status: 'success',
            data: {
                ...grocList,
                checked: newChecked
            }
        });
    } catch (error) {
        return res.status(500).json({
            status: 'error',
            message: error.message
        });
    }
};

export const clearList = async (req, res) => {
    try {
        await db.query('DELETE FROM items');
        return res.json({
            status: 'success',
            data: []
        });
    } catch (error) {
        return res.status(500).json({
            status: 'error',
            message: error.message
        });
    }
};

