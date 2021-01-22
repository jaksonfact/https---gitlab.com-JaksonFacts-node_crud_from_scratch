
import * as mongoose from 'mongoose';

const Schema = mongoose.Schema;

export const studentSchema = new Schema({
    name: String,
    std: String

})

const studentModel = mongoose.model('student', studentSchema, 'student');
export default studentModel;
