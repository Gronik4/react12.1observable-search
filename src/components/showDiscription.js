import React from 'react';
import { services } from '../pseudoServer/GiveResult'

export const ShowDiscription = () => {
  return (
    <p>Поиск ведем по таким услугам: "{services.map((o, index) => {return(<span key={index}>{o.name}, </span>)})}"</p>
    
  )
}

