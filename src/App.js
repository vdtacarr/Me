import logo from './logo.svg';
import './App.css';
import  "./css/global.css"
import "./css/main.css"
import "./css/mobile.css"
import "./css/tablet.css"

function App() {
  return (
    <div className="App">
      <header class="bg-dark-blue">
        <div class="container">
            <nav id="navbar">
            
                <h1 class="heading-small">Vedat Acar</h1>
                <ul >
                    <li><a href="#home">Ana Sayfa</a></li>
                    <li><a href="#training">Eğitimler</a></li>
                    <li><a href="#courses">Kurslar</a></li>
                    <li><a href="#contact">Contact</a></li>
                </ul>
                </nav>
        </div>
        
    </header>




<section id="home">
        <img src="images/vedat_acar.jpg" alt="Vedat Acar"/>
        <div class="name text-center">
            <h2 class="heading-big">Vedat Acar</h2>
            <p>Electrical Electronics Engineer</p>

        </div>
        <a href="#courses" class="btn btn-primary btn-block">Kurslara Git</a>
</section>




<section id="training" class="bg-dark-blue">
<h3 class="text-center heading-medium">Eğitimler</h3>
<div class="items">
 <article class="item">
     <i class="fa fa-pencil-alt"></i>
    <h3>Sınıf İçi Eğitimler</h3>
    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Commodi, nobis.</p>
</article>
<article class="item">
    <i class="fa fa-pencil-alt"></i>
   <h3>Online İçerikler</h3>
   <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Commodi, nobis.</p>
</article>
<article class="item">
    <i class="fa fa-pencil-alt"></i>
   <h3>Konferanslar</h3>
   <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Commodi, nobis.</p>
</article>
</div>
    </section>

    </div>
  );
}

export default App;
