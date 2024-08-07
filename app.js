const express = require("express");
const path = require("path");
const app = express();

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.use(express.static(path.join(__dirname, "public")));

const indexRouter = require("./routes/index");
const destinationsRouter = require("./routes/destinations");
const blogRouter = require("./routes/blog");
const aboutRouter = require("./routes/about");

app.use("/", indexRouter);
app.use("/destinations", destinationsRouter);
app.use("/blog", blogRouter);
app.use("/about", aboutRouter);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
