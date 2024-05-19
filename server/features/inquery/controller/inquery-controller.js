const path = require('path')
const {Client} = require('../../client/models/client')
const {Daily} = require('../../management/daily/model/dailyModel')
const {Consume} = require('../../sales/consumeItem/model/consumeModel')
const {InvMembership} = require('../../sales/InvMembership/model/invMembership')


const {Hourse} =  require("../../hourse/models/hourse")
const {instractor} = require('../../instractor/model/instractor')
const {invConsume} = require('../../sales/invConsume/model/invConsum')


//import error
const ApiErrorCode = require("../../../core/errors/apiError") 


class InqueryController {

    static async getClientInqueries (req, res) {
        try {
            {

                Client.findById(req.params.id)
                  .select("-__v")
                  .then(async (docs) => {

                    if(docs){

                      const daily = await Daily.find({clientId : req.params.id})
                      .populate("clientId")
                      .populate("instractorId")
                      .populate("hourseId")

                      const cafateria = await Consume.find({clientId : req.params.id})
                      const invMembership = await InvMembership.findOne({clientId : req.params.id})

                        res.status(200).json({
                            status_code: 1,
                            message: "Got the clients successfuly",
                            data: {
                              client: docs,
                              courses: daily,
                              cafateria : cafateria,
                              membershipStatus : invMembership
                            },
                        });

                    }else {
                        res.status(404).json({
                            status_code: ApiErrorCode.notFound,
                            message: "Clinet not found",
                            data: null,
                            error : {
                                message : "Clinet not found"
                            }
                        });
                    }
                  })
                  .catch((error) => {
                    res.status(500).json({
                      status_code: ApiErrorCode.internalError,
                      message:
                        "There was an error when getting the client, please try again",
                      data: null,
                      error: {
                        message: error.message,
                      },
                    });
                  });
              }
        } catch (error) {
          res.status(500).json({
            status_code: ApiErrorCode.internalError,
            message: "There was a server internal error, please try again",
            data: null,
            error: {
              message: error.message,
            },
          });
        }
    }

    static async getInstructorInqueries (req, res) {
      try {
        {

          instractor.findById(req.params.id)
              .select("-__v")
              .then(async (docs) => {

                if(docs){

                    const daily = await Daily.find({instractorId : req.params.id})
                    .populate("clientId")
                      .populate("instractorId")
                      .populate("hourseId")

                    res.status(200).json({
                        status_code: 1,
                        message: "Got the instructor successfuly",
                        data: {
                          instructor: docs,
                          courses : daily,
                        },
                    });

                }else {
                    res.status(404).json({
                        status_code: ApiErrorCode.notFound,
                        message: "Clinet not found",
                        data: null,
                        error : {
                            message : "Clinet not found"
                        }
                    });
                }
                
               
              })
              .catch((error) => {
                res.status(500).json({
                  status_code: ApiErrorCode.internalError,
                  message:
                    "There was an error when getting the client, please try again",
                  data: null,
                  error: {
                    message: error.message,
                  },
                });
              });
          }
    } catch (error) {
      res.status(500).json({
        status_code: ApiErrorCode.internalError,
        message: "There was a server internal error, please try again",
        data: null,
        error: {
          message: error.message,
        },
      });
    }
    }

    static async getHourseInqueries (req, res) {
      try {
        {

          Hourse.findById(req.params.id)
              .select("-__v")
              .then(async (docs) => {

                if(docs){

                    const InvConsume = await invConsume.find({hourseId : req.params.id})
                    const daily = await Daily.find({hourseId : req.params.id})
                    .populate("clientId")
                      .populate("instractorId")
                      .populate("hourseId")

                    res.status(200).json({
                        status_code: 1,
                        message: "Got the hourse successfuly",
                        data: {
                          hourse: docs,
                          invConsume : InvConsume,
                          courses : daily
                        },
                    });

                }else {
                    res.status(404).json({
                        status_code: ApiErrorCode.notFound,
                        message: "hourse not found",
                        data: null,
                        error : {
                            message : "hourse not found"
                        }
                    });
                }
                
               
              })
              .catch((error) => {
                res.status(500).json({
                  status_code: ApiErrorCode.internalError,
                  message:
                    "There was an error when getting the client, please try again",
                  data: null,
                  error: {
                    message: error.message,
                  },
                });
              });
          }
    } catch (error) {
      res.status(500).json({
        status_code: ApiErrorCode.internalError,
        message: "There was a server internal error, please try again",
        data: null,
        error: {
          message: error.message,
        },
      });
    }
    }


}

module.exports = InqueryController;