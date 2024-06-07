import {Component} from 'react'
import Cookies from 'js-cookie'
import {Redirect} from 'react-router-dom'
import CartContext from '../../context/CartContext'

import {
  Label,
  Input,
  LoginContainer,
  LoginButton,
  Form,
  Logo,
  CheckboxLabel,
  CheckboxInput,
  ShowPasswordContainer,
} from './styledComponent'
import './index.css'

class LoginForm extends Component {
  state = {
    username: '',
    password: '',
    showPassword: false,
    errorMsg: '',
    isError: false,
  }

  onChangeUsername = event => {
    this.setState({username: event.target.value})
  }

  onSubmitSuccess = jwtToken => {
    const {history} = this.props

    Cookies.set('jwt_token', jwtToken, {expires: 30})

    history.replace('/')
  }

  onSubmitFailure = errorMsg => {
    this.setState({isError: true, errorMsg})
  }

  onSubmitForm = async event => {
    event.preventDefault()
    const {username, password} = this.state
    const userDetails = {username, password}
    const url = 'https://apis.ccbp.in/login'
    const options = {
      method: 'POST',
      body: JSON.stringify(userDetails),
    }
    const response = await fetch(url, options)
    const data = await response.json()
    if (response.ok === true) {
      this.onSubmitSuccess(data.jwt_token)
    } else {
      this.onSubmitFailure(data.error_msg)
    }
  }

  onChangePassword = event => {
    this.setState({password: event.target.value})
  }

  onToggleShowPassword = () => {
    this.setState(prevState => ({showPassword: !prevState.showPassword}))
  }

  render() {
    const {username, password, showPassword, isError, errorMsg} = this.state
    const token = Cookies.get('jwt_token')
    if (token !== undefined) {
      return <Redirect to="/" />
    }

    return (
      <CartContext.Consumer>
        {value => {
          const {isDarkTheme} = value
          const loginContainerBgColor = isDarkTheme ? '#475569' : '#ffffff'
          const formBgColor = isDarkTheme ? '#000000' : '#ffffff'
          const color = isDarkTheme ? '#ffffff' : '#000000'

          return (
            <LoginContainer color={color} bgColor={loginContainerBgColor}>
              <Form bgColor={formBgColor} onSubmit={this.onSubmitForm}>
                <Logo
                  src={
                    isDarkTheme
                      ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-dark-theme-img.png'
                      : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png'
                  }
                  alt="website logo"
                />
                <br />
                <>
                  {' '}
                  <label className="label" htmlFor="username">
                    USERNAME
                  </label>
                  <input
                    className="input"
                    type="text"
                    onChange={this.onChangeUsername}
                    id="username"
                    value={username}
                  />
                </>

                <br />
                <>
                  <Label htmlFor="password">PASSWORD</Label>

                  <Input
                    type={showPassword ? 'text' : 'password'}
                    onChange={this.onChangePassword}
                    id="password"
                    value={password}
                  />
                </>
                <br />
                <ShowPasswordContainer>
                  <CheckboxInput
                    type="checkbox"
                    id="showPassword"
                    onChange={this.onToggleShowPassword}
                    checked={showPassword}
                  />
                  <CheckboxLabel htmlFor="showPassword">
                    Show Password
                  </CheckboxLabel>
                </ShowPasswordContainer>

                <LoginButton type="submit">Login</LoginButton>
                {isError ? <p className="error-msg">{errorMsg}</p> : ''}
              </Form>
            </LoginContainer>
          )
        }}
      </CartContext.Consumer>
    )
  }
}

export default LoginForm
