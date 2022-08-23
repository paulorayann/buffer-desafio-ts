import { createLogger, transports, format } from 'winston';
const { combine, timestamp, printf } = format;

const Format = printf(({ level, message, timestamp }) => {
  return `${timestamp} , [${level}] , ${message}`;
});

const loggerTest = createLogger({
  transports: [
    new transports.File({
      filename: 'client.log',
      level: 'info',
      format: combine(timestamp(), Format)
    }),

    new transports.File({
      filename: 'client-error.log',
      level: 'error',
      format: combine(timestamp(), Format)
    })
  ]
});

export default loggerTest;
