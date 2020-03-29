import React from 'react'

// 注意 React.Component 大小寫，曾經卡在這
class Login extends React.Component {
  // Refs
  emailRef = React.createRef()
  passwordRef = React.createRef()

  handleSubmit = (event) => {
    // 1. 阻止默認行為
    event.preventDefault()

    // 2. 獲取表單數據
    const formData = {
      email: this.emailRef.current.value,
      password: this.passwordRef.current.value,
    }

    // 3. 處理登入邏輯

    // 4. 跳轉到首頁頁面
    this.props.history.push('/')
  }

  render() {
    return (
      <div className='login-wrapper'>
        <form className='box login-box' onSubmit={this.handleSubmit}>
          <div className='field'>
            <label className='label'>Email</label>
            <div className='control'>
              <input className='input' type='text' placeholder='Email' ref={this.emailRef} />
            </div>
          </div>
          <div className='field'>
            <label className='label'>Password</label>
            <div className='control'>
              <input className='input' type='password' placeholder='Password' ref={this.passwordRef} />
            </div>
          </div>
          <div className='control'>
            <button className='button is-fullwidth is-primary' >Login</button>
          </div>
        </form>
      </div>
    )
  }
}

export default Login
