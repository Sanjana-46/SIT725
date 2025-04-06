
const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;


app.use(express.static("public"));


app.get("/add", (req, res) => {
    const a = parseFloat(req.query.a);
    const b = parseFloat(req.query.b);

    if (isNaN(a) || isNaN(b)) {
        return res.status(400).json({ error: "Invalid numbers provided" });
    }

    const sum = a + b;
    res.json({ result: sum });
});


app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});
