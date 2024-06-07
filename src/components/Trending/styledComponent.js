import styled from 'styled-components'

export const TrendingContainer = styled.div`
  display: flex;
  background-color: ${props => props.bgColor};
  margin-left: 250px;
  min-height: 100vh;
  width: 100%;
  padding-top: 50px;
  flex-direction: column;
`

export const TrendingIconContainer = styled.div`
  display: flex;
  align-items: center;
  padding-left: 50px;
`

export const TrendingMainContainer = styled.div`
  display: flex;
`

export const TrendingHeading = styled.h1`
  color: ${props => props.color};
`
export const LoadingContainer = styled.div`
  display: flex;
  height: 70vh;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export const TrendingThumbnailContentContainer = styled.div`
  display: flex;
  padding-left: 30px;
  flex-direction: column;
`

export const TrendingThumbnailContainer = styled.li`
  padding: 10px;
  display: flex;
  background-color: ${props => props.bgColor};
`

export const TrendingThumbnail = styled.img`
  width: 260px;
`
export const Views = styled.p`
  font-family: 'Roboto';
  font-size: 15px;
  color: ${props => props.color};
`
export const PostedDate = styled.p`
  font-family: 'Roboto';
  font-size: 15px;
  margin-left: 5px;
  color: ${props => props.color};
`
export const ViewsContainer = styled.div`
  display: flex;
  margin: 0px;
  padding: 0px;
`

export const VideoHeading = styled.h1`
  font-family: 'Roboto';
  color: ${props => props.color};
  font-size: 20px;
  font-weight: 400;
`

export const Name = styled.p`
  font-family: 'Roboto';
  color: ${props => props.color};
  font-size: 18px;
  margin: 0px;
  padding: 0px;
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
  color: ${props => props.color};
  font-family: 'Roboto';
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
