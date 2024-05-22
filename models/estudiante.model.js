import {pool} from "../database/connection.js"

const create = async ({rut, nombre, curso, nivel}) =>{

    const query ={
        text: 'INSERT INTO estudiantes (rut, nombre, curso, nivel) VALUES ($1, $2, $3, $4) RETURNING *;',
        values: [rut, nombre, curso, nivel]
    }
    const {rows} = await pool.query(query)
    return rows[0]
}

const all = async () => {
    const {rows} = await pool.query("SELECT * FROM estudiantes")
    return rows
}

const one = async (rut) => {

    const query = {
        text: 'SELECT * FROM ESTUDIANTES WHERE RUT = $1',
        values: [rut]
    }
    const {rows} = await pool.query(query)
    return rows[0]
}

const update = async ({nombre, curso, nivel, rut}) => {
    const query ={
        text: 'UPDATE estudiantes SET nombre = $1, curso = $2, nivel = $3 WHERE rut = $4 RETURNING *;',
        values: [nombre, curso, nivel, rut]
    }
    const {rows} = await pool.query(query)
    return rows
}

const remove = async (rut) => {
    const query ={
        text: 'DELETE FROM estudiantes WHERE rut  = $1 RETURNING *;',
        values: [rut]
    }
    const {rows} = await pool.query(query)
    return rows
}

export const estudianteModel = {
    create,
    all,
    one,
    update,
    remove
}