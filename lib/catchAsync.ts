import { Request, Response, NextFunction } from "express"

const catchAsync = (fxn: (...args: any[]) => Promise<any>) => {
    return async (req: Request, res: Response, next: NextFunction) => {
        fxn(req, res, next).catch((err) => {
            if(err.name === "ValidationError") {
                return next(res.status(500).json({
                    status: "Server Error",
                    message: err.message.split(",")[0],
                }))
            } else {
                console.log('error', err)
                return next(err)
            }
        })
    }
}

export default catchAsync;