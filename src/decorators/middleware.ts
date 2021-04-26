import Controller from '@controllers/controller';

const MiddlewareDecorator = (middleware) => {
  return function <T extends { new (...args: any[]): Controller }>(target) {
    return class extends target {
      constructor(...args) {
        super(...args);
        this.router.use(middleware);
      }
    };
  };
};

export default MiddlewareDecorator;
