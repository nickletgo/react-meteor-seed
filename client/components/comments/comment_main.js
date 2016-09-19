import React, { Component } from 'react'
import CommentList from './comment_list'
import CommentCreate from './comment_create'

class CommentMain extends Component {
    render(){
        return (
            <div>
                <CommentCreate />
                <CommentList />
            </div>
        )
    }
}

export default CommentMain