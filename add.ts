import { Router, Request, Response } from "express";
import { classroommodel } from "./classmoedel";

const router = Router()

router.get(
    '/adduser',
    async (req: Request, res: Response) => {
        try {
            const { firstname, lastname, gender, dateofbirth, clsaaroom } = req.body
            await classroommodel.create({
                firstname, lastname, gender, dateofbirth, clsaaroom
            })
            res.send(req.body)
        } catch (error) {
            res.send(error)

        }
    }
)
export {router as adduser}