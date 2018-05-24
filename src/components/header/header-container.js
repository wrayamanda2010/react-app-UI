import React, { Component } from 'react'
import './header-container.css'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

// const Header = () => (
//   <h1>Header</h1>
// )

  class Header extends Component{
    onLogoutClick = (event) => {
      event.preventDefault()
      // this.props.logout()
    }
    render() {
      return(
        <div className='header-container'>
          <a className='title' href='#title'>Todos</a>
          {this.props.username !== null && <a href ='#logout' onClick={this.onLogoutClick}>{`Logout ${this.props.username}`}</a>}
        </div>
      )
    }
  }

const mapStateToProps = (state) => state.auth

export default connect(mapStateToProps)(Header)
