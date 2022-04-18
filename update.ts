import { Router, Request, Response } from "express";
import { classroommodel } from "./classmoedel";
const router = Router()

router.patch(
    '/update',
    async (req: Request, res: Response) => {
        try {
            const update = req.body


            const result = await classroommodel.findOneAndUpdate({ _id: update._id }, update);
            console.log(result);

            res.send(update)

        } catch (error) {
            res.send("error")

        }

    }
)
export { router as updateApi }