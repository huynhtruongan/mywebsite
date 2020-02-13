const   express = require("express"),
        router  = express.Router();
    router.get("/", (req, res)=>{
        res.render("reviews/review");
    })
module.exports = router;