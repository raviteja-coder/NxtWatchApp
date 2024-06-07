import styled from 'styled-components'

export const NavbarContainer = styled.nav`
  margin-top: 50px;
  padding-top: 30px;
  position: fixed;
  display: flex;
  background-color: ${props => props.bgColor};
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
  height: 94vh;
  width: 250px;
  color: ${props => props.color};
`

export const ContactUsHeading = styled.p`
color:${props => props.color}
font-size:10px;
font-weight:500;
`

export const ImagesContainer = styled.div`
  display: flex;
  align-items: center;
`

export const Image = styled.img`
  width: 30px;
  margin-right: 15px;
`

export const IconButton = styled.button`
  border: none;
  background-color: transparent;
  background-color: ${props => props.bgColor};
  width: 250px;
  padding: 10px;
  display: flex;
  align-items: center;
  outline: none;
  height: 40px;
  cursor: pointer;
`

export const Description = styled.p`
  color: ${props => props.color};
`
