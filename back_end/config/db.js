const { Client } = require("pg");

const client = new Client({
  user: "expense_db_owner",
  password: "r1Eh8lsoCMbV",
  host: "postgresql://expense_db_owner:r1Eh8lsoCMbV@ep-falling-bonus-a5kzr4jm.us-east-2.aws.neon.tech/expense_db?sslmode=require",
  port: 5334,
  database: "expense_db",
});

// await client.connect();
const connectDB = async () => {
  console.log("DB");
  try {
    await client.connect();
    console.log("Connected database");
  } catch (error) {
    console.log("DB error:", error);
  }
};

module.exports = client;
module.exports = { connectDB };
