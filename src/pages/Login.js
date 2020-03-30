import React from 'react'

// 注意 React.Component 大小寫，曾經卡在這
class Login extends React.Component {
  // 受控元件
  // 非受控元件
  state = {
    email: '',
    password: ''
  }

  handleSubmit = (event) => {
    // 1. 阻止默認行為
    event.preventDefault()

    // 2. 獲取表單數據
    // const formData = {
    //   email: this.emailRef.current.value,
    //   password: this.passwordRef.current.value,
    // }

    // 3. 處理登入邏輯

    // 4. 跳轉到首頁頁面
    // this.props.history.push('/')
  }

  // 可以寫一篇文章
  // 1. 從使用 Ref 獲取Value
  // 2. 為何取消 Ref 獲取Value
  // 3. 使用受控元件的方式獲取 value
  // 4. [e.target.name] <== 為何是使用陣列的方式
  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  render() {
    return (
      <div className='login-wrapper'>
        <form className='box login-box' onSubmit={this.handleSubmit}>
          <div className='field'>
            <label className='label'>Email</label>
            <div className='control'>
              <input className='input'
                type='text'
                placeholder='Email'
                name='email'
                value={this.state.email}
                onChange={this.handleChange}
              />
            </div>
          </div>
          <div className='field'>
            <label className='label'>Password</label>
            <div className='control'>
              <input className='input'
                type='password'
                placeholder='Password'
                name='password'
                value={this.state.password}
                onChange={this.handleChange}
              />
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
