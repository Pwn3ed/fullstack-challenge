import { v4 } from 'uuid';
import db from '../config/database';

export const personSeeds = () => {
    createPersonTable();
    inserPerson1();
    insertPerson2();
}

const createPersonTable = async () => {
    const query = `
        CREATE TABLE IF NOT EXISTS person(
            id SERIAL PRIMARY KEY,
            email VARCHAR(255) UNIQUE NOT NULL,
            name VARCHAR(100) NOT NULL,
            cityid INT
        )
    `;
    
    (await db).query(query);
}

const inserPerson1 = async () => {

    const query = `
        INSERT INTO person (email, name, cityid)
        VALUES 
        (
            'diego@hotmail.com',
            'Diego Michel Prestes',
            1
        )
    `;
    
    (await db).query(query);
}

const insertPerson2 = async () => {

    const query = `
        INSERT INTO person (email, name, cityid)
        VALUES 
        (
            'leonardo@hotmail.com',
            'Leonardo Luz',
            2
        )
    `;
    
    (await db).query(query);
}

