import express from "express";
import bcrypt from "bcrypt";
import { Admin } from './models/Admin.js';
import './db.js'; // Importing the database connection file assuming it's in './db.js'

(async function createAdminAccount() {
    try {
        const adminCount = await Admin.countDocuments();
        if (adminCount === 0) {
            const hashPassword = await bcrypt.hash('adminpassword', 10);
            const newAdmin = new Admin({
                username: 'admin',
                password: hashPassword
            });
            await newAdmin.save();
            console.log('Admin user created successfully.');
        } else {
            console.log('Admin user already exists.');
        }
    } catch (error) {
        console.error('Error creating admin user:', error);
    }
})();

