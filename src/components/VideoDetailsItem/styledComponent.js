import styled from 'styled-components'

export const VideoContainer = styled.div`
  background-color: ${props => props.bgColor};
  display: flex;
  min-height: 100vh;
  padding: 60px 10px 10px 10px;
  margin-left: 250px;
  font-family: 'Roboto';
  width: 100%;
  flex-direction: column;
`

export const ButtonContainer = styled.div`
  display: flex;
  color: ${props => props.color};
  justify-content: space-between;
  width: 100%;
  align-items: center;
`

export const ViewsDetails = styled.div`
  display: flex;
  color: ${props => props.color};
  align-items: center;
`

export const Views = styled.p`
  font-family: 'Roboto';
  font-size: 13px;
  color: ${props => props.color};
`

export const PublishedDate = styled.p`
  font-family: 'Roboto';
  font-size: 13px;
  margin-left: 5px;
  color: ${props => props.color};
`

export const VideoName = styled.h1`
  font-size: 15px;
  color: ${props => props.color};
`

export const ButtonsContainer = styled.div`
  display: flex;
  align-items: center;
`

export const LikeButton = styled.button`
  display: flex;
  align-items: center;
  color: ${props => props.color};
  background-color: transparent;
  border: none;
`

export const DislikeButton = styled.button`
  display: flex;
  align-items: center;
  color: ${props => props.color};
  background-color: transparent;
  border: none;
`

export const ProfileAndContentContainer = styled.div`
  display: flex;
`
export const Profile = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 100px;
  margin-top: 10px;
  margin-right: 20px;
`
export const Subscribers = styled.p`
  color: ${props => props.color};
  margin: 0px;
`

export const Description = styled.p`
  color: ${props => props.color};
  font-family: 'Roboto';
`

export const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
`

export const Name = styled.p`
  font-family: 'Roboto';
  color: ${props => props.color};
  font-size: 15px;
`

export const HorizontalLine = styled.hr`
  color: ${props => props.color};
  width: 100%;
`

export const SaveButton = styled.button`
  display: flex;
  align-items: center;
  color: ${props => props.color};
  background-color: transparent;
  border: none;
`

export const LoadingContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 70vh;
  justify-content: center;
  align-items: center;
`

export const VideoPlayContainer = styled.div`
  display: flex;
  flex-direction: column;
`

export const VideoMainContainer = styled.div`
  display: flex;
`
export const FailedContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  height: 100vh;
  align-items: center;
`

export const FailedImage = styled.img`
  width: 200px;
`

export const FailureHeading = styled.h1`
  font-size: 20px;
  font-family: 'Roboto';
  color: ${props => props.color};
`

export const FailedDescription = styled.p`
  font-size: 18px;
  color: ${props => props.color};
  font-family: 'Roboto';
`
export const FailureButton = styled.button`
  font-size: 20px;
  background-color: #4f46e5;
  color: #ffffff;
  padding: 5px 10px 5px 10px;
  font-family: 'Roboto';
`
