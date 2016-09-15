import React, {Component} from 'react'

class CommentList extends Component{
    getCommentList(){
        const comments = [
            '1st comment',
            '2nd comment',
            '3rd comment'
        ]

        return comments.map((comment) => {
            return <li key={comment}>{comment}</li>
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

export default CommentList