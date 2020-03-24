import React from 'react'

// 注意 React.Component 大小寫，曾經卡在這
class Login extends React.Component {
  render() {
    return (
      <form className='login-wrapper'>
        <div>
          <label>Email</label>
          <div>
            <input type="text" placeholder='Email' />
          </div>
        </div>
        <div>
          <label>Password</label>
          <div>
            <input type="text" placeholder='Password' />
          </div>
        </div>
        <div>
          <button>Login</button>
        </div>
      </form>
    )
  }
}

export default Login
