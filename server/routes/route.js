// const express = require('express');
import express from 'express';
import {addUser, getUsers, deleteUser, getUser,editUserRecord} from '../controller/user-controller.js';
const router = express.Router();

router.post('/add', addUser);
router.get('/all', getUsers);
router.delete('/:id',deleteUser)
router.put('/:id',getUser)
router.patch('/:id',editUserRecord)


export default router;