import styled from 'styled-components'

export const SavedThumbnailContentContainer = styled.div`
  display: flex;
  padding-left: 30px;
  flex-direction: column;
`

export const SavedThumbnailContainer = styled.li`
  padding: 10px;
  margin-left: 250px;
  display: flex;
  background-color: ${props => props.bgColor};
`

export const SavedHeading = styled.h1`
  color: ${props => props.color};
`

export const NoSavedHeading = styled.h1`
  color: ${props => props.color};
`

export const NoSavedImageContainer = styled.div`
  padding: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  height: 100%;

  padding-top: 50px;
  background-color: ${props => props.bgColor};
`

export const NoSavedImage = styled.img`
  width: 200px;
`
export const NoSavedDescription = styled.p`
  color: ${props => props.color};
`

export const SavedVideosUl = styled.ul`
  padding: 0px;
`

export const SavedThumbnail = styled.img`
  width: 260px;
  height: 150px;
  border-radius: 5px;
  padding-top: 10px;
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
export const SavedContainer = styled.div`
  display: flex;
  flex-direction: column;

  height: 100vh;
  width: 100%;
  background-color: ${props => props.bgColor};
`
