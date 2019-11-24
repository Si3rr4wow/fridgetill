import { Meteor } from 'meteor/meteor'
import Items from '../collections/items'

Meteor.publish('items', selector => {
  console.log('sub', Items.find(selector))
  return Items.find(selector)
})
