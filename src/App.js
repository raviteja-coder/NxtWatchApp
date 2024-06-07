import {Component} from 'react'
import {Switch, Route, Redirect} from 'react-router-dom'
import LoginForm from './components/LoginForm'
import HomeRoute from './components/HomeRoute'
import Trending from './components/Trending'
import SavedVideos from './components/SavedVideos'
import GamesRoute from './components/GamesRoute'
import NotFound from './components/NotFound'
import ProtectedRoute from './components/ProtectedRoute'
import VideoDetailsItem from './components/VideoDetailsItem'
import CartContext from './context/CartContext'
import './App.css'

// Replace your code here
class App extends Component {
  state = {isDarkTheme: false, savedList: []}

  toggleTheme = () => {
    this.setState(prevState => ({isDarkTheme: !prevState.isDarkTheme}))
  }

  updateSavedList = video => {
    this.setState(prevState => {
      const isVideoSaved = prevState.savedList.some(
        savedVideo => savedVideo.id === video.id,
      )

      if (isVideoSaved) {
        return {
          savedList: prevState.savedList.filter(
            savedVideo => savedVideo.id !== video.id,
          ),
        }
      }

      return {
        savedList: [...prevState.savedList, video],
      }
    })
  }

  render() {
    const {savedList, isDarkTheme} = this.state
    return (
      <>
        <CartContext.Provider
          value={{
            isDarkTheme,
            toggleTheme: this.toggleTheme,
            savedList,
            updateSavedList: this.updateSavedList,
          }}
        >
          <Switch>
            <Route exact path="/login" component={LoginForm} />
            <ProtectedRoute exact path="/" component={HomeRoute} />
            <ProtectedRoute exact path="/trending" component={Trending} />
            <ProtectedRoute
              exact
              path="/saved-videos"
              component={SavedVideos}
            />
            <ProtectedRoute exact path="/gaming" component={GamesRoute} />
            <ProtectedRoute
              exact
              path="/videos/:id"
              component={VideoDetailsItem}
            />
            <Route path="/bad-path" component={NotFound} />
            <Redirect to="/bad-path" />
          </Switch>
        </CartContext.Provider>
      </>
    )
  }
}
export default App
