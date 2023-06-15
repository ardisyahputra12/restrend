class AppBar extends HTMLElement {
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
                * {
                    margin: 0;
                    padding: 0;
                    box-sizing: border-box;
                }
                .wrapper {
                    height: 70px;
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    padding: 0 40px;
                    background-color: #FEE8B0;
                    position: sticky;
                    top: 0;
                    z-index: 99;
                }
                h1 {
                    font-family: 'Lobster', cursive;
                    font-size: 40px;
                    color: #F97B22;
                }
                #drawer {
                    display: flex;
                    flex-direction: row;
                }
                #drawer a {
                    text-decoration: none;
                    color: #F97B22;
                    display: block;
                    font-size: 20px;
                    padding: 0 25px;
                }
                #drawer a:hover,
                #drawer a:focus {
                    text-decoration: underline;
                }
                #tab-menu {
                    display: none;
                }
                @media screen and (max-width: 670px) {
                    .wrapper {
                        height: 60px;
                        padding: 0 20px;
                    }
                    h1 {
                        font-size: 36px;
                    }
                    #drawer {
                        width: 100%;
                        top: 60px;
                        left: 0;
                        text-align: center;
                        position: absolute;
                        transform: translate(-100%, 0);
                        transition: transform 0.3s ease-in-out;
                        background-color: #FEE8B0;
                        border-top: 1px solid #fff;
                        flex-direction: column;
                    }
                    #drawer.open {
                        transform: translate(0,0)
                    }
                    #drawer a {
                        padding: 15px;
                        border-top: 1px solid #fff;
                    }
                    button {
                        background-color: transparent;
                        border: none;
                        padding: 10px;
                    }
                    #tab-menu img {
                        width: 30px;
                    }
                    #tab-menu {
                        display: block;
                    }
                }
            </style>
            <header class="wrapper">
                <h1 tabindex="0">Restrend</h1>
                <nav id="drawer">
                    <a href="/">Home</a>
                    <a href="#">Favorite</a>
                    <a href="https://www.linkedin.com/in/ardisaputra2022/">About Us</a>
                </nav>
                <button id="tab-menu">
                    <img src="./icons/hamburger-icon.svg" alt="open menu" tabindex="0">
                </button>
            </header>
        `;

        const tabMenuElement = this.shadowDOM.querySelector("#tab-menu");
        const drawerElement = this.shadowDOM.querySelector("#drawer");
        tabMenuElement.addEventListener("click", ev => {
            drawerElement.classList.toggle("open");
            tabMenuElement.innerHTML = drawerElement.classList.contains("open")
                ? `<img src="./icons/close-icon.svg" alt="close menu" tabindex="0">`
                : `<img src="./icons/hamburger-icon.svg" alt="open menu" tabindex="0">`;
            ev.stopPropagation();
        });
    };
};

customElements.define("app-bar", AppBar);