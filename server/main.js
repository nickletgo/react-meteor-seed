import { Meteor } from 'meteor/meteor'
import Comments from '../imports/collections/comments'

Meteor.startup(() => {
    Meteor.publish('comments', ()=>{
        return Comments.find({})
    })
})
