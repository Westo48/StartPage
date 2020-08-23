import React, { Component } from 'react'
import './WestonStyle.css'

import entertainLogo from '../../icons/entertainment.svg'
import codeLogo from '../../icons/code.svg'
import eyeLogo from '../../icons/eye.svg'

import Clock from './Clock'
import LinkSet from './LinkSet'

export default class WestonStartPage extends Component {
    constructor(props) {
        super(props)
        this.state = {
            links: [
                {
                    name: 'Netflix',
                    url: 'https://www.netflix.com/browse',
                    category: 'Entertain'
                },
                {
                    name: 'Hulu',
                    url: 'https://www.hulu.com/',
                    category: 'Entertain'
                },
                {
                    name: 'Disney+',
                    url: 'https://www.disneyplus.com/',
                    category: 'Entertain'
                },
                {
                    name: 'Funimation',
                    url: 'https://www.funimation.com/',
                    category: 'Entertain'
                },
                {
                    name: 'YouTube',
                    url: 'https://www.youtube.com/',
                    category: 'Entertain'
                },
                {
                    name: 'GitHub',
                    url: 'https://github.com/',
                    category: 'Dev'
                },
                {
                    name: 'StackOverflow',
                    url: 'https://stackoverflow.com/',
                    category: 'Dev'
                },
                {
                    name: 'Clash Blog',
                    url: 'https://clashofclans.com/blog/',
                    category: 'Gaming'
                },
                {
                    name: 'Clash Ninja',
                    url: 'https://www.clash.ninja/upgrade-tracker/rgq8rgu9/home#builders',
                    category: 'Gaming'
                },
                {
                    name: 'Clash of Stats',
                    url: 'https://www.clashofstats.com/players/razgriz-RGQ8RGU9/summary',
                    category: 'Gaming'
                },


            ]
        }
    }

    render() {
        const { links } = this.state

        return (
            <div className="westonContainer">
                <div className="container">
                    <h1 className="display-2 text-center">
                        Hello Weston
                    </h1>
                    <Clock />
                    <div className="link-set-group row text-center">
                        <div className="link-set col-md-4 mb-3">
                            <div className="link-set-head">
                                <img src={entertainLogo} className="mb-3" />
                            </div>
                            <LinkSet links={links} category="Entertain" />
                        </div>
                        <div className="link-set col-md-4 mb-3">
                            <div className="link-set-head">
                                <img src={codeLogo} className="mb-3" />
                            </div>
                            <LinkSet links={links} category="Dev" />
                        </div>
                        <div className="link-set col-md-4 mb-3">
                            <div className="link-set-head">
                                <img src={eyeLogo} className="mb-3" />
                            </div>
                            <LinkSet links={links} category="Gaming" />
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
