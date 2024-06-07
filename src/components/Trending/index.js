import {Component} from 'react'
import {HiFire} from 'react-icons/hi'
import Cookies from 'js-cookie'
import Loader from 'react-loader-spinner'
import {Link} from 'react-router-dom'
import {formatDistanceToNowStrict} from 'date-fns'
import CartContext from '../../context/CartContext'
import Header from '../Header'
import Navbar from '../Navbar'

import {
  TrendingMainContainer,
  TrendingHeading,
  Views,
  PostedDate,
  VideoHeading,
  Name,
  ViewsContainer,
  TrendingThumbnailContentContainer,
  TrendingThumbnailContainer,
  TrendingThumbnail,
  FailedContainer,
  FailedImage,
  FailureHeading,
  FailureButton,
  FailedDescription,
  LoadingContainer,
  TrendingContainer,
  TrendingIconContainer,
} from './styledComponent'
import './index.css'

const apiStatusConstants = {
  initial: 'INITIAL',
  success: 'SUCCESS',
  failure: 'FAILURE',
  inProgress: 'IN_PROGRESS',
}

class Trending extends Component {
  state = {apiStatus: apiStatusConstants.initial, videoThumbnailsList: []}

  componentDidMount() {
    this.getTrendingVideos()
  }

  getTrendingVideos = async () => {
    this.setState({apiStatus: apiStatusConstants.inProgress})

    const jwtToken = Cookies.get('jwt_token')
    const url = `https://apis.ccbp.in/videos/trending`
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
        channel: {
          name: eachItem.channel.name,
          profileImgUrl: eachItem.channel.profile_image_url,
        },
        viewCount: eachItem.view_count,
        publishedAt: formatDistanceToNowStrict(new Date(eachItem.published_at)),
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
      <ul>
        {videoThumbnailsList.map(video => (
          <Link className="link" to={`videos/${video.id}`}>
            <TrendingThumbnailContainer key={video.id}>
              <TrendingThumbnail
                src={video.thumbnailUrl}
                alt="video thumbnail"
              />
              <TrendingThumbnailContentContainer>
                <VideoHeading color={titleColor}>{video.title}</VideoHeading>
                <Name color={nameColor}>{video.channel.name}</Name>
                <ViewsContainer>
                  <Views color={nameColor}>{`${video.viewCount} Views`}</Views>
                  <PostedDate
                    color={nameColor}
                  >{`${video.publishedAt} ago`}</PostedDate>
                </ViewsContainer>
              </TrendingThumbnailContentContainer>
            </TrendingThumbnailContainer>
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
              <TrendingMainContainer>
                <Navbar />
                <TrendingContainer
                  data-testid="trending"
                  bgColor={isDarkTheme ? '#0f0f0f' : '#f9f9f9'}
                >
                  <TrendingIconContainer>
                    <HiFire className="trending-icon" />
                    <TrendingHeading
                      color={isDarkTheme ? '#f9f9f9' : '#0f0f0f'}
                    >
                      Trending
                    </TrendingHeading>
                  </TrendingIconContainer>

                  {this.renderResultView(isDarkTheme)}
                </TrendingContainer>
              </TrendingMainContainer>
            </>
          )
        }}
      </CartContext.Consumer>
    )
  }
}

export default Trending
