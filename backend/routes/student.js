import express from "express";
import { Student } from "./models/Student.js";
import bcrypt from 'bcrypt';
import { verifyAdmin } from "./auth.js"

const router = express.Router();

router.post('/register',verifyAdmin, async (req, res) => {
    try {
        const { username, password, roll, address } = req.body;

        // Check if student already exists
        const existingStudent = await Student.findOne({ username });
        if (existingStudent) {
            return res.json({ message: "Student is already registered" });
        }

        // Hash the password
        const hashPassword = await bcrypt.hash(password, 10);

        // Create a new student instance
        const newStudent = new Student({
            username,
            password: hashPassword,
            roll,
            address,
        });

        // Save the new student to the database
        await newStudent.save();
        
        // Send success response
        return res.json({ registered: true });
    } catch (err) {
        // Handle errors
        console.error(err);
        return res.status(500).json({ message: "Error in registering student" });
    }
});

export { router as studentRouter };
