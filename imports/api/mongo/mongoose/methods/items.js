import { Meteor } from 'meteor/meteor'
import Item from '../models/items'

import errorCodes from '../error-codes'

Meteor.methods({
  async 'items.create'(params)  {
    const item = new Item(params)
    console.log('PARAMS', params)
    item.save((err) => {
      if(err) { throw new Meteor.Error(errorCodes.save, 'Item not created', err) }
    })
  }
})
