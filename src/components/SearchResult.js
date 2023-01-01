import React from 'react';
import gif from '../load.gif';

export const SearchResult = ({ data }) => {
  const { result, loading, error } = data;
  const res_V_search = result.length?
  result.map((el, index) => { return( el.id? <p key={index}>Услуга: "{el.name}" цена: "{el.price}"</p>: null)}):
  <p>Введите что-нибудь для поиска</p>;
    const load = <p>loading. . . <img className='load' src={gif} alt='loading'/></p>;
    const err = <p>{error}</p>
  return (
    <div className='result'>
      {error? err:
        loading? load: res_V_search}
    </div>
  )
}

