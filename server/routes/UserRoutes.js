import express from 'express';
import * as repository from '../repositories/UserRepository';
const router = express.Router();

router.get('/index', (req, res) => {
    repository.listUsers().then(data=>res.send(data));
});

router.post('/create', (req, res) => {
    repository.createUser(req.body).then((rData)=>res.send(rData));
});
router.delete('/delete/:id', (req, res) => {
    repository.deleteUser(req.params.id).then(data => res.send(data));
});

export default router;