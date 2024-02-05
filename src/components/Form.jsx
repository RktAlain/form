import './Form.css';

function Form() {
  const inputs = document.querySelectorAll(".input-field");
  const bullets = document.querySelectorAll(".bullets span");
  const images = document.querySelectorAll(".image");
  
  inputs.forEach((inp) => {
    inp.addEventListener("focus", () => {
      inp.classList.add("active");
    });
    inp.addEventListener("blur", () => {
      if (inp.value !== "") return;
      inp.classList.remove("active");      
    });
  });
  
  const handleToggleClick = () => {
    const mainElement = document.querySelector("main");
  
    if (mainElement) {
      mainElement.classList.toggle("sign-up-mode");
    }
  };
  
  function moveSlider() {
    let index = this.dataset.value;
  
    let currentImage = document.querySelector(`.img-${index}`);
    images.forEach((img) => img.classList.remove("show"));
    currentImage.classList.add("show");
  
    const textSlider = document.querySelector(".text-group");
    textSlider.style.transform = `translateY(${-(index - 1) * 2.2}rem)`;
  
    bullets.forEach((bull) => bull.classList.remove("active"));
    this.classList.add("active");
  }
  
  bullets.forEach((bullet) => {
    bullet.addEventListener("click", moveSlider);
  });
  
  
  return (
    <div>
    <main>
      <div className="box">
        <div className="inner-box">
          <div className="forms-wrap">
            <form action="index.html" autocomplete="off" className="sign-in-form">
              <div className="logo">
                <img src="./img/logo.png" alt="easyclass" />
                <h4>InstaChat</h4>
              </div>

              <div className="heading">
                <h2>Bon retour parmis nous !</h2>
                <h6>Vous n’êtes pas encore inscrit ?</h6>
                <button type="button" className="toggle" onClick={handleToggleClick}>
                  S'inscrire
                </button>
              </div>

              <div className="actual-form">
                <div className="input-wrap">
                  <input type="text" minlength="4" className="input-field" autocomplete="off" required/>
                  <label>Nom</label>
                </div>

                <div className="input-wrap">
                  <input type="password" minlength="4" className="input-field" autocomplete="off" required />
                  <label>Mot de passe</label>
                </div>

                <input type="submit" value="Se connecter" className="sign-btn" />

                <p className="text">
                  Mot de passe oublié ?
                  <a href="https://example.com">Get help</a> signing in
                </p>
              </div>
            </form>

            <form action="index.html" autocomplete="off" className="sign-up-form">
              <div className="logo">
                <img src="./img/logo.png" alt="easyclass" />
                <h4>InstaChat</h4>
              </div>

              <div className="heading">
                <h2>C'est partit</h2>
                <h6>Etes-vous prêt à créer votre compte?</h6>
                <button type="button" className="toggle" onClick={handleToggleClick}>
                  Se connecter
                </button>
              </div>

              <div className="actual-form">
                <div className="input-wrap">
                  <input type="text" minlength="4" className="input-field" autocomplete="off" required />
                  <label>Nom</label>
                </div>

                <div className="input-wrap">
                  <input type="email" className="input-field" autocomplete="off" required/>
                  <label>Email</label>
                </div>

                <div className="input-wrap">
                  <input type="password" minlength="4" className="input-field" autocomplete="off" required/>
                  <label>Mot de passe</label>
                </div>

                <input type="submit" value="S'inscrire'" className="sign-btn" />

                <p className="text">
                En m’inscrivant, j’accepte les
                  <a href="https://example.com">Termes et Services</a> et
                  <a href="https://example.com">les confidentialités</a>
                </p>
              </div>
            </form>
          </div>

          <div className="carousel">
            <div className="images-wrapper">
              <img src="./img/image1.png" className="image img-1 show" alt="" />
              <img src="./img/image2.png" className="image img-2" alt="" />
              <img src="./img/image3.png" className="image img-3" alt="" />
            </div>

            <div className="text-slider">
              <div className="text-wrap">
                <div className="text-group">
                  <h2>Discuter en toutes sécurité</h2>
                  <h2>Rapprochez-vous des autres</h2>
                  <h2>Inviter vos amis</h2>
                </div>
              </div>

              <div className="bullets">
                <span className="active" data-value="1"></span>
                <span data-value="2"></span>
                <span data-value="3"></span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
    </div>
  );
}

export default Form;
