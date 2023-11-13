"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const catchAsync = (fxn) => {
    return async (req, res, next) => {
        fxn(req, res, next).catch((err) => {
            if (err.name === "ValidationError") {
                return next(res.status(500).json({
                    status: "Server Error",
                    message: err.message.split(",")[0],
                }));
            }
            else {
                console.log('error', err);
                return next(err);
            }
        });
    };
};
exports.default = catchAsync;
