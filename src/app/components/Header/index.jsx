"use client"

import './style.css';

import {React,useState} from 'react';

export default function Header() {
    return (
      <div>
        <div className="nav">
          <div class="logo">
            <img src='/images/logoWater.png' alt='logo'/>
          </div>
          <div class="nav-item">Promoções</div>
          <div class="nav-item">Sobre Nós</div>
          <div class="nav-item">Carrinho</div>
        </div>
      </div>
    );
  }


