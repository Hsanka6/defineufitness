import React, { Component } from 'react'

class ClientListItem extends Component {
    render() {
        return (
            <div className="container">
            <div className="box">
                <div className="columns is-mobile is-centered is-vcentered">
                    <div className="column">
                        <span className="title">Client 1</span>
                    </div>
                    <div className="column">
                        <span className="title"> 11000/12000</span>
                    </div>
                </div>
            </div>
            <div className="box">
                <div className="columns is-mobile is-centered is-vcentered">
                    <div className="column">
                        <span className="title">Client 1</span>
                    </div>
                    <div className="column">
                        <span className="title"> 11000/12000</span>
                    </div>
                </div>
            </div>

            </div>
        )
    }
}

export default ClientListItem