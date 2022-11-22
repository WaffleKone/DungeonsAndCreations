import {Router, Request, Response} from 'express'
// import users from './users'
const api = Router();

api.get('/', (req: Request, res: Response) => {
  res.send('API route GET endpoint :) <3 lots of love!');
});

// api.use('/users', users);

export default api
