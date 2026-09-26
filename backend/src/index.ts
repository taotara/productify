import express from 'express';
import cors from "cors"
import {ENV} from "./config/env.ts";
import { clerkMiddleware } from '@clerk/express'

const app = express();

app.use(cors({origin: ENV.FRONTEND_URL}))
app.use(clerkMiddleware()); // Auth obj will be attached to the req
app.use(express.json()); // Parse JSON request bodies.
app.use(express.urlencoded({ extended: true })); // Parse form data (like HRML forms).

app.get("/", (req, res) => {
    res.json({ 
        message: "Welcome to Productify API - Powered by PostgreSQL, Drizzle ORM, & Clerk Auth",
        endpoints: {
            users: "/api/users",
            products: "/api/products",
            comments: "/api/comments",
        }
     })
})

app.listen(ENV.PORT, () => console.log("Server is up and running on PORT:", ENV.PORT));