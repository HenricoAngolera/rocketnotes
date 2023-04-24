import { Container, Profile } from './styles';

export function Header(){
  return(
    <Container>
      <Profile>
        <img 
          src ="https://github.com/HenricoAngolera.png"
          alt = "Foto do usuário" 
        />

        <div>
          <span>Bem-vindo</span>
          <strong>Henrico Angolera</strong>
        </div>
      </Profile>
    </Container>
  )
}