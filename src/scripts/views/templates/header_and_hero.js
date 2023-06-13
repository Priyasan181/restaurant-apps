/* eslint-disable max-classes-per-file */
class HeaderElement extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
    <a href="#maincontent" class="skip-link">Menuju ke konten</a>
    <header>
        <div class="logo">The Restaurant</div>
            <button id="hamburgerButton" class="hamburger">☰</button>
            <nav id="nav"class="nav-bar">
                <ul>
                    <li>
                        <a href="#/home">Home</a>
                    </li>
                    <li>
                        <a href="#/favorite">Favorite</a>
                    </li>
                    <li>
                        <a href="https://www.linkedin.com/in/priyariskyq">About Us</a>
                    </li>
                </ul>
             
            </nav>
        </div>
    </header>
      `;
  }
}

class HeroElement extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <div class="hero">
        <div class="hero_inner">
          <h1 class="hero_title">welcome and feel</h1>
          <p class="hero_title2">the experience of eating at a famous restaurant</p>
        </div>
      </div>
        `;
  }
}

customElements.define('custom-header', HeaderElement);
customElements.define('custom-hero', HeroElement);
