/**
 * Created by PhpStorm.
 * User: wispoz
 * Date: 09.08.17
 * Time: 15:53
 */
import express from 'express';
import * as repository from '../repositories/GroupRepository';
const router = express.Router();

router.get('/index', (req, res) => {
    repository.listGroups().then(data=>res.send(data));
});

router.post('/create', (req, res) => {
    repository.createGroup(req.body).then((rData)=>res.send(rData));
});
router.delete('/delete/:id', (req, res) => {
    repository.deleteGroup(req.params.id).then(data => res.send(data));
});

export default router;