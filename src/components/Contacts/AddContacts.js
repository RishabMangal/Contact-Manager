import React, { Component } from 'react'
import { Consumer } from '../../Context'
import TextInputGroup from '../layout/TextInputGroup'
// import uuid from 'uuid';
import axios from 'axios';
// import Contacts from './Contacts';
class AddContacts extends Component {
    state = {
        name: "",
        email: "",
        phone: "",
        error:{}
    }
    onChange = e => this.setState({ [e.target.name]: e.target.value });
    onSubmit = async (dispatch,e) => {
        e.preventDefault();
        const { name, email, phone } = this.state

        if (name === "")
        {
            this.setState({ error: { name: "Ohh So Sorry You Don't have a Name" } });
            return;
        }
        if (email === "")
        {
            this.setState({ error: { email: "Go Get an Email First" } });
            return;
        }
        if (phone === "")
        {
            this.setState({ error: { phone: "Com'on have a phone atleast" } });
            return;
        }

        const newcontact = {
            // id:uuid(),
            name,
            email,
            phone
        }
        const res=await axios.post(`https://jsonplaceholder.typicode.com/users`, newcontact)
        dispatch({
            type: "ADD_CONTACT",
            payload: res.data
        })

        
        console.log("State is "+this.state)
        console.log("newContact is ")
        console.log(newcontact)
        this.setState({
            name: "",
            phone: "",
            email: "",
            error: {}
        });
        this.props.history.push("/");

    }
    // onSubmit = (dispatch,e) => {
    //     e.preventDefault();
    //     const { name, email, phone } = this.state

    //     if (name === "")
    //     {
    //         this.setState({ error: { name: "Ohh So Sorry You Don't have a Name" } });
    //         return;
    //     }
    //     if (email === "")
    //     {
    //         this.setState({ error: { email: "Go Get an Email First" } });
    //         return;
    //     }
    //     if (phone === "")
    //     {
    //         this.setState({ error: { phone: "Com'on have a phone atleast" } });
    //         return;
    //     }

    //     const newcontact = {
    //         // id:uuid(),
    //         name,
    //         email,
    //         phone
    //     }
    //     axios.post(`https://jsonplaceholder.typicode.com/users`, newcontact)
    //     .then(res=>dispatch({type:"ADD_CONTACT",payload:res.data}))

        
    //     console.log("State is "+this.state)
    //     console.log("newContact is ")
    //     console.log(newcontact)
    //     this.setState({
    //         name: "",
    //         phone: "",
    //         email: "",
    //         error: {}
    //     });
    //     this.props.history.push("/");

    // }
    render() {
        const { name,email,phone,error} = this.state;
        return (
            <Consumer>
                {value => {
                    const { dispatch } = value
                    return (
                         <div className="card mb-3">
                <div className="card-header">Add Contact</div>
                <div className="card-body">
                        <form onSubmit={this.onSubmit.bind(this, dispatch)}>
                                    <TextInputGroup
                                        name="name"
                                        label="Name"
                                        placeholder="Enter Name.."
                                        value={name}
                                        onChange={this.onChange}
                                        type="text"
                                        error={error.name}
                                    ></TextInputGroup>            
                                    <TextInputGroup
                                        name="email"
                                        label="Email"
                                        placeholder="Enter Email.."
                                        value={email}
                                        onChange={this.onChange}
                                        type="email"
                                        error={error.email}
                                    ></TextInputGroup>            
                                    <TextInputGroup
                                        name="phone"
                                        label="Phone"
                                        placeholder="Enter Phone.."
                                        value={phone}
                                        onChange={this.onChange}
                                        type="text"
                                        error={error.phone}
                                    ></TextInputGroup>            
                        {/* <div className="form-group">
                            <label htmlFor="name">Name</label>
                            <input type="text"
                                name="name"
                                placeholder="Enter Name..."
                                className="form-control form-control-lg"
                                value={this.state.name}
                                onChange={this.onChange}
                            ></input>
                        </div> */}
                        {/* <div className="form-group">
                            <label htmlFor="email">Email</label>
                            <input type="email"
                                name="email"
                                placeholder="Enter Email..."
                                className="form-control form-control-lg"
                                value={this.state.email}
                                onChange={this.onChange} 
                            ></input>
                        </div>
                        <div className="form-group">
                            <label htmlFor="phone">Phone</label>
                            <input type="phone"
                                name="phone"
                                placeholder="Enter Phone..."
                                className="form-control form-control-lg"
                                value={this.state.phone}
                                onChange={this.onChange}
                            ></input>
                        </div> */}
                        <input type="submit" value="Add Contact" className="btn btn-block btn-primary" ></input>
                    </form>
                </div>
            </div>
                    )
                }}
            </Consumer>
        )
        // return (
        //     <div className="card mb-3">
        //         <div className="card-header">Add Contact</div>
        //         <div className="card-body">
        //             <form onSubmit={this.onSubmit}>
        //                 <div className="form-group">
        //                     <label htmlFor="name">Name</label>
        //                     <input type="text"
        //                         name="name"
        //                         placeholder="Enter Name..."
        //                         className="form-control form-control-lg"
        //                         value={this.state.name}
        //                         onChange={this.onChange}
        //                     ></input>
        //                 </div>
        //                 <div className="form-group">
        //                     <label htmlFor="email">Email</label>
        //                     <input type="email"
        //                         name="email"
        //                         placeholder="Enter Email..."
        //                         className="form-control form-control-lg"
        //                         value={this.state.email}
        //                         onChange={this.onChange} 
        //                     ></input>
        //                 </div>
        //                 <div className="form-group">
        //                     <label htmlFor="phone">Phone</label>
        //                     <input type="phone"
        //                         name="phone"
        //                         placeholder="Enter Phone..."
        //                         className="form-control form-control-lg"
        //                         value={this.state.phone}
        //                         onChange={this.onChange}
        //                     ></input>
        //                 </div>
        //                 <input type="submit" value="Add Contact" className="btn btn-block btn-primary" ></input>
        //             </form>
        //         </div>
        //     </div>
        // )
    }
}

export default AddContacts;