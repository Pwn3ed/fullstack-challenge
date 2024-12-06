import { Request, Response } from "express";
import db from "../../config/database";


export const getAllPeople = async (req: Request, res:Response) => {
    const query = `
        SELECT * FROM person;
    `;

    try {
        const [results, fields] = await (await db).query(query);
        
        res.send(results);

    } catch (error) {
        console.log(error)
    }


}

export const CreatePerson = async (req: Request, res: Response) => {

    const values = [
        req.body.name,
        req.body.email,
        req.body.cityid
    ];
    
    const query = `
        INSERT INTO person (name, email, cityid) VALUES (?, ?, ?)
    `;

    try {
        const [results, fields] = await (await db!).query(query, values);
        res.status(200).send(results);

    } catch {
        res.status(400).send('Error');
    }

}

export const getPersonById = async (req:Request, res:Response) => {

    const values = [
        req.params.id
    ]

    try {
        const [results, fields] = await (await db).query('SELECT * from person WHERE id = ?', values);
        res.status(200).send(results);
    } catch {
        res.status(400).send('Error');
    }
}

export const updatePersonById = async (req: Request, res: Response) => {

    const values = [
        req.body.name,
        req.body.email,
        req.body.cityid,
        req.params.id
    ];

    try {
        const [results, fields] = await (await db).query(`
                update person
                set name = ?, email = ?, cityid = ?
                where id = ?
            `, values);
        res.status(200).send(results);
    } catch {
        res.status(400).send('Error');
    }

}

export const deletePersonById = async (req: Request, res: Response) => {

    const values = [
        req.params.id
    ];

    try {
        const [results, fields] = await (await db).query(`
                delete from person
                where id = ?
            `, values);
        res.status(200).send(results);
    } catch {
        res.status(400).send('Error');
    }

}

export const getAllPeopleCount = async (req: Request, res:Response) => {
    const query = `
        SELECT count(id) as count FROM person;
    `;

    try {
        const [results, fields] = await (await db).query(query);
        
        res.send(results);

    } catch (error) {
        console.log(error)
    }


}
