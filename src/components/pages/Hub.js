import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class hub extends Component {
    render() {
        return (
            <div className="container">
                <h1 className="display-4">
                    Hello there
                </h1>
                <Link to="/weston" className="btn btn-primary">Weston</Link>
                <h1 className="display-4">
                    General Kenobi
                </h1>
            </div>
        )
    }
}
