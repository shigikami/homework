import { Response, Request, Router } from "express";
import { classroommodel } from "./classmoedel";

const router = Router()

router.delete('/delate',
    async (req: Request, res: Response) => {
        try {
            const id = req.body.id
            const peple = await classroommodel.deleteOne({ _id: id })
            console.log(peple);

            res.send("delate succes")
        } catch (error) {
            res.send("error")
            console.log(error);


        }
    }
)
export { router as delate }