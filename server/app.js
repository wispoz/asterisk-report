import {port} from './config/appconfig';
import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import fileUpload from 'express-fileupload';
import userRoutes from './routes/UserRoutes';
import commentsRoutes from './routes/CommentsRoutes';
import groupsRoutes from './routes/GroupRoutes';
import connectorsRoutes from './routes/ConnectorsRoutes';

const app = express();

app.use(bodyParser.json());
app.use(fileUpload());
app.use(cors({origin: '*'}));

app.use('/users', userRoutes);
app.use('/comments', commentsRoutes);
app.use('/groups', groupsRoutes);
app.use('/connectors', connectorsRoutes);

const server = app.listen(port, function () {
    console.log(`Server is up and running on port ${port}`);
});