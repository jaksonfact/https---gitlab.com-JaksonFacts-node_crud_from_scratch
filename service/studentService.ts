import { Request, Response } from 'express';
import { studentDao } from '../dao/studentDao';
let student = new studentDao();
//const students = new studentDao();
export class studentService {

    constructor() { }

    public student_search(req: Request, callback) {

        const studentData = req.query;
        student.student_search(studentData, (response) => {

            callback(response);
        });
    }
    public student_delete(req: Request, callback) {

        const studentId = req.params.id;
        student.student_delete(studentId, (response) => {

            callback(response);
        });
    }
    public student_get(req: Request, callback) {


        student.student_get((response) => {

            callback(response);
        });
    }
    public student_getNounById(req: Request, callback) {

        const studentId = req.params.id;
        student.student_getNounById(studentId, (response) => {

            callback(response);
        });
    }
    public student_post(req: Request, callback) {

        const studentData = req.body;
        student.student_post(studentData, (response) => {

            callback(response);
        });
    }
    public student_put(req: Request, callback) {

        const studentData = req.body;
        student.student_put(studentData, (response) => {

            callback(response);
        });
    }


}