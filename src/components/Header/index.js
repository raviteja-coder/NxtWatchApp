import {withRouter, Link} from 'react-router-dom'
import MdOutlineLightMode from 'react-icons/md'

import Popup from 'reactjs-popup'

import 'reactjs-popup/dist/index.css'
import Cookies from 'js-cookie'
import {BsFillMoonFill} from 'react-icons/bs'

import CartContext from '../../context/CartContext'

import {
  ThemeButton,
  HeaderContainer,
  LogoutButton,
  Profile,
  Logo,
} from './styledComponent'

import './index.css'

const Header = props => (
  <CartContext.Consumer>
    {value => {
      const {isDarkTheme, toggleTheme} = value

      const color = isDarkTheme ? '#ffffff' : '#000000'
      const bgColor = isDarkTheme ? '#212121' : '#ffffff'
      const logoutBtnColor = isDarkTheme ? '#ffffff' : '#4f46e5'
      const onClickLogoutBtn = () => {
        const {history} = props

        Cookies.remove('jwt_token')
        history.replace('/login')
      }

      return (
        <HeaderContainer bgColor={bgColor}>
          <Link to="/">
            <Logo
              src={
                isDarkTheme
                  ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-dark-theme-img.png'
                  : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png'
              }
              alt="website logo"
            />
          </Link>
          <div className="container">
            <ThemeButton
              color={color}
              bgColor={bgColor}
              type="button"
              data-testid="theme"
              onClick={toggleTheme}
            >
              Theme
            </ThemeButton>
            <Profile
              src="https://assets.ccbp.in/frontend/react-js/nxt-watch-profile-img.png"
              alt="profile"
            />

            <Popup
              modal
              trigger={
                <LogoutButton color={logoutBtnColor} bgColor={bgColor}>
                  Logout
                </LogoutButton>
              }
              className="popup-content"
            >
              {close => (
                <div
                  className={
                    isDarkTheme ? 'popup-content-dark' : 'popup-content-light'
                  }
                >
                  <p>Are you sure, you want to logout?</p>
                  <div>
                    <button
                      className="cancle-btn"
                      type="button"
                      onClick={() => close()}
                    >
                      Cancel
                    </button>
                    <button
                      className="confirm-btn"
                      type="button"
                      onClick={onClickLogoutBtn}
                    >
                      Confirm
                    </button>
                  </div>
                </div>
              )}
            </Popup>
          </div>
        </HeaderContainer>
      )
    }}
  </CartContext.Consumer>
)

export default withRouter(Header)
