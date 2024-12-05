import db from '../config/database';

export const citySeeds = () => {
    createCityTable();
    insertCities();
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

const insertCities = async () => {
    const query = `
        INSERT INTO city (name)
        VALUES 
        ('Porto Alegre'),
        ('Caxias do Sul'),
        ('Pelotas'),
        ('Canoas'),
        ('Santa Maria'),
        ('Gravataí'),
        ('Viamão'),
        ('Novo Hamburgo'),
        ('São Leopoldo'),
        ('Rio Grande'),
        ('Alvorada'),
        ('Passo Fundo'),
        ('Sapucaia do Sul'),
        ('Uruguaiana'),
        ('Bagé'),
        ('Bento Gonçalves'),
        ('Erechim'),
        ('Guaíba'),
        ('Santa Cruz do Sul'),
        ('Santana do Livramento')
    `;
    
    (await db).query(query);
}

