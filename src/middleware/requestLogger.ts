import { RequestHandler } from 'express';
import logger from '../services/logger';

const requestLogger: RequestHandler = (req, _res, next) => {
  logger.debug(req);
  next();
};

export default requestLogger