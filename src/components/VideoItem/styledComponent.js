import styled from 'styled-components'

export const ThumbnailContainer = styled.li`
  display: flex;
  margin-right: 10px;
  margin-bottom: 10px;
  width: 200px;
  flex-direction: column;
`
export const ThumbnailContentContainer = styled.div`
  width: 100%;
  background-color: transparent;
  padding: 5px;
`
export const Views = styled.p`
  font-family: 'Roboto';
  font-size: 13px;
  color: ${props => props.color};
`
export const PostedDate = styled.p`
  font-family: 'Roboto';
  font-size: 13px;
  margin-left: 5px;
  color: ${props => props.color};
`
export const ProfileAndContentContainer = styled.div`
  display: flex;
`
export const Profile = styled.img`
  width: 30px;
  height: 30px;
  border-radius: 100px;
  margin-top: 10px;
`

export const Name = styled.p`
  font-family: 'Roboto';
  color: ${props => props.color};
  font-size: 15px;
  margin: 0px;
  padding: 0px;
`
export const ViewsContainer = styled.div`
  display: flex;
  margin: 0px;
  padding: 0px;
`

export const VideoHeading = styled.h1`
  font-family: 'Roboto';
  color: ${props => props.color};
  font-size: 12px;
  font-weight: 400;
`

export const ThumbnailImage = styled.img`
  width: 100%;
`
