import { asyncFuncCreator } from '../utils';

export function index(key, id) {
  return asyncFuncCreator({
    constant: 'WFCONFIG_INDEX',
    promise: (client) => client.request({ url: '/project/' + key + '/workflow/' + id + '/steps' })
  });
}

export function createStep(values) {
  return { type: 'WFCONFIG_STEP_CREATE', values: values };
}

export function editStep(values) {
  return { type: 'WFCONFIG_STEP_EDIT', values: values };
}

export function delStep(id) {
  return { type: 'WFCONFIG_STEP_DELETE', id: id };
}
