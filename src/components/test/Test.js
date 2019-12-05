import React, { Component } from 'react'

class Test extends Component {
    state = {
        title: "",
        body:""
    }
    componentDidMount()
    {
        console.log("Component did mount");
         fetch('https://jsonplaceholder.typicode.com/todos/1')
             .then(response => response.json())
             .then(data => this.setState({
                 title: data.title,
                 body: data.body
             }))
    }
    UNSAFE_componentWillMount()
    {
        console.log("Component Will mount");
    }
    componentDidUpdate() {
        console.log("Component did Upadate");
    }
    render() {
        const {title,body}=this.state
        return (
            <div>
                <h1 className="display-4">Test Component</h1>                
                <h1 className="display-4">{title}</h1>
                <p className="lead">{body}</p>
            </div>
        )
    }
}
export default Test;
