import * as express from 'express';
import * as bodyParser from 'body-parser';
import { student } from './routes/studentRoutes';
import * as mongoose from 'mongoose';
import * as cors from 'cors';

const PORT = 8060;
class App {

    public app: express.Application = express();
    public route: student = new student();
    public mongoUrl: string = "mongodb://localhost:27018";

    constructor() { 
        this.initializeMiddlewares();
        this.mongoSetup();
        this.route.routes(this.app);
    }

    private initializeMiddlewares() {
        this.app.use(bodyParser.json());
        this.app.use(bodyParser.urlencoded({ extended: false }));
        this.app.use(cors({ credentials: true, origin: true }))
    }

    private mongoSetup(): void {
       (<any>mongoose).Promise = global.Promise;
        mongoose.connect(this.mongoUrl, { useNewUrlParser: true, useUnifiedTopology: true });
    }

}

new App().app.listen(PORT, () => {
    console.log('Express server listening on port  ' + PORT);
})


