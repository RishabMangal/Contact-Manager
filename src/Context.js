import React, { Component } from 'react'
import axios from 'axios';
const Context = React.createContext();

const reducer = (state, action) => {
    // eslint-disable-next-line default-case
    switch (action.type)
    {
        case 'DELETE_CONTACT':
            return {
                ...state,
                contacts: state.contacts.filter(contact => contact.id !== action.payload)
            };
        case 'ADD_CONTACT':
            return {
                ...state,
                contacts:[action.payload,...state.contacts]
            }
        case 'UPDATE_CONTACT':
            return {
                ...state,
                contacts: state.contacts.map(contact=>contact.id===action.payload.id ? (contact=action.payload) : contact)
            }
        default:
            console.log(action.type + " Default is running " + action.payload)
            return state;
    }
}
export class Provider extends Component {
    state = {
        contacts: [
        {
            id: "1",
            name: "Rishab Mangal",
            email: "rishabhmangal1@gmail.com",
            phone: "9928799243"
        },
        {
            id: "2",
            name: "Aman Mangal",
            email: "amanmangal2@gmail.com",
            phone: "99264698456"
        },
        {
            id: "3",
            name: "Akash Mangal",
            email: "Akashmangal3@gmail.com",
            phone: "9651659823"
        },
        ],
        dispatch: action => {
            this.setState(state => reducer(state, action))
        }
    };
    async componentDidMount() {
        // axios.get("https://jsonplaceholder.typicode.com/users").then(res => this.setState({ ...this.state,contacts:[res.data,...this.state.contacts] }));
        const res = await axios.get("https://jsonplaceholder.typicode.com/users");
        this.setState({contacts:res.data})
    }
    // componentDidMount() {
    //     // axios.get("https://jsonplaceholder.typicode.com/users").then(res => this.setState({ ...this.state,contacts:[res.data,...this.state.contacts] }));
    //     axios.get("https://jsonplaceholder.typicode.com/users").then(res => this.setState({ contacts:res.data }));
    // }
    // UNSAFE_componentDidUpdate() {
    //      console.log("Component did Upadate");
    // }
    
    //  UNSAFE_componentWillUpdate() {
    //      console.log("Component Will Upadate");
    // }
    // UNSAFE_componentWillReceiveProps()
    // {
    //     console.log("Hello")
    // }
    

    render() {
        return (
            <Context.Provider value={this.state}>
                {this.props.children}
            </Context.Provider>
        )
    }
}

export const Consumer = Context.Consumer;
