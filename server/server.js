import express from "express";
import "dotenv/config";
import cors from "cors";

const app = express();
app.use(cors());

app.get("/", (req, res) => res.send("Api is working!!"));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
