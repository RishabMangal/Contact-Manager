import React, { Component } from 'react'
import Contact from './Contact'
import { Consumer } from '../../Context';
// import AddContacts from './AddContacts'
// import {consumer} from '../Context'
class Contacts extends Component {
    // constructor() {
    //     super();
    //     this.state = {
    //         contacts:[
    //             {
    //                 id: "1",
    //                 name: "Rishab Mangal",
    //                 email: "rishabhmangal1@gmail.com",
    //                 phone:"9928799243"
    //             },
    //             {
    //                 id: "2",
    //                 name: "Aman Mangal",
    //                 email: "amanmangal2@gmail.com",
    //                 phone:"99264698456"
    //             },
    //             {
    //                 id: "3",
    //                 name: "Akash Mangal",
    //                 email: "Akashmangal3@gmail.com",
    //                 phone:"9651659823"
    //             },
    //         ]
    //     }
    // }
    // state = {
    //     contacts: [{
    //             id: "1",
    //             name: "Rishab Mangal",
    //             email: "rishabhmangal1@gmail.com",
    //             phone: "9928799243"
    //         },
    //         {
    //             id: "2",
    //             name: "Aman Mangal",
    //             email: "amanmangal2@gmail.com",         
    //             phone: "99264698456"
    //         },
    //         {
    //             id: "3",
    //             name: "Akash Mangal",
    //             email: "Akashmangal3@gmail.com",
    //             phone: "9651659823"
    //         },
    //         {
    //             id: "4",
    //             name: "Aman Bhagel",
    //             email: "amanmangal2@gmail.com",         
    //             phone: "99264698456"
    //         },
    //         {
    //             id: "5",
    //             name: "Akash Mangal",
    //             email: "Akashmangal3@gmail.com",
    //             phone: "9651659823"
    //         },
    //     ]
    // }
    // deleteContact = (id) => {
    //     // console.log(id + " Oh My God!!.You Deleted Me")   
        
    //     const { contacts } = this.state
        
    //     const newContact = contacts.filter(contact => contact.id !== id);

    //     this.setState({
    //         contacts: newContact
    //     });
    // }
    // this.setState({ [this.state]: AddContacts.state });
    //     funnew = () => {
    //         console.log("New console AddContacts.state.name");

    // }
    constructor() {
        super();
        console.log("Constructor of Contats");
    }
    onDeleteContact = (id) => {
        console.log("Yipeee " + id);
        // const { contacts } = this.state;    
        // const tempContacts = contacts.filter(contact => contact.id !== id);
        // this.setState({
        //     contacts: tempContacts
        // })
    }
    render() {
        // return (
        //     <consumer>
        //         {value => {
        //             const { contacts } = value;
        //             return (
        //                 <React.Fragment>
        //                     {contacts.map(contact =>
        //                         // <h1>{contact.name}</h1>
        //                         <Contact
        //                             key={contact.id}
        //                             // name={contact.name}
        //                             // email={contact.email}
        //                             // phone={contact.phone}
        //                             contact={contact}
        //                             // deleteContact={this.deleteContact.bind(this, contact.id)}
        //                         />
        //                     )}
        //                 </React.Fragment>
        //             )
        //         }}
        //     </consumer>
        // );
        return (
            <Consumer>
                {
                    value => {
                        const { contacts } = value;
                        return (
                            //  <div>
                            <React.Fragment>
                                <h1 className="display-4 mb-2"><span className="text-danger">Contact</span> List</h1>
                                {contacts.map(contact =>
                                // <h1>{contact.name}</h1>
                                    <Contact
                                        key={contact.id}
                                        // name={contact.name}
                                        // email={contact.email}
                                        // phone={contact.phone}
                                        contact={contact}
                                        deleteFunction={this.onDeleteContact.bind(this,contact.id)}
                                    />    
                                 )}
                                {/* <button onClick={this.funnew}> New</button> */}
                            </React.Fragment>
                            // </div>
                        )
                    }
                }
            </Consumer>
        )



        // const { contacts } = this.state;
        // return (
        //     <div>
        //         {contacts.map(contact =>
        //         // <h1>{contact.name}</h1>
        //             <Contact
        //                 key={contact.id}
        //                 // name={contact.name}
        //                 // email={contact.email}
        //                 // phone={contact.phone}
        //                 contact={contact}
        //                 deleteFunction={this.onDeleteContact.bind(this,contact.id)}
        //             />    
        //         )}
        //         <button onClick={this.funnew}> New</button>
        //     </div>
        //     <React.Fragment>
        //         {contacts.map(contact =>
        //         // <h1>{contact.name}</h1>
        //             <Contact
        //                 key={contact.id}
        //                 // name={contact.name}
        //                 // email={contact.email}                     PASTED IN RETURN OF VALUE
        //                 // phone={contact.phone}
        //                 contact={contact}
        //                 deleteContact={this.deleteContact.bind(this,contact.id)}
        //             />    
        //             )}
        //     </React.Fragment>
        // )
    }
} 
export default Contacts;