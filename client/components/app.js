import React, {Component} from 'react'
import Header from './header'
import CommentMain from './comments/comment_main'

class App extends Component{
    render(){
        return (
            <div>
                <Header />
                <CommentMain />
            </div>
        ) 
    }
}

export default App