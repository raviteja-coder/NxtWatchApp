import {Link} from 'react-router-dom'
import {MdPlaylistAdd} from 'react-icons/md'
import CartContext from '../../context/CartContext'
import Header from '../Header'
import Navbar from '../Navbar'

import {
  SavedContainer,
  SavedThumbnailContainer,
  NoSavedImageContainer,
  NoSavedImage,
  NoSavedHeading,
  NoSavedDescription,
  SavedVideosUl,
  SavedHeading,
  SavedThumbnail,
  SavedThumbnailContentContainer,
  VideoHeading,
  Name,
  Views,
  ViewsContainer,
  PostedDate,
} from './styledComponents'
import './index.css'

const SavedVideos = () => (
  <CartContext.Consumer>
    {value => {
      const {isDarkTheme, savedList} = value
      const titleColor = isDarkTheme ? '#e2e8f0' : '#231f20'
      const nameColor = isDarkTheme ? '#64748b' : '#64748b'
      return (
        <>
          <Header />
          <SavedContainer
            data-testid="savedVideos"
            bgColor={isDarkTheme ? '#0f0f0f' : '#f9f9f9'}
          >
            <Navbar />
            <div className="saved-heading">
              <MdPlaylistAdd className="trending-icon" />
              <SavedHeading color={isDarkTheme ? '#f9f9f9' : '#0f0f0f'}>
                Saved Videos
              </SavedHeading>
            </div>
            <div>
              {savedList.length > 0 ? (
                <SavedVideosUl>
                  {savedList.map(video => (
                    <Link className="link" to={`videos/${video.id}`}>
                      <SavedThumbnailContainer key={video.id}>
                        <SavedThumbnail
                          src={video.thumbnailUrl}
                          alt="video thumbnail"
                        />
                        <SavedThumbnailContentContainer>
                          <VideoHeading color={titleColor}>
                            {video.title}
                          </VideoHeading>
                          <Name color={nameColor}>{video.channel.name}</Name>
                          <ViewsContainer>
                            <Views
                              color={nameColor}
                            >{`${video.viewCount} Views`}</Views>
                            <PostedDate
                              color={nameColor}
                            >{`${video.publishedAt} ago`}</PostedDate>
                          </ViewsContainer>
                        </SavedThumbnailContentContainer>
                      </SavedThumbnailContainer>
                    </Link>
                  ))}
                </SavedVideosUl>
              ) : (
                <NoSavedImageContainer>
                  <NoSavedImage
                    src="https://assets.ccbp.in/frontend/react-js/nxt-watch-no-saved-videos-img.png"
                    alt="no saved videos"
                  />
                  <NoSavedHeading color={isDarkTheme ? '#d7dfe9' : '#000000'}>
                    No saved videos found
                  </NoSavedHeading>
                  <NoSavedDescription
                    color={isDarkTheme ? '#d7dfe9' : '#000000'}
                  >
                    Save your videos by clicking a button
                  </NoSavedDescription>
                </NoSavedImageContainer>
              )}
            </div>
          </SavedContainer>
        </>
      )
    }}
  </CartContext.Consumer>
)
export default SavedVideos
