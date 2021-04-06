/**
 * This file serves as an example on how a router file can look like.
 */

/* First, we require Express and with it, create our router */
const express = require("express");
const router = express.Router();

/**
 * After this, we'll add our routes. We'll start small and add a route for "/".
 *
 * `router.get` indicates that the request is a GET request, the most common and probably the
 * only one we'll use in this course.
 *
 * We send our request/response objects to the function, allowing the function to access the
 * Express framework.
 *
 * We create an object called `data` which contains the title for our page as well as any other
 * data we would like to send to our views.
 *
 * Finally, we tell Express that if you get a request on this route, render the following page
 * with the help of `res.render()` and the data in our `data` variable.
 */
router.get("/", (req, res) => {
    let data = {
        title: "Home"
    };

    res.render("pages/index", data);
});

/* Finally, we export our module so that it can be accessed in other files */
module.exports = router;
