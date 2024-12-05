import { Router } from 'express'
import { CreateUser, deleteUserById, getAllUsers, getUserById, updateUserById } from '../controllers/user.controller';

export const router = Router();


router.get('/users', getAllUsers);

router.post('/user', CreateUser);

router.get('/user/:id', getUserById);

router.put('/user/:id', updateUserById);

router.delete('/user/:id', deleteUserById);
