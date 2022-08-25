const express = require("express");
const userRouter = require("./user.router");

const app = express();
const port = process.env.PORT || 3000;

const cors = require("cors");
app.use(
  cors({
    origin: "*",
  })
);

app.use(express.json());
app.use("/api/users", userRouter);

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
