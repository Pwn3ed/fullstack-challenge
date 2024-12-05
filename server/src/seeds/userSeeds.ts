import { v4 } from 'uuid';
import db from '../config/database';

export const userSeeds = () => {
    createUserTable();
    insertUser1();
    insertUser2();
}

const createUserTable = async () => {
    const query = `
        CREATE TABLE IF NOT EXISTS user(
            id SERIAL PRIMARY KEY,
            name VARCHAR(255) NOT NULL,
            password VARCHAR(50) NOT NULL,
            email VARCHAR(255) NOT NULL
        )
    `;
    
    (await db).query(query);
}

const insertUser1 = async () => {

    const query = `
        INSERT INTO user (name, password, email)
        VALUES 
        (
            'diego',
            '123',
            'diego@hotmail.com'
        )
    `;
    
    (await db).query(query);
}

const insertUser2 = async () => {

    const query = `
        INSERT INTO user (name, password, email)
        VALUES 
        (
            'leonardo',
            '123',
            'leonardo@hotmail.com'
        )
    `;
    
    (await db).query(query);
}

