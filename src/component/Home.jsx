import React from 'react';

import { Link } from 'react-router-dom';

import logo from './img/gpt-logo.png'
import logoSlide from './img/logo.png'
import logoInsta from './img/instagram.svg'
import logoLink from './img/youtube.svg'
import logoYou from './img/linkedin.svg'

import './Home.css';

import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import "swiper/css/pagination";
import "swiper/css/navigation";
import 'swiper/css/scrollbar';

function Home () {
  return (
  <div className="App">
    <header className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
    </header>

    <Swiper
    modules={[Navigation, Pagination, Scrollbar, A11y]}
    spaceBetween={50}
    slidesPerView={1}
    navigation
    pagination={{ clickable: true }}
    scrollbar={{ draggable: true }}
    onSwiper={(swiper) => console.log(swiper)}
    onSlideChange={() => console.log('slide change')}
    >
    <SwiperSlide>
      <div className='test'>
        <img src={logoSlide} className="logo-slide" alt="#" />
        </div>
    </SwiperSlide>

    <SwiperSlide>
      <div className='test'>
        <h2>
        ChatGPT, que significa transformador pré-treinado gerador de conversas, é um protótipo de um chatbot com inteligência artificial desenvolvido pela OpenAI e especializado em diálogo. O chatbot é um modelo de linguagem ajustado com técnicas de aprendizado supervisionado e por reforço.
        </h2>
      </div>
    </SwiperSlide>
    <SwiperSlide>
      <div className='test'>
      <img src={logoSlide} className="logo-slide" alt="#" />
      </div>
      </SwiperSlide>
    
    </Swiper>

    <div className='pre-footer'>
      <h3>
        Use esse link para ter acesse a nossa API do ChatGPT, e poder conversar com a inteligência artificial.
      </h3>
      <p>Confira o <Link to='/About'>ChatGPT</Link> .</p> 
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
  )
}

export default Home;
