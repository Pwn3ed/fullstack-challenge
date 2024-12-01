import pool from "../../config/database"


const selectAll = () => {
    const query = `
        SELECT * FROM user;
    `;
    if (pool)
        pool.query(query);
        console.log("test");
}

