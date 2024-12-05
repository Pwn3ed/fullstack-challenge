// import db from "../../config/database"


// export const getAllUsersService = async () => {
//     const query = `
//         SELECT * FROM user;
//     `;

//     try {
//         const [results, fields] = (await db).query(query);
        
//         return data;
//     } catch (error) {
//         console.log(error)
//     }
// }

// export const createUserService = async (username:string, address:string) => {
//     const query = `
//         INSERT INTO user(username, address)
//         VALUES (
//             '?', '?'
//         )
//     `;
//     const values = {username, address}

//     try {

//         // const data = await pool.query(query, values);
//         // return data[0];
//         // console.log(values)

//     } catch (error) {
//         console.log(error)
//     }
// }

