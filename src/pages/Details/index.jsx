import { Container, Links, Content } from './styles';

import { Tag } from '../../components/Tag';
import { Button } from '../../components/Button';
import { Header } from '../../components/Header';
import { Section } from '../../components/Section';
import { ButtonText } from '../../components/ButtonText';

export function Details() {
  return(
    <Container>
      <Header />
      <main>
        <Content>
          <ButtonText title='Excluir Nota'/>
          
          <h1>Introdução ao React</h1>

          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestias ipsum, excepturi eaque cumque perspiciatis eos dolorum mollitia exercitationem totam quos dolore dolorem, voluptatum ipsam? Quo facilis distinctio non ipsam dolorum! Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita praesentium facilis maiores accusantium totam id. Ipsam ad ex velit atque vitae porro corrupti dolorum doloribus, totam, possimus natus nam dolorem.</p>
          <Section title='Links úteis'>
            <Links>
              <li>
                <a href="#">https://www.rocketseat.com.br</a>
              </li>
            </Links>
          </Section>

          <Section title='Marcadores'>
            <Tag title='express'/>
            <Tag title='node.js'/>
          </Section>
          <Button title="Voltar"/>

        </Content>
      </main>
    </Container>
  );
}