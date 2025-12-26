const router = require("express").Router();
const now = require("./../controller/now.controller");
// repeat;



router.get("/now", now.dynamic_content);
router.post("/repeat", now.repeat_json);

module.exports = router;
