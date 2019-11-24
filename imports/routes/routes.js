import convertCustomRouteConfig from './utils/convert-custom-route-config';

import Main from './main'
import Contents from './contents'
import Manage from './manage'

const routes = [
  Manage,
  Contents,
  Main
];

export default convertCustomRouteConfig(routes);
