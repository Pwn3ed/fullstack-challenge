import { Router } from 'express'
import { CreateCity, deleteCityById, getAllCities, getAllCitiesCount, getCityById, updateCityById } from '../controllers/city.controller';

export const router = Router();


router.get('/cities', getAllCities);

router.post('/city', CreateCity);

router.get('/city/:id', getCityById);

router.put('/city/:id', updateCityById);

router.delete('/city/:id', deleteCityById);

router.get('/cities/count', getAllCitiesCount)
