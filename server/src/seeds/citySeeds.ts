import db from '../config/database';

export const citySeeds = () => {
    createCityTable();
    insertCity1();
    insertCity2();
}

const createCityTable = async () => {
    const query = `
        CREATE TABLE IF NOT EXISTS city(
            id SERIAL PRIMARY KEY,
            name VARCHAR(255) NOT NULL
        )
    `;
    
    (await db).query(query);
}

const insertCity1 = async () => {
    const query = `
        INSERT INTO city (name)
        VALUES 
        (
            'Xangri-la'
        )
    `;
    
    (await db).query(query);
}

const insertCity2 = async () => {
    const query = `
        INSERT INTO city (name)
        VALUES 
        (
            'Osorio'
        )
    `;
    
    (await db).query(query);
}