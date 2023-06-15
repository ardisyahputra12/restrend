class HeroElement extends HTMLElement {
    constructor() {
        super();
        this.shadowDOM = this.attachShadow({ mode: "open" });
    };

    connectedCallback() {
        this.render();
    };

    render() {
        this.shadowDOM.innerHTML = `
            <style>
                .hero {
                    position: relative;
                }
                img {
                    width: 100%;
                }
                .hero-content {
                    position: absolute;
                    top: 10%;
                    left: 0;
                    right: 0;
                    text-align: center;
                    color: #FFF;
                    font-weight: bold;
                    font-size: 40px;
                    letter-spacing: 0.6rem;
                    text-shadow: #F97B22 0px 14px 28px, #F97B22 0px 10px 10px;
                }
                @media screen and (min-width: 1200px) {
                    img {
                        min-width: 1000px;
                        margin: 0 auto;
                        display: block;
                    }
                }
                @media screen and (min-width: 670px) {
                    .hero-content {
                        top: 12%;
                        color: #FFF;
                        font-size: 68px;
                        letter-spacing: 2rem;
                    }
                }
            </style>
            <section class="hero">
                <img src="./images/heros/hero-image.jpg" alt="Hero Element" tabindex="0">
                <p class="hero-content" tabindex="0">Restrend</p>
            </section>
        `;
    };
};

customElements.define("hero-element", HeroElement);