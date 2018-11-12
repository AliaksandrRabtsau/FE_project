import * as express from 'express';
import * as bodyParser from 'body-parser';
import * as jwt from 'jsonwebtoken';
import * as cookieParser from 'cookie-parser';
import * as cors from 'cors';
import {dao} from './dao';
import {User} from './user';

export const app = express();

app.use(cors({
  credentials: true,
  origin: 'http://localhost:4200'
}));
app.use(cookieParser());

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));

app.use(loadingDelay);

function loadingDelay(req: express.Request, res: express.Response, next: express.NextFunction) {
  setTimeout(function() {
    next();
  }, 3000);
}

app.get('/users', (req, res) => {
  dao.getUsersList()
    .then((data) => {
      res.status(200).end(JSON.stringify(data));
    })
    .catch(() => {
      res.status(404).end('Something gone wrong');
    });
});

app.get('/users/:id', function (req, res) {
  dao.getUser(+req.params.id)
    .then((data) => {
      res.status(200).json(data);
    })
    .catch(() => {
      res.status(404).end('Something gone wrong');
    });
});

app.get('/recover-pass', function (req, res) {
  dao.getUserByName(req.query.name)
    .then((data) => {
      res.status(200).json(data);
    })
    .catch((err) => {
      res.status(404).send(err);
    });
});

app.post('/users/add', (req, res) => {
  const { name, password, age, dateOfBirth, dateOfFirstLogin, dateOfNextNotification, information, admin} = req.body;
  const user: User = {id: 0, name, password, age, dateOfBirth, dateOfFirstLogin, dateOfNextNotification, information, admin};
  dao.addUser(user)
    .then((data) => {
      res.status(201).json(data);
    })
    .catch(() => {
      res.status(404).end('Something gone wrong');
    });
});

app.post('/login', (req, res) => {
  const nameApp = req.body.name;
  const passApp = req.body.password;
  dao.loginUser(nameApp, passApp)
    .then((data) => {
      res.status(200).cookie('jwtoken', data, {httpOnly: true, secure: false}).send();
    })
    .catch(() => {
      res.status(404).end('Something gone wrong');
    });
});

export interface jwebtoken {
  exp: number;
  sub: string;
}

app.get('/auth-check', (req, res) => {
  const { jwtoken } = req.cookies;
  dao.authCheck(jwtoken)
    .then((data) => {
      res.status(200).json(data);
    })
    .catch(() => {
      res.status(401).end('unauthorized');
    });
});

app.get('/current-user', (req, res) => {
  const {jwtoken} = req.cookies;
  dao.currentUser(jwtoken)
    .then((data) => {
      res.status(200).json(data);
    })
    .catch(() => {
      res.status(401).end('unauthorized');
    });
});

app.put('/update-user', (req, res) => {
  const {jwtoken} = req.cookies;
  const jWebToken = jwt.decode(jwtoken) as jwebtoken;
  dao.updateUser(Object.assign({}, { id: +jWebToken.sub }, req.body))
    .then((data) => {
      res.status(201).json(data);
    })
    .catch(() => {
      res.status(404).end('Something gone wrong');
    });
});

app.delete('/users/:id', (req, res) => {
  dao.deleteUser(+req.params.id)
    .then((data) => {
      res.status(201).json(data)
    })
    .catch(() => {
      res.status(404).end('Something gone wrong');
    });
});

app.post('/logout', (req, res) => {
  res.clearCookie('jwtoken').send();
});

const port = 8000;
app.listen(port, () => console.log(`App listening on port ${port}!`));
