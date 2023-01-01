/**
 * Функция выступает в роли сервера
 */
import { from, map } from 'rxjs';

let nextId = 2;
export const services = [
  { id: nextId++, name: 'Ремонт стекла', price: 21000, content: 'Стекло оригинал от Apple'},
  { id: nextId++, name: 'Замена дисплея', price: 25000, content: 'Дисплей оригинал от Foxconn'},
  { id: nextId++, name: 'Заменить аккумулятор', price: 4000, content: 'Новый на 4000 mAh'},
  { id: nextId++, name: 'Заменить микрофон', price: 2500, content: 'Оригинальный от Apple'},
  { id: nextId++, name: 'Разблокировка', price: 2500, content: 'Оригинальный от Apple'},
];

function giveResult(data) {
  const rand = Math.floor(Math.random() * 10);
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if(!data) {resolve(['']); return;}
      const res = services.filter((o) => o.name.toLowerCase().startsWith(data.toLowerCase()));
      if(rand < 8) {
        if(res.length !== 0) {resolve(res);} else {reject('Не верный запрос');} 
      } else {
        reject('Упс!! Сбой на сервере!! Пожалуйста повторите ввод.');
      }
    }, rand < 4? rand * 1000: 1000);
  })
}

export default function diveResult$(data) {
  return from(giveResult(data)).pipe(map((response) => response));
}
