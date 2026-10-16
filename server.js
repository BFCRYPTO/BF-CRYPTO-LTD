const express = require("express");
const cors = require("cors");

const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
    res.send("BF-CRYPTO LTD server is running!");
});

app.post("/contact", (req, res) => {

    console.log("===== NEW CUSTOMER MESSAGE =====");
    console.log("Name:", req.body.name);
    console.log("Phone:", req.body.phone);
    console.log("Service:", req.body.service);
    console.log("Message:", req.body.message);
    console.log("================================");

    res.json({
        success: true,
        message: "Thank you! Your message has been received."
    });
});

app.listen(PORT, () => {
    console.log(`BF-CRYPTO LTD server running at http://localhost:${PORT}`);
});