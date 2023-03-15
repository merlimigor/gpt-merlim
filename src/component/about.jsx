import logo from './img/gpt-logo.png';
import './About.css';

import logoInsta from './img/instagram.svg'
import logoLink from './img/youtube.svg'
import logoYou from './img/linkedin.svg'

import axios from 'axios'
import { useState } from 'react';

import { Link } from 'react-router-dom';

function About() {
  const [answer, setAnswer] = useState(" ");

 

  const client = axios.create({
    headers: {
      Authorization: `Bearer ${process.env.REACT_APP_CHATGPT_KEY}`,
    },
  });

  const handleSubmit = (e) => {
    if (e.keyCode === 13 && e.shiftKey ===false) {
      const params = {
        model: "text-davinci-003",
        prompt: e.target.value,
        max_tokens: 1000,
        temperature: 0,
      };

      
      client
        .post("https://api.openai.com/v1/completions", params)
        .then((result) => setAnswer(result.data.choices[0].text))
        .catch((err) => console.log(err))
        
        e.target.value = "";
    }
  };
  

  return (
    <div className="App">
      <header className="App-header">
        <a href="" target="#" ></a>
        <img src={logo} className="App-logo" alt="logo" />
        <Link id='voltar' to='/'>
        <button className='voltar'>Voltar</button>

        </Link>
      </header>

    <div className='chat'>
      <textarea className='answer-box' id='answer-box' value={answer}></textarea>
      <textarea className="text-box" id="text-ibox" placeholder="pergunte algo..." onKeyDown={(e) => handleSubmit(e)}></textarea>
    </div>

      <div className='footer'>
        <div className='credito'>

          <div className='coluna'><span>Início</span>
            <ul className='titulo'>
              <a href="">Home</a>
              <a href="">Cursos</a>
              <a href="">Dowloads</a>
            </ul>
          </div>
          <div className='coluna'><span>Sobre Nós</span>
            <ul className='titulo'>
              <a href="https://github.com/merlimigor?tab=repositories" target="#">Portifolio Completo</a>
              <a href="">Contato</a>
              <a href="">Blog</a>
            </ul>
          </div>
          <div className='coluna'><span>Suporte</span>
            <ul className='titulo'>
              <a href="">FAQ</a>
              <a href="">Telefones</a>
              <a href="">Chat</a>
            </ul>
          </div>
          <div className='coluna'><span>Informações</span>
            <ul className='titulo'>
              <h2>Um Projeto Merlim</h2>
            </ul>
          </div>

        </div>

      <div className='ultimo-footer'>
      <div className='solid'></div>
        <div id='logos'>
          <img src={logoInsta} className="" alt="#" />
          <img src={logoLink} className="" alt="#" />
          <img src={logoYou} className="" alt="#" />
        </div>
      </div>

      </div>
    </div>
  );
}

export default About;