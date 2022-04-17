import { Response, Request, Router } from "express";
import { classroommodel } from "./classmoedel";

const router = Router()

router.get('/shows',
    async (req: Request, res: Response) => {
        try {
            const id = req.query.id
            const peple = await classroommodel.find({})

            res.send(peple)
        } catch (error) {
            res.send("error")
            console.log(error);


        }
    }
)
export { router as showuser }