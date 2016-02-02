/**
 * Created by dobyeongsu on 2016. 1. 11..
 */
import Log from '../lib/Log';
const AppLog = Log.AppLog;

export default function Logger(req, res, next) {
  // Request Logger
  AppLog.info('%s %s %s %s %s', req.method, req.url, req.ip, req.hostname, req.get('User-Agent'));
  next();
};

export function errorLogger(err, req, res, next) {
  AppLog.error({ req: req, res: res, error: err }, err.stack);
  next(err);
}
