import { Request, Response } from "express";
import db from "../../config/database";


export const getAllUsers = async (req: Request, res:Response) => {
    const query = `
        SELECT * FROM user;
    `;

    try {
        const [results, fields] = await (await db).query(query);
        
        res.send(results);

    } catch (error) {
        console.log(error)
    }


}

export const CreateUser = async (req: Request, res: Response) => {
    
    const values = [
        req.body.name,
        req.body.password,
        req.body.email
    ];
    
    const query = `
        INSERT INTO user (name, password, email) VALUES (?, ?, ?)
    `;

    try {
        const [results, fields] = await (await db!).query(query, values);
        res.status(200).send(results);

    } catch {
        res.status(400).send('Error');
    }

}

export const getUserById = async (req:Request, res:Response) => {

    const values = [
        req.params.id
    ]

    try {
        const [results, fields] = await (await db).query('SELECT * from user WHERE id = ?', values);
        res.status(200).send(results);
    } catch {
        res.status(400).send('Error');
    }
}

export const updateUserById = async (req: Request, res: Response) => {

    const values = [
        req.body.name,
        req.body.password,
        req.body.email,
        req.params.id
    ];

    try {
        const [results, fields] = await (await db).query(`
                update user
                set name = ?, password = ?, email = ?
                where id = ?
            `, values);
        res.status(200).send(results);
    } catch {
        res.status(400).send('Error');
    }

}

export const deleteUserById = async (req: Request, res: Response) => {

    const values = [
        req.params.id
    ];

    try {
        const [results, fields] = await (await db).query(`
                delete from user
                where id = ?
            `, values);
        res.status(200).send(results);
    } catch {
        res.status(400).send('Error');
    }

}
