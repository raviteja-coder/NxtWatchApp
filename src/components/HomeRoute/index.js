import {Component} from 'react'

import {IoIosSearch, IoMdClose} from 'react-icons/io'
import {formatDistanceToNowStrict} from 'date-fns'
import Loader from 'react-loader-spinner'
import Cookies from 'js-cookie'
import Header from '../Header'
import VideoItem from '../VideoItem'
import Navbar from '../Navbar'

import {
  HomeContainer,
  FailedContainer,
  FailedImage,
  FailureHeading,
  FailureButton,
  FailedDescription,
  HomeMainContainer,
  PopupContainer,
  HomeLogoContainer,
  LogoImage,
  Description,
  SearchButton,
  SuccessContainer,
  CloseBtn,
  GetButton,
  LoadingContainer,
  HomeSubContainer,
  SearchContainer,
  SearchInput,
} from './styledComponent'
import CartContext from '../../context/CartContext'
import './index.css'

const apiStatusConstants = {
  initial: 'INITIAL',
  success: 'SUCCESS',
  failure: 'FAILURE',
  inProgress: 'IN_PROGRESS',
}

class HomeRoute extends Component {
  state = {
    isShow: true,
    videoThumbnailsList: [],
    searchText: '',
    apiStatus: apiStatusConstants.initial,
    searchInputText: '',
  }

  componentDidMount() {
    this.getApiCall()
  }

  getApiCall = async () => {
    this.setState({apiStatus: apiStatusConstants.inProgress})
    const {searchText} = this.state

    const jwtToken = Cookies.get('jwt_token')
    const url = `https://apis.ccbp.in/videos/all?search=${searchText}`
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

  onClickCloseBtn = () => {
    this.setState({isShow: false})
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

  onClickRetryButton = () => {
    this.getApiCall()
  }

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

    return (
      <SuccessContainer>
        {videoThumbnailsList.length > 0 && (
          <ul className="gaming-ul">
            {videoThumbnailsList.map(video => (
              <VideoItem
                key={video.id}
                video={video}
                isDarkTheme={isDarkTheme}
              />
            ))}
          </ul>
        )}
        {videoThumbnailsList.length === 0 && (
          <div
            className={`not-found-container ${
              isDarkTheme ? 'not-found-dark-container' : ''
            }`}
          >
            <img
              src="https://assets.ccbp.in/frontend/react-js/nxt-watch-no-search-results-img.png"
              alt="no videos"
              className="image"
            />
            <h1>No Search Results Found</h1>
            <p>Try different key words or remove search filter</p>
            <button type="button" onClick={this.onClickRetryButton}>
              Retry
            </button>
          </div>
        )}
      </SuccessContainer>
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

  onChangeSearchInput = event => {
    this.setState({searchInputText: event.target.value})
  }

  onClickSearchBtn = () => {
    const {searchInputText} = this.state
    this.setState({searchText: searchInputText}, this.getApiCall)
  }

  render() {
    const {isShow, searchInputText} = this.state
    return (
      <div>
        <Header />
        <HomeContainer>
          <Navbar />
          <CartContext.Consumer>
            {value => {
              const {isDarkTheme} = value
              const bgColor = isDarkTheme ? '#181818' : '#f9f9f9'
              const searchBgColor = isDarkTheme ? '#424242' : '#ffffff'
              const searchBtnBgColor = isDarkTheme ? '#cccccc' : '#f9f9f9'
              const color = isDarkTheme ? '#ffffff' : '##181818'
              const border = isDarkTheme ? '#f4f4f4' : '#000000'

              return (
                <HomeMainContainer data-testid="home" bgColor={bgColor}>
                  {isShow && (
                    <PopupContainer data-testid="banner">
                      <HomeLogoContainer>
                        <LogoImage
                          src="https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png"
                          alt="website logo"
                        />
                        <CloseBtn
                          data-testid="close"
                          type="button"
                          onClick={this.onClickCloseBtn}
                        >
                          <IoMdClose />
                        </CloseBtn>
                      </HomeLogoContainer>
                      <Description>
                        Buy Nxt Watch Premium prepaid plans with UPI
                      </Description>
                      <GetButton type="button">GET IT NOW</GetButton>
                    </PopupContainer>
                  )}
                  <HomeSubContainer>
                    <SearchContainer border={border}>
                      <SearchInput
                        border={border}
                        onChange={this.onChangeSearchInput}
                        color={color}
                        value={searchInputText}
                        placeholder="Search"
                        bgColor={searchBgColor}
                        type="search"
                      />
                      <SearchButton
                        bgColor={searchBtnBgColor}
                        onClick={this.onClickSearchBtn}
                        type="button"
                      >
                        <IoIosSearch className="search-icon" />
                      </SearchButton>
                    </SearchContainer>
                    {this.renderResultView(isDarkTheme)}
                  </HomeSubContainer>
                </HomeMainContainer>
              )
            }}
          </CartContext.Consumer>
        </HomeContainer>
      </div>
    )
  }
}

export default HomeRoute
