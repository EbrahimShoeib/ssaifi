const {
  Schadual,
  createNewSchadual,
  updateSchadual,
} = require("../model/SchedualsModel");
const ApiErrorCode = require("../../../../core/errors/apiError");

class SchedualsController {
  static async getAllScheduals(req, res) {
    // Pagination parameters
    const pageSize = 10; // Number of documents per page

    // Calculate the number of documents to skip
    const skip = (req.query.page - 1) * pageSize;

    const regexQuery = new RegExp(req.query.query, "i"); // Case-insensitive regex query

    Schadual.find({
      $or: [
        { note: { $regex: regexQuery } },
      ],
    })
      .skip(skip) // Skip documents
      .limit(pageSize)
      .populate("hourseId")
      .populate("clientId")
      .populate("instractorId")
      .populate("course")
      .then(async (docs) => {
        if (docs) {
          const totalRecords = await Schadual.countDocuments();

          const maxPages = Math.ceil(totalRecords / pageSize);

          res.status(200).json({
            status_code: 0,
            message: "Success to Get All Schadual ",
            Schadual: {
              current_page: parseInt(req.query.page) || 1,
              max_pages: maxPages,
              data: docs,
            },
          });
        } else {
          res.status(404).json({
            status_code: ApiErrorCode.notFound,
            message: error.message,
            data: null,
            error: {
              message: error.message,
            },
          });
        }
      })
      .catch((error) => {
        res.status(500).json({
          status_code: ApiErrorCode.internalError,
          message: "There was a server internal error, please try again",
          data: null,
          error: {
            message: error.message,
          },
        });
      });
  }
  static async getSchedualsById(req, res) {
    await Schadual.findById(req.params.id)
    .populate("hourseId")
    .populate("clientId")
    .populate("instractorId")
    .populate("course")
      .then((docs) => {
        if (docs) {
          res.status(200).json({
            status_code: 0,
            message: "Success to get Schadual By Id",
            data: docs,
          });
        } else {
          res.status(404).json({
            status_code: ApiErrorCode.notFound,
            message: " Id Not Found",
            data: null,
          });
        }
      })
      .catch((error) => {
        res.status(500).json({
          status_code: ApiErrorCode.internalError,
          message: "There was a server internal error, please try again",
          data: null,
          error: {
            message: error.message,
          },
        });
      });
  }
  static async CreateNewScheduals(req, res) {
    const { error } = createNewSchadual(req.body);
    if (error) {
      res.status(400).json({
        status_code: ApiErrorCode.validation,
        message: error.message,
        data: null,
        error: {
          message: error.message,
        },
      });
    } else {
      
        new Schadual({
          courseDate: req.body.courseDate,
          clientId: req.body.clientId,
          course: req.body.course,
          status: req.body.status,
          instractorId: req.body.instractorId,
          paid: req.body.paid,
          note: req.body.note,
          courseTime: req.body.courseTime,
          hourseId: req.body.hourseId,
          price: req.body.price,
          arena: req.body.arena,
          membership: req.body.membership,
          confitmation: req.body.confitmation,
        })
          .save()
          .then((docs) => {
            if (docs) {
              res.status(200).json({
                status_code: 1,
                message: " Success to Create Schadual  ",
                data: docs,
              });
            } else {
              res.status(402).json({
                status_code: ApiErrorCode.notFound,
                message: error.message,
                data: null,
                error: {
                  message: error.message,
                },
              });
            }
          })
          .catch((error) => {
            res.status(400).json({
              status_code: ApiErrorCode.internalError,
              message: error.message,
              data: null,
              error: {
                message: error.message,
              },
            });
          });
      
    }
  }
  static async updateScheduals(req, res) {
    const { error } = updateSchadual(req.body);
    if (error) {
      res.status(400).json({
        status_code: ApiErrorCode.validation,
        message: error.message,
        data: null,
        error: {
          message: error.message,
        },
      });
    } else {
      await Schadual.findByIdAndUpdate(
        req.params.id,
        {
          $set: {
            courseDate: req.body.courseDate,
            clientId: req.body.clientId,
            course: req.body.course,
            status: req.body.status,
            instractorId: req.body.instractorId,
            paid: req.body.paid,
            note: req.body.note,
            courseTime: req.body.courseTime,
            hourseId: req.body.hourseId,
            price: req.body.price,
            arena: req.body.arena,
            membership: req.body.membership,
            confitmation: req.body.confitmation,
          },
        },
        { new: true }
      )
        .then((docs) => {
          if (docs) {
            res.status(200).json({
              status_code: 1,
              message: " Success to update Schadual ",
              data: docs,
            });
          } else {
            res.status(404).json({
              status_code: ApiErrorCode.notFound,
              message: "Id is Not Defined",
              data: null,
            });
          }
        })
        .catch((error) => {
          res.status(500).json({
            status_code: ApiErrorCode.internalError,
            message: error.message,
            data: null,
            error: {
              message: error.message,
            },
          });
        });
    }
  }
  static async deleteScheduals(req, res) {
    await Schadual.findByIdAndDelete(req.params.id)
      .then((docs) => {
        if (docs) {
          res.status(200).json({
            status_code: ApiErrorCode.notFound,
            message: " Success to Deleted",
            data: [],
          });
        } else {
          res.status(404).json({
            status_code: ApiErrorCode.notFound,
            message: " Id is not Defind",
            data: null,
          });
        }
      })
      .catch((error) => {
        res.status(500).json({
          status_code: ApiErrorCode.internalError,
          message: error.message,
          data: null,
          error: {
            message: error.message,
          },
        });
      });
  }
}

module.exports = {
  SchedualsController,
};
