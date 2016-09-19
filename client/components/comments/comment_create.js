import React, { Component } from 'react'

class CommentCreate extends Component{
    constructor(){
        super()
        this.state = {content: 'Write your comment here...'}
    }

    handleChange(event) {
        this.setState({content : event.target.value })
    }

    addComment(event){
        event.preventDefault()
        Meteor.call('comments.insert', this.refs.commentContent.value)
    }

    render(){
        return (
            <form>
                <textarea ref="commentContent" type="text" defaultValue={this.state.content} onChange={this.handleChange.bind(this)}   />
                <button onClick={this.addComment.bind(this)}>
                    Submit
                </button>
            </form>
        )
    }
}

export default CommentCreate