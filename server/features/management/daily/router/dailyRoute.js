const {dailyController}=require("../controller/dailyController")
const express =require("express")
router = express.Router()


router.route("/")
.get(dailyController.getAllDaily)
.post(dailyController.createNewDaily)

router.route("/:id")
.get(dailyController.getDailyById)
.patch(dailyController.updateDaily)
.delete(dailyController.DeleteDailyById)


module.exports = router