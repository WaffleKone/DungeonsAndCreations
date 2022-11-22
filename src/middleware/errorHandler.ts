import type { ErrorRequestHandler } from 'express';
import logger from '../services/logger';

const errorHandler: ErrorRequestHandler = (error, req, res, next) => {
  if (error.isOperational) {
    logger.debug(req, req.body);
    logger.error(error.stack);
    res.status(error.httpCode).json({
      description: error.description,
      message: error.message,
      status: error.httpCode,
    });
    next();
  } else {
    logger.debug(error);
    logger.fatal('Fatal Error: Stopping application.');
    res.status(500).send('Something went terribly wrong!');
    process.exit(1);
  }
};

export default errorHandler