import React from 'react';
import { FooterBase } from './styles';
import Logo from '../../assets/img/Logo.png'

function Footer() {
  return (
    <FooterBase>
      <a href="https://github.com/jcruz375">
        Logo
        {/*<img src={Logo} alt="Logo Alura" />*/}
      </a> <label>Meu GitHub</label>
      <p>
        Criado durante a Imersão React da Alura
      </p>

    </FooterBase>
  );
}

export default Footer;
