import { Request, Response } from "express";
import db from "../../config/database";
import { v4 } from "uuid";


export const getAllCities = async (req: Request, res:Response) => {
    const query = `
        SELECT * FROM city;
    `;

    try {
        const [results, fields] = await (await db).query(query);
        
        res.send(results);

    } catch (error) {
        console.log(error)
    }


}

export const CreateCity = async (req: Request, res: Response) => {
    
    const values = [
        req.body.name
    ];
    
    const query = `
        INSERT INTO city (name) VALUES (?)
    `;

    try {
        const [results, fields] = await (await db!).query(query, values);
        res.status(200).send(results);

    } catch {
        res.status(400).send('Error');
    }

}

export const getCityById = async (req:Request, res:Response) => {

    const value = [
        req.params.id
    ]

    try {
        const [results, fields] = await (await db).query('SELECT * FROM city WHERE id = ?', value);
        res.status(200).send(results);
    } catch {
        res.status(400).send('Error');
    }
}

export const updateCityById = async (req: Request, res: Response) => {

    const values = [
        req.body.name,
        req.params.id
    ];

    try {
        const [results, fields] = await (await db).query(`
                update city
                set name = ?
                where id = ?
            `, values);
        res.status(200).send(results);
    } catch {
        res.status(400).send('Error');
    }

}

export const deleteCityById = async (req: Request, res: Response) => {

    const values = [
        req.params.id
    ];

    try {
        const [results, fields] = await (await db).query(`
                delete from city
                where id = ?
            `, values);
        res.status(200).send(results);
    } catch {
        res.status(400).send('Error');
    }

}

export const getAllCitiesCount = async (req: Request, res:Response) => {
    const query = `
        SELECT count(id) as count FROM city;
    `;

    try {
        const [results, fields] = await (await db).query(query);
        
        res.send(results);

    } catch (error) {
        console.log(error)
    }


}
