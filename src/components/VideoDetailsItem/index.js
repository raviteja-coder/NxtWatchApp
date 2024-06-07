import {Component} from 'react'
import Cookies from 'js-cookie'
import Loader from 'react-loader-spinner'
import ReactPlayer from 'react-player'
import {formatDistanceToNowStrict} from 'date-fns'
import {AiOutlineLike, AiOutlineDislike} from 'react-icons/ai'
import {MdPlaylistAdd} from 'react-icons/md'
import Header from '../Header'
import Navbar from '../Navbar'
import CartContext from '../../context/CartContext'
import {
  VideoContainer,
  VideoMainContainer,
  ButtonContainer,
  DislikeButton,
  Subscribers,
  Description,
  HorizontalLine,
  Views,
  ButtonsContainer,
  ProfileAndContentContainer,
  ContentContainer,
  Profile,
  FailedContainer,
  FailedImage,
  FailureHeading,
  FailureButton,
  FailedDescription,
  Name,
  LikeButton,
  ViewsDetails,
  PublishedDate,
  SaveButton,
  VideoName,
  LoadingContainer,
  VideoPlayContainer,
} from './styledComponent'
import './index.css'

const apiStatusConstants = {
  initial: 'INITIAL',
  success: 'SUCCESS',
  failure: 'FAILURE',
  inProgress: 'IN_PROGRESS',
}

class VideoDetailsItem extends Component {
  state = {
    videoDetailList: {},
    apiStatus: apiStatusConstants.initial,
    isLiked: false,
    isDisliked: false,
  }

  componentDidMount() {
    this.getVideoDetails()
  }

  getVideoDetails = async () => {
    const {match} = this.props
    const {params} = match
    const {id} = params
    this.setState({apiStatus: apiStatusConstants.inProgress})

    const jwtToken = Cookies.get('jwt_token')
    const url = `https://apis.ccbp.in/videos/${id}`
    const options = {
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
      method: 'GET',
    }
    const response = await fetch(url, options)
    const data = await response.json()
    if (response.ok === true) {
      const updatedData = {
        id: data.video_details.id,
        title: data.video_details.title,
        videoUrl: data.video_details.video_url,
        thumbnailUrl: data.video_details.thumbnail_url,
        channel: {
          name: data.video_details.channel.name,
          profileImgUrl: data.video_details.channel.profile_image_url,
          subscriberCount: data.video_details.channel.subscriber_count,
        },
        viewCount: data.video_details.view_count,
        publishedAt: formatDistanceToNowStrict(
          new Date(data.video_details.published_at),
        ),
        description: data.video_details.description,
      }
      this.setState({
        videoDetailList: updatedData,
        apiStatus: apiStatusConstants.success,
      })
    } else {
      this.setState({apiStatus: apiStatusConstants.failure})
    }
  }

  toggleLike = () => {
    this.setState(prevState => ({
      isLiked: !prevState.isLiked,
      isDisliked: prevState.isLiked ? prevState.isDisliked : false,
    }))
  }

  toggleDislike = () => {
    this.setState(prevState => ({
      isDisliked: !prevState.isDisliked,
      isLiked: prevState.isDisliked ? prevState.isLiked : false,
    }))
  }

  saveVideo = (updateSavedList, isVideoSaved) => {
    const {videoDetailList} = this.state
    updateSavedList(videoDetailList)
  }

  getButtonColor = (isActive, isDarkTheme) => {
    if (isActive) {
      return '#2563eb'
    }
    return isDarkTheme ? '#647486' : '#647486'
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

  renderSuccessView = (isDarkTheme, savedList, updateSavedList) => {
    const {videoDetailList, isLiked, isDisliked} = this.state
    const isVideoSaved = savedList?.some(
      savedVideo => savedVideo.id === videoDetailList.id,
    )

    return (
      <VideoPlayContainer>
        <ReactPlayer width="100%" url={videoDetailList.videoUrl} controls />
        <VideoName color={isDarkTheme ? '#f1f1f1' : '#1e293b'}>
          {videoDetailList.title}
        </VideoName>
        <ButtonContainer>
          <ViewsDetails>
            <Views
              color={isDarkTheme ? '#94a3b8' : '#1e293b'}
            >{`${videoDetailList.viewCount} Views`}</Views>
            <PublishedDate
              color={isDarkTheme ? '#94a3b8' : '#1e293b'}
            >{`${videoDetailList.publishedAt} ago`}</PublishedDate>
          </ViewsDetails>
          <ButtonsContainer>
            <LikeButton
              type="button"
              color={this.getButtonColor(isLiked, isDarkTheme)}
              onClick={this.toggleLike}
            >
              <AiOutlineLike /> <p className="button-name">Like</p>
            </LikeButton>
            <DislikeButton
              type="button"
              color={this.getButtonColor(isDisliked, isDarkTheme)}
              onClick={this.toggleDislike}
            >
              <AiOutlineDislike /> <p className="button-name">Dislike</p>
            </DislikeButton>
            <SaveButton
              type="button"
              color={this.getButtonColor(isVideoSaved, isDarkTheme)}
              onClick={() => this.saveVideo(updateSavedList, isVideoSaved)}
            >
              <MdPlaylistAdd />{' '}
              <p className="saved-button">{isVideoSaved ? 'Saved' : 'Save'}</p>
            </SaveButton>
          </ButtonsContainer>
        </ButtonContainer>
        <HorizontalLine />
        <ProfileAndContentContainer>
          <Profile
            src={videoDetailList.channel.profileImgUrl}
            alt="channel logo"
          />
          <ContentContainer>
            <Name color={isDarkTheme ? '#f1f1f1' : '#1e293b'}>
              {videoDetailList.channel.name}
            </Name>
            <Subscribers
              color={isDarkTheme ? '#94a3b8' : '#1e293b'}
            >{`${videoDetailList.channel.subscriberCount} Subscribers`}</Subscribers>
            <Description color={isDarkTheme ? '#f1f1f1' : '#1e293b'}>
              {videoDetailList.description}
            </Description>
          </ContentContainer>
        </ProfileAndContentContainer>
      </VideoPlayContainer>
    )
  }

  renderResultView = (isDarkTheme, savedList, updateSavedList) => {
    const {apiStatus} = this.state
    switch (apiStatus) {
      case apiStatusConstants.success:
        return this.renderSuccessView(isDarkTheme, savedList, updateSavedList)
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
          const {isDarkTheme, savedList, updateSavedList} = value
          return (
            <>
              <Header />
              <VideoMainContainer>
                <Navbar />
                <VideoContainer
                  data-testid="videoItemDetails"
                  bgColor={isDarkTheme ? '#181818' : '#f9f9f9'}
                >
                  {this.renderResultView(
                    isDarkTheme,
                    savedList,
                    updateSavedList,
                  )}
                </VideoContainer>
              </VideoMainContainer>
            </>
          )
        }}
      </CartContext.Consumer>
    )
  }
}

export default VideoDetailsItem
