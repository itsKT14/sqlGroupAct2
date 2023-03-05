const usersRouter = require('express').Router();
const sql = require('../database/mySql');

usersRouter.get('/users', async (req, res)=>{
    try {
        await sql.query('CALL SelectAllUsers()',(error, record)=>{
            res.send(record[0]);
        });
    } catch (error) {
        console.log(error);
    }
});

usersRouter.get('/users/:id', async (req, res)=>{
    try {
        const userId = req.params.id;
        await sql.query(`CALL SelectUserById(${userId})`,(error, record)=>{
            res.send(record[0]);
        });
    } catch (error) {
        console.log(error);
    }
});

usersRouter.post('/users/add', async (req, res)=>{
    try {
        const fname = req.body.fname;
        const lname = req.body.lname;
        const pic = req.body.pic;
        const email = req.body.email;
        const contact = req.body.contact;
        const status = req.body.status;
        const gender = req.body.gender;
        const address = req.body.address;
        const password = req.body.password;
        await sql.query(`CALL InsertNewUser('${fname}', '${lname}', '${pic}', '${email}', ${contact}, '${status}', '${gender}', '${address}', '${password}')`,
            (error, result)=>{
            res.status(201).send(result);
        });
    } catch (error) {
        console.log(error);
    }
});

usersRouter.post('/users/update/:id', async (req, res)=>{
    try {
        const id = req.params.id;
        const fname = req.body.fname;
        const lname = req.body.lname;
        const email = req.body.email;
        const contact = req.body.contact;
        const status = req.body.status;
        const gender = req.body.gender;
        const address = req.body.address;
        const password = req.body.password;
        await sql.query(`CALL UpdateUserById('${fname}', '${lname}', '${email}', ${contact},
         '${status}', '${gender}', '${address}', '${password}', ${id})`,(error, result)=>{
            res.status(201).send(result);
        });
    } catch (error) {
        console.log(error);
    }
});

usersRouter.get('/users/delete/:id', async (req, res)=>{
    try {
        const id = req.params.id;
        await sql.query(`CALL DeleteUserById(${id})`,(error, result)=>{
            res.status(201).send(result);
        });
    } catch (error) {
        console.log(error);
    }
});

module.exports = usersRouter;