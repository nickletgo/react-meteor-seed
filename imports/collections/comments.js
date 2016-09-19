import { Mongo } from 'meteor/mongo'
import {check} from 'meteor/check'

Meteor.methods({
    //Can not use ()=>{} function declaration here
    //Since it will not bind to 'this'
    'comments.insert' : function(content){
        check(content, String)
        console.log('adding a new comment')
        return Comments.insert(
            {
                content: content
            }
        )
    },

    'comments.remove' : function(comment){
        check(comment, Object)
        return Comments.remove(comment)
    }
})

export default Comments = new Mongo.Collection('Comments')