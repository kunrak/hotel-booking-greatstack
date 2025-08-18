import express from "express";
import "dotenv/config";
import cors from "cors";
import connectDB from "./configs/db.js";
import { clerkMiddleware } from "@clerk/express";
import clerkWebhooks from "./controllers/clerkWebHooks.js";

connectDB();

const app = express();
app.use(cors());

// middleware
app.use(express.json());
app.use(clerkMiddleware());

// Api to listen Clerk Webhooks
app.use("/api/webhook", clerkWebhooks);

// middleware
app.use(express.json());
app.use(clerkMiddleware());

// Api to listen Clerk Webhooks
app.use("/api/webhook", clerkWebhooks);

app.get("/", (req, res) => res.send("Api is working!!"));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
