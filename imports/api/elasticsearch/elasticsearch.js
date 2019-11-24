import { Meteor } from 'meteor/meteor';
import { Client } from '@elastic/elasticsearch';

const { node, auth } = Meteor.settings.elasticsearch || {};

const client = new Client({
  node: node || 'http://localhost:9200',
  auth
});

export default client;
