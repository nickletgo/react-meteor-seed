import React, {Component} from 'react'
import {createContainer} from 'meteor/react-meteor-data'
import Comments from '../../../imports/collections/comments'

class CommentList extends Component{
    onBinRemove(comment){
        Meteor.call('comments.remove', comment)
    }

    getCommentList(){
        //Use this.props to retrieve the data passed from createContainer
        return this.props.comments.map((comment) => {
            return <li key={comment._id}>{comment.content}
                <button
                    onClick={() => this.onBinRemove(comment)}>
                    Remove
                </button>
            </li>
        })
    }
    
    render(){
        return (
            <ul>
                {this.getCommentList()}
            </ul>
        )
    }
}

//Use createContainer to pass meteor reactive data to React components
export default createContainer(() => {
    Meteor.subscribe('comments')
    return {'comments' : Comments.find({}).fetch()} 
}, CommentList)