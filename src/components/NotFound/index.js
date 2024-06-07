import CartContext from '../../context/CartContext'
import Header from '../Header'
import Navbar from '../Navbar'
import './index.css'

const NotFound = () => (
  <CartContext>
    {value => {
      const {isDarkTheme} = value
      return (
        <>
          <Header />
          <Navbar />
          <div
            className={
              isDarkTheme
                ? 'not-found-container bg-dark'
                : 'not-found-container bg-light'
            }
          >
            <img
              src={
                isDarkTheme
                  ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-not-found-dark-theme-img.png'
                  : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-not-found-light-theme-img.png'
              }
              alt="not found"
              className="not-found-img"
            />
            <h1 className={isDarkTheme ? 'dark' : 'light'}>Page Not Found</h1>
            <p className={isDarkTheme ? 'dark' : 'light'}>
              We are sorry, the page you requested could not be found.
            </p>
          </div>
        </>
      )
    }}
  </CartContext>
)

export default NotFound
