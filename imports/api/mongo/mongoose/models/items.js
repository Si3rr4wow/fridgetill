import mongoose, { Schema } from 'mongoose'
import mongoosastic from 'mongoosastic'
import esClient from '/imports/api/elasticsearch/elasticsearch';

const schema = new Schema({
  name: String,
  tags: Array,
  quantity: Number
}, {
  timestamps: true,
  toObject: {
    getters: true
  }
})

schema.plugin(mongoosastic, {
  forceIndexRefresh: true,
  esClient
});

const Item = mongoose.model('Item', schema, 'items');
export default Item;
