const express = required("express");
const cors = required("cors");
const app = express();

app.use(cors());

app.use(express.json());

// DB Connection
const conn = required("./db/conn");

conn();

// Routes
const routes = required("./routes/router");

app.use("/api", routes);

app.listen(3000, function () {
    console.log("Sevidor Online!");
});
