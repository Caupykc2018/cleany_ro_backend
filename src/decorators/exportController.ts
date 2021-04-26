import * as Router from 'koa-router';
import Controller from '@controllers/controller';

const ExportControllerDecorator = (controller: Controller) => {
  return function <T extends { new (...args: any[]): Controller }>(target: T) {
    return class extends target {
      constructor(...args) {
        super(...args);
        this.router.use(controller.router.routes());
      }
    };
  };
};

export default ExportControllerDecorator;
