const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const { logger } = require("./middleware/logger");
dotenv.config();

const userRoutes = require("./routes/user-route");
const categoryRoutes = require("./routes/category-route");
const recordRoutes = require("./routes/record-route");
const authRoutes = require("./routes/auth-route");

const PORT = process.env.PORT;

const app = express();

app.use(cors());
app.use(express.json());
app.use(logger());

app.use("/users", userRoutes);
app.use("/categories", categoryRoutes);
app.use("/records", recordRoutes);
app.use("/auth", authRoutes);

app.get("/", (_, res) => {
  res.send("Welcome to expense tracker API");
});

app.listen(PORT, () => {
  console.log(`server is running at localhost:${PORT}`);
});
