import mongoose from 'mongoose'

const classschema = new mongoose.Schema(
    {
        firstname: { type: String },
        lastname: { type: String },
        gender: [{ type: String }],
        dateofbirth: { type: Date },
        classroom: { type: String }
    }, {
    collection: "classroommodel"
}
)
export const classroommodel = mongoose.model("classroommodel", classschema)