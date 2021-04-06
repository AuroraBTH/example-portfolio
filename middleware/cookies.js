/**
 * This module forwards our cookie to our views so we can use it to pick stylesheet
 */

let cookies = {
    info: (req, res, next) => {
        res.locals.cookies = req.cookies;
        next();
    }
};

module.exports = cookies;
