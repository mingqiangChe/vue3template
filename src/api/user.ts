import request from './index';

export const getUserInfo = () => request.get('/user/info');
