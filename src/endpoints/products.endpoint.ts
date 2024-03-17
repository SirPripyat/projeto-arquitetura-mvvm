const baseProductEndpoint = '/products';

export const productEndpoint = {
  getAll: baseProductEndpoint + '/readAll',
  getById: baseProductEndpoint + '/read',
  create: baseProductEndpoint + '/create',
  update: baseProductEndpoint + '/update',
  delete: baseProductEndpoint + '/delete',
};
