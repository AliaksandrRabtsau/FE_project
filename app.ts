import * as express from 'express';
import * as bodyParser from 'body-parser';
import {dao} from './dao';
import {User} from './user';

export const app = express();

app.use(bodyParser.json());

app.get('/users', (req, res) => {
    dao.getUsersList()
        .then((data) => {res.status(200).end(JSON.stringify(data))})
        .catch(() => {res.status(404).end('Something gone wrong')});
});

app.get('/users/:id', function(req, res){
    dao.getUser(+req.params.id)
        .then((data) => { res.status(200).json(data)})
        .catch(() => {res.status(404).end('Something gone wrong')});
});

app.post('/users/add', (req, res) => {
    let reqItem: User = new User(req.body.name, req.body.password, req.body.dateOfBirth, req.body.dateOfFirstLogin, req.body.dateOfNextNotification, req.body.information);
    dao.addUser(reqItem)
        .then((data) => {res.status(201).json(data) })
        .catch(() => {res.status(404).end('Something gone wrong')});
});

app.put('/users/:id', (req, res) => {
    let reqItem: User = new User(req.body.name, req.body.password, req.body.dateOfBirth, req.body.dateOfFirstLogin, req.body.dateOfNextNotification, req.body.information);
    reqItem.id = +req.params.id;
    dao.updateUser(reqItem)
        .then((data) => {res.status(201).json(data) })
        .catch(() => {res.status(404).end('Something gone wrong')});
});

app.delete('/users/:id', (req, res) => {
    dao.deleteUser(+req.params.id)
        .then((data) => {res.status(201).json(data) })
        .catch(() => {res.status(404).end('Something gone wrong')});
});


const port = 8000;
app.listen(port, () => console.log(`App listening on port ${port}!`));