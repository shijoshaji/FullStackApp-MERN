import mongoose from "mongoose";
import { config } from './db.config';

const dbURI = `${config.DB_PATH}${config.DB_HOST}:${config.DB_PORT}/${config.DB_NAME}`;

const connectDB = async () => {
    try {
        await mongoose.connect(dbURI);

        if (process.env.INFRA !== 'PRD') {
            console.log(`${mongoose.connection.host} - ${mongoose.connection.name}`);
        }
        return true;
    } catch (err) {
        console.log('DB err', err);
        // process.exit(1);
        return false;
    }
};


export default connectDB;
