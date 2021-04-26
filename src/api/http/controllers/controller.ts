import * as Router from 'koa-router';

class Controller {
  router: Router;

  constructor(path = '') {
    this.router = new Router({
      prefix: path,
    });
  }

  setEndpoints(endpoints: any[]) {
    endpoints.forEach((endpoint) => this.addEndpoint(endpoint));
  }

  addEndpoint(endpoint) {
    const [method, path, ...middlewares] = endpoint();
    this.router[method](path, ...middlewares);
  }
}

export default Controller;
