import React, { Component } from 'react'

export default class LinkSet extends Component {
    render() {
        return (
            <div className="link-set-links">
                {this.props.links.filter(link => link.category === this.props.category).map(filteredLink => (
                    <div key={filteredLink.url}>
                        <a href={filteredLink.url} className="lead">{filteredLink.name}</a>
                    </div>
                ))}
            </div>
        )
    }
}
