import pool from '../config/database';

export const User = () => {
    createUserTable();
    insertUser();
}

const createUserTable = () => {
    const query = `
        CREATE TABLE IF NOT EXISTS user(
        id SERIAL PRIMARY KEY,
        username VARCHAR(100) UNIQUE,
        address VARCHAR(255) NOT NULL
        )
    `;
    if (pool)
        pool.query(query);
}

const insertUser = () => {
    const query = `
        INSERT INTO user (username, address)
        VALUES 
        (
            'Diego',
            'Avenue Diamante, 558'
        ),
        (
            'Leonardo',
            'Avenue Jorge Dariva, 1251'
        )
    `;
    if (pool)
        pool.query(query);
}