import {Component} from 'react'
import {Link, withRouter} from 'react-router-dom'
import {IoMdHome} from 'react-icons/io'
import {HiFire} from 'react-icons/hi'
import {SiYoutubegaming} from 'react-icons/si'
import {MdPlaylistAdd} from 'react-icons/md'
import {
  NavbarContainer,
  IconButton,
  ContactUsHeading,
  Image,
  Description,
  ImagesContainer,
} from './styledComponent'
import CartContext from '../../context/CartContext'
import './index.css'

class Navbar extends Component {
  constructor(props) {
    super(props)
    this.state = {activeButton: props.location.pathname}
  }

  componentDidUpdate(prevProps) {
    const {location} = this.props
    if (location.pathname !== prevProps.location.pathname) {
      this.setActiveButton(location.pathname)
    }
  }

  setActiveButton = path => {
    this.setState({activeButton: path})
  }

  render() {
    const {activeButton} = this.state
    const {location} = this.props

    return (
      <CartContext.Consumer>
        {value => {
          const {isDarkTheme} = value

          const bgColor = isDarkTheme ? '#212121' : '#ffffff'
          const color = isDarkTheme ? '#d7dfe9' : '#000000'
          const paragraphClass = isDarkTheme ? 'dark' : 'light'
          const btn1BgColor = activeButton === '/' ? '#cccccc' : ''
          const btn2BgColor = activeButton === '/trending' ? '#cccccc' : ''
          const btn3BgColor = activeButton === '/gaming' ? '#cccccc' : ''
          const btn4BgColor = activeButton === '/saved-videos' ? '#cccccc' : ''
          const icon1 = activeButton === '/' ? 'red' : ''
          const icon2 = activeButton === '/trending' ? 'red' : ''
          const icon3 = activeButton === '/gaming' ? 'red' : ''
          const icon4 = activeButton === '/saved-videos' ? 'red' : ''

          return (
            <NavbarContainer color={color} bgColor={bgColor}>
              <ul>
                <Link className="link" to="/">
                  <li>
                    <IconButton
                      type="button"
                      onClick={() => this.setActiveButton('/')}
                      style={{backgroundColor: btn1BgColor}}
                    >
                      <div className="icon-container">
                        <IoMdHome className={`icon ${icon1}`} />{' '}
                        <p className={`paragraph ${paragraphClass}`}>Home</p>
                      </div>
                    </IconButton>
                  </li>
                </Link>
                <Link className="link" to="/trending">
                  <li>
                    <IconButton
                      type="button"
                      onClick={() => this.setActiveButton('/trending')}
                      style={{backgroundColor: btn2BgColor}}
                    >
                      <div className="icon-container">
                        <HiFire className={`icon ${icon2}`} />{' '}
                        <p className={`paragraph ${paragraphClass}`}>
                          Trending
                        </p>
                      </div>
                    </IconButton>
                  </li>
                </Link>

                <Link className="link" to="/gaming">
                  <li>
                    <IconButton
                      type="button"
                      onClick={() => this.setActiveButton('/games')}
                      style={{backgroundColor: btn3BgColor}}
                    >
                      <div className="icon-container">
                        <SiYoutubegaming className={`icon ${icon3}`} />
                        <p className={`paragraph ${paragraphClass}`}>Gaming</p>
                      </div>
                    </IconButton>
                  </li>
                </Link>
                <Link className="link" to="/saved-videos">
                  <li>
                    <IconButton
                      type="button"
                      onClick={() => this.setActiveButton('/saved-videos')}
                      style={{backgroundColor: btn4BgColor}}
                    >
                      <div className="icon-container">
                        <MdPlaylistAdd className={`icon ${icon4}`} />
                        <p className={`paragraph ${paragraphClass}`}>
                          Saved Videos
                        </p>
                      </div>
                    </IconButton>
                  </li>
                </Link>
              </ul>
              <div className="contact-us-container">
                <ContactUsHeading>CONTACT US</ContactUsHeading>
                <ImagesContainer>
                  <Image
                    src="https://assets.ccbp.in/frontend/react-js/nxt-watch-facebook-logo-img.png"
                    alt="facebook logo"
                  />
                  <Image
                    src="https://assets.ccbp.in/frontend/react-js/nxt-watch-twitter-logo-img.png"
                    alt="twitter logo"
                  />
                  <Image
                    src="https://assets.ccbp.in/frontend/react-js/nxt-watch-linked-in-logo-img.png"
                    alt="linked in logo"
                  />
                </ImagesContainer>
                <Description color={color}>
                  Enjoy! Now to see your channels and recommendations!
                </Description>
              </div>
            </NavbarContainer>
          )
        }}
      </CartContext.Consumer>
    )
  }
}

export default withRouter(Navbar)
