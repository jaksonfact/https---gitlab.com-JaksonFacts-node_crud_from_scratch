import * as mongoose from 'mongoose';
import studentModel from '../models/studentModels';


export class studentDao {
    private student = studentModel;


    public student_search(studentData, callback) {
        this.student.find({ $and: [studentData] }).then((result) => {

            callback(result);
        }).catch((error) => {
            callback(error);
        });
    }

    public student_post(studentData, callback) {

        let temp = new studentModel(studentData);
        temp.save().then((result) => {

            callback(result);
        }).catch((error) => {
            callback(error);
        });
    }

    public student_delete(studentId, callback) {

        this.student.findByIdAndRemove(studentId).then((result) => {

            callback(result);
        }).catch((error) => {
            callback(error);
        });
    }
    public student_get(callback) {


        this.student.find().then((result) => {

            callback(result);
        }).catch((error) => {
            callback(error);
        });
    }
    public student_getNounById(studentId, callback) {

        this.student.findById(studentId).then((result) => {

            callback(result);
        }).catch((error) => {
            callback(error);
        });
    }
    
    public student_put(studentData, callback) {


        this.student.findOneAndUpdate({ _id: studentData._id }, studentData, { new: true }).then((result) => {
            callback(result);
        }).catch((error) => {
            callback(error);
        });
    }


}