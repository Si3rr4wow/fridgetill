import withLayout from '/imports/utils/with-layout';

import MainLayout from '/imports/ui/layouts/main'
import Contents from '/imports/ui/pages/contents'

export default {
  name: 'contents',
  path: '/contents',
  component: withLayout(MainLayout)(Contents)
};
