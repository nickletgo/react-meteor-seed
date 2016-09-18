import { Mongo } from 'meteor/mongo'

Meteor.method({
    //Can not use ()=>{} function declaration here
    //Since it will not bind to 'this'
    'comments.insert' : function(content){
        console.log('adding a new comment')
        return Comment.insert(
            {
                content: content
            }
        )
    },

    'comments.remove' : function(comment){
        return Comments.removed(comment)
    }
})

export const Comments = new Mongo.Collections('Comments')