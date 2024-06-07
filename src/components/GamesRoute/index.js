import {Component} from 'react'
import {SiYoutubegaming} from 'react-icons/si'
import Cookies from 'js-cookie'
import Loader from 'react-loader-spinner'
import {Link} from 'react-router-dom'

import CartContext from '../../context/CartContext'
import Header from '../Header'
import Navbar from '../Navbar'

import {
  GameMainContainer,
  FailedContainer,
  FailedImage,
  FailureHeading,
  FailureButton,
  FailedDescription,
  GamesContainer,
  GameHeading,
  Views,
  VideoHeading,
  GameThumbnailContainer,
  GameThumbnail,
  LoadingContainer,
  GameContainer,
  GameIconContainer,
} from './styledComponent'
import './index.css'

const apiStatusConstants = {
  initial: 'INITIAL',
  success: 'SUCCESS',
  failure: 'FAILURE',
  inProgress: 'IN_PROGRESS',
}

class GamesRoute extends Component {
  state = {apiStatus: apiStatusConstants.initial, videoThumbnailsList: []}

  componentDidMount() {
    this.getTrendingVideos()
  }

  getTrendingVideos = async () => {
    this.setState({apiStatus: apiStatusConstants.inProgress})

    const jwtToken = Cookies.get('jwt_token')
    const url = `https://apis.ccbp.in/videos/gaming`
    const options = {
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
      method: 'GET',
    }
    const response = await fetch(url, options)
    if (response.ok === true) {
      const data = await response.json()
      console.log(data)

      const updatedData = data.videos.map(eachItem => ({
        id: eachItem.id,
        title: eachItem.title,
        thumbnailUrl: eachItem.thumbnail_url,
        viewCount: eachItem.view_count,
      }))
      this.setState({
        apiStatus: apiStatusConstants.success,
        videoThumbnailsList: updatedData,
      })
    } else {
      this.setState({apiStatus: apiStatusConstants.failure})
    }
  }

  renderLoadingView = isDarkTheme => (
    <LoadingContainer data-testid="loader">
      <Loader
        type="ThreeDots"
        color={isDarkTheme ? '#ffffff' : '#0b69ff'}
        height="50"
        width="50"
      />
    </LoadingContainer>
  )

  renderFailureView = isDarkTheme => (
    <FailedContainer>
      <FailedImage
        src={
          isDarkTheme
            ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-dark-theme-img.png'
            : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-light-theme-img.png'
        }
        alt="failure view"
      />
      <FailureHeading color={isDarkTheme ? '#d7dfe9' : '#000000'}>
        Oops! Something Went Wrong
      </FailureHeading>
      <FailedDescription color={isDarkTheme ? '#d7dfe9' : '#000000'}>
        We are having some trouble to complete your request. Please try again.
      </FailedDescription>
      <FailureButton onClick={this.onClickRetryButton}>Retry</FailureButton>
    </FailedContainer>
  )

  renderSuccessView = isDarkTheme => {
    const {videoThumbnailsList} = this.state

    console.log(videoThumbnailsList)
    const titleColor = isDarkTheme ? '#e2e8f0' : '#231f20'
    const nameColor = isDarkTheme ? '#64748b' : '#64748b'

    return (
      <ul className="gaming-ul">
        {videoThumbnailsList.map(video => (
          <Link className="link" to={`videos/${video.id}`}>
            <GameThumbnailContainer key={video.id}>
              <GameThumbnail src={video.thumbnailUrl} alt="video thumbnail" />

              <VideoHeading color={titleColor}>{video.title}</VideoHeading>

              <Views
                color={nameColor}
              >{`${video.viewCount} Watching Worldwide`}</Views>
            </GameThumbnailContainer>
          </Link>
        ))}
      </ul>
    )
  }

  renderResultView = isDarkTheme => {
    const {apiStatus} = this.state
    switch (apiStatus) {
      case apiStatusConstants.success:
        return this.renderSuccessView(isDarkTheme)
      case apiStatusConstants.failure:
        return this.renderFailureView(isDarkTheme)
      case apiStatusConstants.inProgress:
        return this.renderLoadingView(isDarkTheme)
      default:
        return null
    }
  }

  render() {
    return (
      <CartContext.Consumer>
        {value => {
          const {isDarkTheme} = value
          return (
            <>
              <Header />
              <GameMainContainer>
                <Navbar />
                <GameContainer
                  data-testid="gaming"
                  bgColor={isDarkTheme ? '#0f0f0f' : '#f9f9f9'}
                >
                  <GameIconContainer>
                    <SiYoutubegaming className="trending-icon" />
                    <GameHeading color={isDarkTheme ? '#f9f9f9' : '#0f0f0f'}>
                      Gaming
                    </GameHeading>
                  </GameIconContainer>
                  <GamesContainer>
                    {this.renderResultView(isDarkTheme)}
                  </GamesContainer>
                </GameContainer>
              </GameMainContainer>
            </>
          )
        }}
      </CartContext.Consumer>
    )
  }
}

export default GamesRoute
