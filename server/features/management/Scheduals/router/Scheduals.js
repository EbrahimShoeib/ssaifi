const {SchedualsController}=require("../controller/SchedualsController")
const express =require("express")
router = express.Router()


router.route("/")
.get(SchedualsController.getAllScheduals)
.post(SchedualsController.CreateNewScheduals)

router.route("/:id")
.get(SchedualsController.getSchedualsById)
.patch(SchedualsController.updateScheduals)
.delete(SchedualsController.deleteScheduals)


module.exports = router