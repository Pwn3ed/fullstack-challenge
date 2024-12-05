import db from "../config/database";


export const dropAll = async () => {
    const query = `drop table city, person, user`;

    (await db).query(query);
}