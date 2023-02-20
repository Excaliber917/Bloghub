const express = require("express");
const app = express();
const dotenv = require("dotenv");
const connectTOMongo = require('./db')
const authRoute = require("./routes/auth");
const userRoute = require("./routes/users");
const postRoute = require("./routes/posts");
const categoryRoute = require("./routes/categories");
const multer = require("multer");
const path = require("path");
connectTOMongo()

dotenv.config();
app.use(express.json());
const PORT = process.env.PORT || 5000
app.use("/images", express.static(path.join(__dirname, "/images")));


const storage = multer.diskStorage({
    destination: (req, res, cb) => {
        cb(null, "images")
    },
    filename: (req, file, cb) => {
        cb(null, req.body.name)
    }
})

const upload = multer({ storage: storage })
app.post("/api/upload", upload.single("file"), (req, res) => {
    res.status(200).send("all done")
})

app.use("/api/auth", authRoute);
app.use("/api/users", userRoute);
app.use("/api/posts", postRoute);
app.use("/api/categories", categoryRoute);

app.listen(PORT, () => {
    console.log("Backend is running");
});