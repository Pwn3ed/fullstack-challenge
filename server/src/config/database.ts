import 'dotenv/config';
import mysql, { Pool } from 'mysql2';

let pool: Pool | null = null;

try {

    pool = mysql.createPool({
        host: process.env.MYSQL_HOST,
        user: process.env.MYSQL_USER,
        password: process.env.MYSQL_PASSWORD,
        database: process.env.MYSQL_DB
    });

    
} catch (err) {
    console.log(err);
}

export default pool;