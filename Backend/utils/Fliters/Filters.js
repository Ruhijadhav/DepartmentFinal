import express from 'express';
import {authorize , authorizeStudent} from '../User/Authorization.js';
import connection from '../Connection/Connection.js';
const router = express();


//filters

router.use((req,res,next)=>{
          next();
});

router.get('/courseFilter/:course', authorize , async (req, res) => {
    const { course } = req.params;
    try {
        const query = 'SELECT * FROM UserProfile WHERE Course = ?';
        const [result] = await connection.promise().execute(query, [course]);
        res.status(200).json({ data: result, message: `Successfully fetched users with Course: ${course}` });
    } catch (err) {
        console.error(err);
        res.status(500).json({ Error: 'Internal server error' });
    }
});

router.get('/semFilter/:semester', authorize, async (req, res) => {
    let { semester } = req.params;
    semester = parseInt(semester,10);
    console.log({semester});
    try {
        const query = 'SELECT * FROM UserProfile WHERE Semester = ?';
        const [result] = await connection.promise().execute(query, [semester]);
        res.status(200).json({ data: result, message: `Successfully fetched users with Course: ${semester}` });
    } catch (err) {
        console.error(err);
        res.status(500).json({ Error: 'Internal server error' });
    }
});

router.get('/secFilter/:sector', authorize , async (req, res) => {
    const { sector } = req.params;
    try {
        const query = 'SELECT * FROM UserProfile WHERE Sector = ?';
        const [result] = await connection.promise().execute(query, [sector]);
        res.status(200).json({ data: result, message: `Successfully fetched users with Course: ${sector}` });
    } catch (err) {
        console.error(err);
        res.status(500).json({ Error: 'Internal server error' });
    }
});


router.get('/yearFilter/:year', authorize , async (req, res) => {
    const { year } = req.params;
    console.log({year})
    try {
        const query = 'SELECT * FROM UserProfile WHERE PassingYear = ?';
        const [result] = await connection.promise().execute(query, [year]);
        console.log(result);
        res.status(200).json({ data: result, message: `Successfully fetched users with Course: ${year}` });
    } catch (err) {
        console.error(err);
        res.status(500).json({ Error: 'Internal server error' });
    }
});


router.get('/roleFilter/:role', authorize , async (req, res) => {
    const { role } = req.params;
    console.log({role})
    try {
        const query = 'SELECT * FROM UserProfile WHERE Role = ?';
        const [result] = await connection.promise().execute(query, [role]);
        console.log(result);
        res.status(200).json({ data: result, message: `Successfully fetched users with Role: ${role}` });
    } catch (err) {
        console.error(err);
        res.status(500).json({ Error: 'Internal server error' });
    }
});

export default router;
