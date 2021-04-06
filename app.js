const express = require("express");
const cookieParser = require("cookie-parser");
const cookies = require("./middleware/cookies");

/* Create an Express instance and set the port to 3000 */
const app = express();
const port = 3000;

/* Set our view engine to EJS */
app.engine("ejs", require("express-ejs-extend"));
app.set("view engine", "ejs");
/* Tell Express where to find static files, such as CSS/JS/images */
app.use(express.static('public'));

/* Add support for cookies which can be accessed in our views through locals.cookies.{value} */
app.use(cookieParser());
app.use(cookies.info);

/* Loading our routes */
const example = require("./routes/example");
const theme = require("./routes/theme");

/* Adding our routes to Express */
app.use("/", example);
app.use("/theme", theme);

/* Start the Express server */
app.listen(port, () => {
    console.info(`Express server running on port ${port}`);
});
