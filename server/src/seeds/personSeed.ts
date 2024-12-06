import { v4 } from 'uuid';
import db from '../config/database';

export const personSeeds = () => {
    createPersonTable();
    insertPersons();
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

const insertPersons = async () => {

    const query = `
        INSERT INTO person (email, name, cityid)
        VALUES 
        ('diego@hotmail.com','Diego Michel Prestes', 21),
        ('test@hotmail.com', 'testUser', 2)
    `;
    
    (await db).query(query);
}
