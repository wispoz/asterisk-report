import express from 'express';
import * as repository from '../repositories/ConnectorsRepository';

const router = express.Router();

router.get('/index', (req, res) => {
    repository.listConnectors().then(data => res.send(data));
});

router.post('/create', (req, res) => {
    repository.createConnector(req.body).then((rData) => res.send(rData));
});
router.post('/check', (req, res) => {
    repository.checkConnection(req.body).then(() => {
        res.send({success: true, message: 'Соединение установлено'});
    })
        .catch(err => {
            res.send({success: false, error: err, message: 'Ошибка соединения'});
        });
});
router.delete('/delete/:id', (req, res) => {
    repository.deleteConnector(req.params.id).then(data => res.send(data));
});

export default router;