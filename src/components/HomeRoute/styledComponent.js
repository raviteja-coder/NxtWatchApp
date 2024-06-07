import styled from 'styled-components'

export const HomeContainer = styled.div`
  display: flex;
`

export const HomeMainContainer = styled.div`
  background-color: ${props => props.bgColor};
  display: flex;
  min-height: 100vh;
  padding-top: 50px;
  margin-left: 250px;
  font-family: 'Roboto';
  width: 100%;
  flex-direction: column;
`

export const SearchButton = styled.button`
  border: none;
  background-color: ${props => props.bgColor};
  cursor: pointer;
  height: 100%;
  outline: none;
`

export const SuccessContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
`

export const ThumbnailContainer = styled.div`
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
`
export const ViewsContainer = styled.div`
  display: flex;
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
export const PopupContainer = styled.div`
  background-image: url('https://assets.ccbp.in/frontend/react-js/nxt-watch-banner-bg.png');
  height: 250px;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 30px;
  background-size: cover;
`

export const GetButton = styled.button`
  background-color: transparent;
  border: 1px solid #000000;
  align-self: start;
  padding: 5px 10px 5px 10px;
`

export const Description = styled.p`
  font-size: 20px;
  width: 40%;
`

export const CloseBtn = styled.button`
  height: 20px;
  width: 20px;
  font-size: 20px;
  cursor: pointer;
  border: none;
  background-color: transparent;
`

export const LogoImage = styled.img`
  width: 150px;
`

export const HomeLogoContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`
export const HomeSubContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px;
  flex-wrap: wrap;
`

export const SearchContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
  width: 40%;
  border: 1px solid ${props => props.border};
  min-width: 230px;
`

export const SearchInput = styled.input`
  width: 100%;
  color: ${props => props.color};
  outline: none;
  background-color: ${props => props.bgColor};
  height: 30px;
  border-right: 1px solid ${props => props.border};
  border-left: none;
  border-top: none;
  border-bottom: none;
`
export const LoadingContainer = styled.div`
  display: flex;
  height: 50vh;
  flex-direction: column;
  justify-content: center;
  align-items: center;
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
