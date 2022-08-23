import { createLogger, transports, format } from 'winston';
const { combine, timestamp, json } = format;

const loggerTest = createLogger({
  transports: [
    new transports.File({
      filename: 'combined.log',
      level: 'info',
      format: combine(timestamp(), json())
    }),
    new transports.File({
      filename: 'errors.log',
      level: 'error',
      format: combine(timestamp(), json())
    })
  ]
});

export default loggerTest;
