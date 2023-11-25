"use client";
import { useState, useEffect } from 'react';
import Input from './Input';

const suggestions = [
  "Hospital Israelita Albert Einstein, São Paulo - SP",
  "Eye Clinic Clínica Oftalmológica, São Paulo - SP",
  "Hospital Sírio Libanês, São Paulo - SP",
  "Hospital Alemão Oswaldo Cruz, São Paulo - SP",
  "Clínica Oftalmológica Prisma Visão, Vila Mariana - SP",
  "Hospital do Coração, São Paulo - SP",
  "Vitoria Apart Hospital, Serra - ES",
  "Benatti Odontologia, Bela Vista - SP",
  "Hospital Carlos Chagas, Guarulhos - SP",
  "Family Dentistry, Campinas - SP"
];

export default function Lupa() {
  return (
    <div>
      <div>
        <Input/>
        <div>
          <ion-icon name="search-outline"></ion-icon>
        </div>
      </div>
    </div>
  );
}
