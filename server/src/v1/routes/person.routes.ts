import { Router } from 'express'
import { CreatePerson, deletePersonById, getAllPeople, getAllPeopleCount, getPersonById, updatePersonById } from '../controllers/person.controller';

export const router = Router();


router.get('/people', getAllPeople);

router.post('/person', CreatePerson);

router.get('/person/:id', getPersonById);

router.put('/person/:id', updatePersonById);

router.delete('/person/:id', deletePersonById);

router.get('/people/count', getAllPeopleCount);
