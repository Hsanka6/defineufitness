import React, { Component } from 'react'
import ClientList from './ClientList'
import Notification from './Notification.js'
class Dashboard extends Component {
    render() {
        return (
          <div className="dashboard container">
            <div className="column is-three-quarters">
              <Notification />
              <ClientList />
            </div>
          </div>
        )
    }
}

export default Dashboard
