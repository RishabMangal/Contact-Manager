import React from 'react'

export default function About(props) {
    return (
        <div>
            <h1 className="display-4">About Contact Manager</h1>
            <p className="lead">Simple App to Manage Contacts</p>
            <p className="text-secondary">Version 1.0.0</p>
            <h2>Developed by</h2>
            <p className="lead">Rishab Mangal</p>
            <p className="text-secondary">Path- {props.match.params.id}</p>
        </div>
    )
}
