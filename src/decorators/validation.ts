const ValidationDecorator = (validation) => {
  return (target: any, propertyKey: string, descriptor: PropertyDescriptor) => {
    const method = descriptor.value;
    descriptor.value = async (data, ...args) => {
      await validation(data);

      return await method.apply(target, [data, ...args]);
    };
  };
};

export default ValidationDecorator;
