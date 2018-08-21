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
    <li><Link to="/page-2/">Фабричний метод (Factory Method) - To ba addedd..</Link></li>
    <li><Link to="/page-3/">Абстрактна фабрика (Abstract Factory) - To ba addedd..</Link></li>
    <li><Link to="/page-4/">Будівник (Builder) - To ba addedd..</Link></li>
    <li><Link to="/page-5/">Прототип (Prototype) - To ba addedd..</Link></li>

 </ul>
  </div>
}

export default IndexPage