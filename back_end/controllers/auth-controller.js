const sql = require("../config/db");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const signUp = async (req, res) => {
  const { email, name, password } = req.body;
  const hashedPassword = bcrypt.hashSync(password, 10);
  const data = await sql`
    INSERT INTO users (email, name, ,password)
    VALUES(${name},${email},${hashedPassword},'url);`;
  console.log("DATA", data);
  res
    .status(201)
    .json({ message: "New user registered successfully", user: data });
};

const logIn = async (req, res) => {
  const { email, password } = req.body;
  const data = await sql`
    SELECT * FROM users WHERE email=${email}`;

  if (!user) {
    res.status(404).json({ message: "Don't have an account" });
  } else {
    const isCheck = bcrypt.compareSync(password, user.password);
    if (!isCheck) {
      res.status(400).json({ message: "Email or password is wrong" });
    } else {
      const token = jwt.sign({ id: user.id }, "JWT_TOKEN_PASS@123", {
        expiresIn: "1h",
      });
      res.status(200).json({ message: "success", token });
    }
  }
};

module.exports = {
  signUp,
  logIn,
};
