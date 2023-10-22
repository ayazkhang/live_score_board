import express from "express";
import router from "./src/router/MatechesRouter";

const app = express();
const port = 3000;

app.use(express.json());

app.use("/api/matches", router);

app.listen(port, () => {
  console.log(`app listening on port ${port}`);
});
