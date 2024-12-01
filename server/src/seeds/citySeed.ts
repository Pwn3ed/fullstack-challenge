import pool from '../config/database';

export const City = () => {
    createCityTable();
    insertCity();
}

const createCityTable = () => {
    const query = `
        CREATE TABLE IF NOT EXISTS city(
        id SERIAL PRIMARY KEY,
        city VARCHAR(255) NOT NULL,
        'userID' int,
        FOREIGN KEY ('userID') REFERENCES user(id)
        )
    `;
    if (pool)
        pool.query(query);
}

const insertCity = () => {
    const query = `
        INSERT INTO city (city, 'userID')
        VALUES 
        (
            'Xangri-la',
            1
        ),
        (
            'Osorio',
            2
        )
    `;
    if (pool)
        pool.query(query);
}