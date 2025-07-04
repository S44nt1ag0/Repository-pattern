import express from "express";
const app = express();
import router from "./routers";

app.use(express.json());
app.use(router);

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
