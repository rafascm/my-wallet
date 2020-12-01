import styled from 'styled-components'

const AppContainer: React.FC = ({ children }) => {
  return <Container>{children}</Container>
}

export default AppContainer

const Container = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100vw;
  height: 100vh;
  padding: 1rem;
`
