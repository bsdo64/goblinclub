import bunyan from 'bunyan';

class Log {
  constructor() {
    this.AppLog = bunyan.createLogger({
      name: "AppLog",
      streams: [
        { stream: process.stdout }
      ],
      serializers: bunyan.stdSerializers
    });
  }
}
export default new Log();
