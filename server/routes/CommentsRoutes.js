import express from 'express';
import * as repository from '../repositories/CommentsRepository';
const router = express.Router();

router.get('/index', (req, res) => {
    repository.listComments().then(data=>res.send(data));
});

router.post('/create', (req, res) => {
    repository.createComment(req.body).then((rData)=>res.send(rData));
});
router.delete('/delete/:id', (req, res) => {
    repository.deleteComment(req.params.id).then(data => res.send(data));
});

export default router;