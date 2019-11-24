import { Meteor } from 'meteor/meteor'

export const createItem = params => (
  new Promise((resolve, reject) => {
    Meteor.call('items.create', params, (err, res) => {
      err ? reject(err) : resolve(res)
    })
  })
)
