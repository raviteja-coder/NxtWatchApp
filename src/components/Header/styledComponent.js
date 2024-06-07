import styled from 'styled-components'

export const ThemeButton = styled.button`
  background-color: transparent;
  cursor: pointer;
  outline: none;
  border: none;

  color: ${props => props.color};
`

export const HeaderContainer = styled.div`
  position: fixed;
  display: flex;
  justify-content: space-between;
  width: 100%;
  padding: 20px;
  align-items: center;
  height: 50px;
  background-color: ${props => props.bgColor};
`
export const LogoutButton = styled.button`
  background-color: ${props => props.bgColor};
  border-radius: 5px;
  padding: 5px 10px 5px 10px;
  color: ${props => props.color};
  margin-left: 10px;
  cursor: pointer;
  border: 1px solid ${props => props.color};
`
export const Logo = styled.img`
  width: 120px;
`
export const Profile = styled.img`
  width: 30px;
  margin-left: 10px;
  margin-right: 10px;
`
