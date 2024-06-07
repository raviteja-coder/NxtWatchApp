import styled from 'styled-components'

export const LoginContainer = styled.div`
  display: flex;
  background-color: ${props => props.bgColor};
  color: ${props => props.color};
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  padding: 10px;
  width: 100%;
`

export const LoginButton = styled.button`
  width: 80%;
  border-radius: 5px;
  outline: none;
  background-color: #3b82f6;
  color: #ffffff;
  border: none;
  cursor: pointer;
  height: 40px;
  font-size: 25px;
  margin-top: 30px;
`

export const Label = styled.label`
  font-weight: bold;
  width: 80%;
  margin-bottom: 5px;
  padding: 0px;
`

export const CheckboxLabel = styled.label`
  padding: 0px;
`

export const Input = styled.input`
  font-size: 20px;
  margin: 0px;

  width: 80%;
  height: 40px;
`

export const CheckboxInput = styled.input`
  margin-right: 10px;
  padding: 0px;
  height: 20px;
  width: 20px;
`

export const ShowPasswordContainer = styled.div`
  display: flex;
  flex-direction: row;
  height: 20px;
  align-items: center;
  font-size: 20px;
  width: 80%;
`

export const Form = styled.form`
  display: flex;
  border-radius: 5px;
  background-color: ${props => props.bgColor};
  width: 100%;
  flex-direction: column;
  align-items: center;
  padding: 30px;
  box-shadow: 0px 8px 40px rgba(7, 7, 7, 0.08);
  justify-content: center;
  max-width: 500px;
`

export const Logo = styled.img`
  width: 200px;
`
