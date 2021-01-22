//import { isExpressionStatement } from "typescript";
import { Request, Response, NextFunction } from "express";
import { studentController } from '../controller/studentController'; // it's connect to controller

export class student {
    private student: studentController = new studentController();
    
   public routes(app): void {
          app.route('/health/entity-service').get((req: Request, res: Response) => {
            res.status(200).send({
                status: 'up'
            })
        })

        // paths are fix here...,

app.route('/student/search').get(this.student.student_search); //to get a students details
app.route('/student/:id').delete(this.student.student_delete); //to delete a students
app.route('/student').get(this.student.student_get); //to get all the students
app.route('/student/:id').get(this.student.student_getNounById); //to get student by id
app.route('/student').post(this.student.student_post); //to add a new student
app.route('/student').put(this.student.student_put); //to update a student
    }
}