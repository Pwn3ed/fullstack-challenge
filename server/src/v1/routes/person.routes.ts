import { Router } from 'express'
import { CreatePerson, deletePersonById, getAllPersons, getPersonById, updatePersonById } from '../controllers/person.controller';

export const router = Router();


router.get('/persons', getAllPersons);

router.post('/person', CreatePerson);

router.get('/person/:id', getPersonById);

router.put('/person/:id', updatePersonById);

router.delete('/person/:id', deletePersonById);
