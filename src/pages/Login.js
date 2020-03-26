import React from 'react'

// 注意 React.Component 大小寫，曾經卡在這
class Login extends React.Component {
  // 事件注意事項
  // 1. 命名和綁定
  // 2. event
  // 3. this
  // 4. 傳遞參數

  handleSubmit = (event) => {
    // 1. 阻止默認行為
    event.preventDefault()

    // 2. 獲取表單數據

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
              <input className='input' type='text' placeholder='Email' />
            </div>
          </div>
          <div className='field'>
            <label className='label'>Password</label>
            <div className='control'>
              <input className='input' type='password' placeholder='Password' />
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
