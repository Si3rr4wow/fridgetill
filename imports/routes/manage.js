import withLayout from '/imports/utils/with-layout';

import MainLayout from '/imports/ui/layouts/main'
import Manage from '/imports/ui/pages/manage'

export default {
  name: 'manage',
  path: '/manage',
  component: withLayout(MainLayout)(Manage)
};
