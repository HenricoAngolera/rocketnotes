import { useState } from 'react';
import { Link } from 'react-router-dom';

import { useNavigate } from 'react-router-dom';

import { Header } from '../../components/Header';
import { Input } from '../../components/Input';
import { TextArea } from '../../components/TextArea';
import { NoteItem } from '../../components/NoteItem';
import { Section } from '../../components/Section';
import { Button } from '../../components/Button';

import { api } from '../../services/api';

import { Container, Form } from './styles';

export function New() {
  const [title, setTitle] = useState("")
  const [description, setDescription] = useState("")

  const [links, setLinks] = useState([])
  const [newLink, setNewLink] = useState("")

  const [tags, setTags] = useState([])
  const [newTag, setNewTag] = useState("")

  const navigate = useNavigate();

  function handleAddLink() {
    setLinks(prevState => [...prevState, newLink])
    setNewLink("")
  }

  function handleRemoveLink(deletedLink) {
    setLinks(prevState => prevState.filter(link => link !== deletedLink))
  }

  function handleAddTag() {
    setTags(prevState => [...prevState, newTag])
    setNewTag("")
  }

  function handleRemoveTag(deletedTag) {
    setTags(prevState => prevState.filter(tag => tag !== deletedTag))
  }

  async function handleNewNote() {
    if (!title) {
      return alert("Digite o título da nota")
    }
    
    if (newLink) {
      return alert("Você deixou um link no campo para adicionar, mas não clicou em adicionar. Clique para adicionar ou deixe o campo vazio")
    } 
    
    if (newTag) {
      return alert("Você deixou uma tag no campo para adicionar, mas não clicou em adicionar. Clique para adicionar ou deixe o campo vazio")
    } 

    await api.post("/notes", {
      title,
      description,
      tags,
      links
    })

    alert("Note created with success!")
    navigate("/")
  }

  return(
    <Container>
      <Header />

      <main>
        <Form>
          <header>
            <h1>Criar nota</h1>
            <Link to="/">Voltar</Link>
          </header>

          <Input
            onChange={e => setTitle(e.target.value)}
            placeholder="Título"
          />

          <TextArea 
            onChange={e => setDescription(e.target.value)}
            placeholder="Observações"
          />

          <Section title="Links Úteis">
            {
              links.map((link, index) => (
                <NoteItem 
                  key={String(index)}
                  value={link}
                  onClick={() => handleRemoveLink(link)}
                />
              )
              )
            }
            <NoteItem 
              isNew 
              placeholder="Novo link"
              value={newLink}
              onChange={e => setNewLink(e.target.value)}
              onClick={handleAddLink}
             />
          </Section>

          <Section title="Marcadores">
            <div className="tags">
              {
                tags.map((tag, index) => (
                  <NoteItem 
                    key={String(index)}
                    value={tag}
                    onClick={() => {handleRemoveTag(tag)}} 
                  />
                ))
              }
              <NoteItem 
                isNew 
                placeholder="Nova Tag" 
                onChange={e => (setNewTag(e.target.value))}
                value={newTag}
                onClick={handleAddTag}
              />
            </div>
          </Section>
          <Button 
            title="Salvar" 
            onClick={handleNewNote}
          />
        </Form>
      </main>
    </Container>
  );
}