const sql = require("../config/db");

const getInfo = async (req, res) => {
  try {
    const [income, expense] =
      await sql`SELECT transaction_type, SUM(amount) FROM records GROUP BY transaction_type`;
    res.status(200).json({ income, expense });
  } catch (error) {
    res.status(400).json({ message: "failded", error });
  }
};

const getAllRecords = async (req, res) => {
  try {
    const guilgee = await sql`SELECT * FROM records`;
    res.status(200).json({ guilgee });
  } catch (error) {
    res.status(400).json({ message: "failded", error });
  }
};

const getChartData = async (req, res) => {
  try {
    const donutChartData = await sql`
    SELECT SUM(r.amount), c.name cat_name FROM records r 
    INNER JOIN categories c ON r.cid=c.id
    WHERE r.transaction_type='EXP'
    GROUP BY cat_name;
    `;
    const barChartData = await sql`
    SELECT TO_CHAR(DATE_TRUNC('month', r.createdAt), 'Mon') as sar, 
    SUM(CASE WHEN r.transaction_type = 'EXP' THEN r.amount ELSE 0 END) as total_exp,
    SUM(CASE WHEN r.transaction_type = 'INC' THEN r.amount ELSE 0 END) as total_inc
    FROM records r
    GROUP BY DATE_TRUNC('month', r.createdAt) 
    ORDER BY DATE_TRUNC('month', r.createdAt);
    `;
    res
      .status(200)
      .json({ message: "success", donut: donutChartData, bar: barChartData });
  } catch (error) {
    res.status(400).json({ message: "failded", error });
  }
};

const createRecord = async (req, res) => {
  const { name, amount, transaction_type, description } = req.body;
  const data =
    await sql`INSERT INTO records (name ,amount, transaction_type,description )VALUES(${name},${amount},${transaction_type},${description});`;
  console.log("DATA", data);
  res
    .status(201)
    .json({ message: "Created new record successfully", user: data });
};

const updateRecord = async (req, res) => {
  const { id } = req.params;
  const { name, amount, transaction_type, description } = req.body;
  const data =
    await sql`UPDATE records SET name=${name},amount=${amount},transaction_type=${transaction_type},description=${description} WHERE id=${id}`;
  console.log("DATA", data);
  res.status(200).json({ message: "Updated record successfully", user: data });
};

const deleteRecord = async (req, res) => {
  const { id } = req.params;
  const data = await sql`DELETE FROM records WHERE id=${id}`;
  console.log("DATA", data);
  res.status(200).json({ message: "Deleted record successfully", user: data });
};

module.exports = {
  getAllRecords,
  createRecord,
  updateRecord,
  deleteRecord,
  getInfo,
  getChartData,
};
