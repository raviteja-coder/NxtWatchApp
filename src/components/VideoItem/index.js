import {Link} from 'react-router-dom'
import {
  ThumbnailContentContainer,
  ProfileAndContentContainer,
  Views,
  Name,
  ViewsContainer,
  ThumbnailContainer,
  ThumbnailImage,
  PostedDate,
  Profile,
  VideoHeading,
} from './styledComponent'
import './index.css'

const VideoItem = props => {
  const {video, isDarkTheme} = props
  const titleColor = isDarkTheme ? '#e2e8f0' : '#231f20'
  const nameColor = isDarkTheme ? '#64748b' : '#64748b'
  return (
    <Link className="link" to={`/videos/${video.id}`}>
      <ThumbnailContainer key={video.id}>
        <ThumbnailImage src={video.thumbnailUrl} alt="video thumbnail" />
        <ProfileAndContentContainer>
          <Profile src={video.channel.profileImgUrl} alt="channel logo" />
          <ThumbnailContentContainer>
            <VideoHeading color={titleColor}>{video.title}</VideoHeading>
            <Name color={nameColor}>{video.channel.name}</Name>
            <ViewsContainer>
              <Views color={nameColor}>{`${video.viewCount} Views`}</Views>
              <PostedDate
                color={nameColor}
              >{`${video.publishedAt} ago`}</PostedDate>
            </ViewsContainer>
          </ThumbnailContentContainer>
        </ProfileAndContentContainer>
      </ThumbnailContainer>
    </Link>
  )
}

export default VideoItem
