function errorHandler(error, req, res, next){
    return res.status(error.status || 500).json({
        error: {
            message: error.message || "Something went wrong"
        }
    })
}

//generic function that responds with status of the errror

module.exports = errorHandler;