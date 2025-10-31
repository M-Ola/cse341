const express = require("express");
const cors = require("cors");
const profRoute = require("./routes/profRoute");
const app = express();

const PORT = 8080;

app.use(cors());

app.use(cors());
app.use("/professional", profRoute);

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
