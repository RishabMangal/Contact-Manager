import React, { Component } from 'react'
import PropTypes from 'prop-types';
import { Consumer } from '../../Context'
import axios from 'axios';
import { Link } from 'react-router-dom';
// import './Contact.css'
class Contact extends Component {
    static propTypes = {
        contact: PropTypes.object.isRequired,
        // deleteFunction:PropTypes.func.isRequired
        // deleteContact:PropTypes.func.isRequired

        // name: PropTypes.string.isRequired,
        // email: PropTypes.string.isRequired,
        // phone: PropTypes.string.isRequired
    };
    state = {
        showInfo: false,
        showArrow: true
    }
    // onClickDown() {
    //     console.log(this.state);   Binding Will Be Reqiured For This Type of function 
    // }                              But For Arrow Function no binding required
    onClickDown = (e) => {
        // this.state = {
        //     showInfo:false    WRONG BECAUSE STATE IS UNMUTABLE
        // }
        // this.setState({showInfo:false})   INSTEAD OF MAKING IT PERMANENT MAKE IT TOGGLE
        this.setState({showInfo:!(this.state.showInfo), showArrow:!(this.state.showArrow)})
    }
    onDeleteClick = async (id, dispatch) => {
        // this.props.deleteContact();
        await axios.delete(`https://jsonplaceholder.typicode.com/users/${id}`)
        dispatch({
            type: 'DELETE_CONTACT',
            payload: id
        });

    // onDeleteClick = (id, dispatch) => {
    //     // this.props.deleteContact();
    //     axios.delete(`https://jsonplaceholder.typicode.com/users/${id}`)
    //     .then(res=> { dispatch({
    //         type: 'DELETE_CONTACT',
    //         payload: id
    //     })})




        console.log("You Deleted me "+id);
        // dispatch({
        //     type: 'DELETE_CONTACT',
        //     payload: id
        // });
        // this.props.deleteFunction();
    };
    // onClickDown = (name,e) => {
    //     console.log(name);
    // }
    render() {
        const { id,name, email, phone } = this.props.contact;
        const { showInfo } = this.state;
        // const { contact } = this.props;
        return (
            <Consumer>
                {value => {
                    const { dispatch } = value;
                    return (
                        < div className="card card-body-mb-4 p-3" >
                            {/* <h5>{this.props.name}</h5> */}
                            {/* <h4>{name}<i onClick={this.onClickDown.bind(this)} className="fas fa-sort-down" aria-hidden="true"></i></h4> */}
                            {/* <h4>{name}<i onClick={this.onClickDown.bind(this,name)} className="fas fa-sort-down" aria-hidden="true"></i></h4> */}
                            <h4>{name}{' '}{this.state.showArrow ? (<i onClick={this.onClickDown} className="fas fa-sort-down px-2" aria-hidden="true" style={{ cursor: "pointer" }}></i>) : (<i onClick={this.onClickDown} className="fas fa-sort-up" aria-hidden="true" style={{ cursor: "pointer", color: "red" }}></i>)}
                                <i className="fas fa-times" aria-hidden="true" style={{ color: "red", float: "right", cursor: "pointer" }} onClick={this.onDeleteClick.bind(this, id, dispatch)}></i>
                               <Link to={`edit/${id}`} ><i className="fas fa-pencil-alt px-3" style={{float:"right"}}></i></Link>

                            </h4>
                            {/* <h4>{contact.name}</h4> */}
                            {showInfo ? (<ul className="list-group">
                                {/* <li>Email: {this.props.email}</li> */}
                                <li className="list-group-item">Email: {email}</li>
                                {/* <li className="list-group-item">Email: {contact.email}</li> */}
                                {/* <li>Phone no: {this.props.phone}</li> */}
                                <li className="list-group-item">Phone no: {phone}</li>
                                {/* <li className="list-group-item">Phone no: {contact.phone}</li> */}
                            </ul>) :null} 
                        </div>
                    );
                }}
            </Consumer>
            // < div className = "card card-body-mb-3" >
            //     {/* <h5>{this.props.name}</h5> */}
            //     {/* <h4>{name}<i onClick={this.onClickDown.bind(this)} className="fas fa-sort-down" aria-hidden="true"></i></h4> */}
            //     {/* <h4>{name}<i onClick={this.onClickDown.bind(this,name)} className="fas fa-sort-down" aria-hidden="true"></i></h4> */}
            //     <h4>{name}{' '}{this.state.showArrow ?(<i onClick={this.onClickDown} className="fas fa-sort-down" aria-hidden="true" style={{ cursor: "pointer" }}></i>):(<i onClick={this.onClickDown} className="fas fa-sort-up" aria-hidden="true" style={{ cursor: "pointer" ,color:"red"}}></i>)}
            //         <i className="fas fa-times" aria-hidden="true" style={{color:"red",float:"right",cursor:"pointer"}} onClick={this.onDeleteClick}></i>
            //     </h4>
            //     {/* <h4>{contact.name}</h4> */}
            //     {showInfo ? (<ul className="list-group">
            //             {/* <li>Email: {this.props.email}</li> */}
            //             <li className="list-group-item">Email: {email}</li>
            //             {/* <li className="list-group-item">Email: {contact.email}</li> */}
            //             {/* <li>Phone no: {this.props.phone}</li> */}
            //             <li className="list-group-item">Phone no: {phone}</li>
            //             {/* <li className="list-group-item">Phone no: {contact.phone}</li> */}
            //         </ul>) : null }
                    
            // </div>
        )
    }
}
// Contact.propTypes = {
//     name: PropTypes.string.isRequired,
//     email: PropTypes.string.isRequired,
//     phone: PropTypes.string.isRequired
// };
export default Contact;
