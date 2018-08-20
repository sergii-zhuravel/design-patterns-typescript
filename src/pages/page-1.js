import React from 'react'
import Link from 'gatsby-link'
import Highlight from 'react-highlight'
import SingletonImg from '../images/singleton.img'
import SingletonSample from '../codesamples/singleton.sample'

const SecondPage = () => (
  <div>
    <h1>Твірні шаблони</h1>
    <h2>Одинак (Singleton)</h2>
    <div className="card">
      <header className="card-header">Для чого потрібен?</header>
      <div className="card-content">
        <div className="inner">
        Гарантує, що клас матиме тільки один екземпляр, і забезпечує глобальну точку доступу до цього екземпляра.
        </div>
      </div>
    </div>
    <hr/>
    <div className="media">
      <div className="media-left">
        <img src={`data:image/png;base64, ${SingletonImg}`} alt='Singleton UML' />
      </div>
      <div className="media-body">
        <div className="media-heading">Опис</div>
        <div className="media-content">Гарантує, що клас матиме тільки один екземпляр, і забезпечує глобальну точку доступу до цього екземпляра.</div>
      </div>
    </div>
    <Highlight className='typescript'>
      {
        SingletonSample.toString()
      }
    </Highlight>
    <Link to="/">Go back to the homepage</Link>
  </div>
)

export default SecondPage
