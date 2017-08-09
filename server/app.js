import {port} from './config/appconfig';
import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import userRoutes from './routes/UserRoutes';
import commentsRoutes from './routes/CommentsRoutes';
import groupsRoutes from './routes/GroupRoutes';

const app = express();

app.use(bodyParser.json());
app.use(cors({origin: '*'}));

app.use('/users', userRoutes);
app.use('/comments', commentsRoutes);
app.use('/groups', groupsRoutes);

const server = app.listen(port, function () {
    console.log(`Server is up and running on port ${port}`);
});