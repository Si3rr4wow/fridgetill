import convertCustomRouteConfig from './utils/convert-custom-route-config';

import Main from './main'
import Contents from './contents'

const routes = [
  Contents,
  Main
];

export default convertCustomRouteConfig(routes);
