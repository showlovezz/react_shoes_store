import React from 'react'

class Header extends React.Component {
  renderLink() {
    const nickName = this.props.nickName
    if (nickName) {
      return (
        <span className='nickname'>
          <i className='far fa-user'></i>
          {this.props.nickName}
        </span>
      )
    } else {
      return (
        <React.Fragment>
          <a href='/'>Login</a>
          <a href='/'>Register</a>
        </React.Fragment>
      )
    }
  }

  render() {
    return (
      <div className='header'>
        <div className='grid'>
          <div className='start'>
            <a href='/'>Home</a>
          </div>
          <div className='end'>
            {this.renderLink()}
          </div>
        </div>
      </div>
    )
  }
}

export default Header
