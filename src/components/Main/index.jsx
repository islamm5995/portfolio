import React from 'react'
import css from './Main.css'
import is from '../img/is.png'

function MainPage() {
  return (
    <div className={css.conteiner}>
      <div className="container">
      <header className="header">
        <a href="" className="logo">Islamm</a>
        <nav className="navbar">
            <a href="#" className="active">Home</a>
            <a href="#">About</a>
            <a href="#">Services</a>
            <a href="#">Portfolio</a>
            <a href="#">Contack</a>
        </nav>
    </header>

    <section className="home">

        <div className="home-content">
            <h1>Hi, I'm Islamm </h1>
            <h3>Front-End Developer</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. At,  architecto nulla. Molestiae, libero doloribus. Fuga reprehenderit eum ullam ratione expedita!</p>
            <div className="btn-box">
                <a href="#">Hire Me</a>
                <a href="#">Let's Talk</a>
            </div>
        </div>
    <img className='is' src={is} alt="" />

    </section>
      </div>
    </div>
  )
}

export default MainPage;
