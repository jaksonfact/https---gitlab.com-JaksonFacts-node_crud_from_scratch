import { Request, Response } from 'express';
import { studentService } from '../service/studentService';
let student = new studentService();


export class studentController {

    constructor() { }

    public student_search(req: Request, res: Response) {
        student.student_search(req, (response) => {
            res.status(200);
            res.json(response);
        })
    }

    public student_post(req: Request, res: Response) {
        student.student_post(req, (response) => {

            res.status(200);
            res.json(response);

        })
    }


    public student_delete(req: Request, res: Response) {
        student.student_delete(req, (response) => {
            res.status(200);
            res.json(response);
        })
    }

    public student_get(req: Request, res: Response) {
        student.student_get(req, (response) => {

            res.status(200);
            res.json(response);

        })
    }

    public student_getNounById(req: Request, res: Response) {
        student.student_getNounById(req, (response) => {

            res.status(200);
            res.json(response);

        })
    }

   
    public student_put(req: Request, res: Response) {
        student.student_put(req, (response) => {

            res.status(200);
            res.json(response);

        })
    }


}