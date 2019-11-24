import { Meteor } from 'meteor/meteor'
import { useTracker } from 'meteor/react-meteor-data';

import Items from '/imports/api/mongo/meteor/collections/items';

const itemsSub = selector => {
  const itemsLoading = useTracker(() => {
    const handle = Meteor.subscribe('items', selector);

    return !handle.ready();
  });

  const items = useTracker(() => (
    Items.find(selector).fetch()
  ));

  return { itemsLoading, items }
}

export default itemsSub;
