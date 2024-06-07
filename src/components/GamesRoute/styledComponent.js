import styled from 'styled-components'

export const GameIconContainer = styled.div`
  display: flex;
  align-items: center;
  padding-left: 50px;
`

export const GameMainContainer = styled.div`
  display: flex;
`

export const GameHeading = styled.h1`
  color: ${props => props.color};
`
export const LoadingContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 90vh;
  width: 100%;
  align-items: center;
`

export const GameContainer = styled.div`
  display: flex;
  background-color: ${props => props.bgColor};
  margin-left: 250px;
  min-height: 100vh;
  width: 100%;
  padding-top: 50px;
  flex-direction: column;
`

export const GamesContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
`

export const GameThumbnailContainer = styled.li`
  padding: 10px;
  display: flex;
  flex-direction: column;
  background-color: ${props => props.bgColor};
`

export const GameThumbnail = styled.img`
  width: 240px;
`
export const VideoHeading = styled.h1`
  font-family: 'Roboto';
  color: ${props => props.color};
  font-size: 20px;
  font-weight: 400;
`
export const Views = styled.p`
  font-family: 'Roboto';
  font-size: 15px;
  color: ${props => props.color};
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
  border: none;
  color: #ffffff;
  padding: 5px 10px 5px 10px;
  font-family: 'Roboto';
`
