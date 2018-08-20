import React from 'react'
import Link from 'gatsby-link'

const IndexPage = (data) => {
  console.log('data:',data)
  return <div>
    <h1>Всім привіт</h1>
    <p>Вітаю на сторінці Design Patterns for TypeScript.</p>
    <p>Тут ви знайдете діаграми та приклади коду на TypeScript для наступних шаблонів: </p>

   <h4> Твірні шаблони</h4>

 <ul>
    <li><Link to="/page-1/">Одинак (Singleton)</Link></li>
    <li><Link to="/page-2/">Фабричний метод (Factory Method)</Link></li>
    <li><Link to="/page-3/">Абстрактна фабрика (Abstract Factory)</Link></li>
    <li><Link to="/page-4/">Будівник (Builder)</Link></li>
    <li><Link to="/page-5/">Одинак</Link></li>
    <li><Link to="/page-6/">Прототип (Prototype)</Link></li>

 </ul>
  </div>
}

export default IndexPage