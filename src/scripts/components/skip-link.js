class SkipLink extends HTMLElement {
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
                .skip {
                    text-decoration: none;
                    color: #000;
                    font-size: 24px;
                    background-color: #0f0;
                    padding: 10px;
                    position: absolute;
                    top: -50px;
                    z-index: 100;
                }
                .skip:focus {
                    top: 100px;
                }
            </style>
            <a href="#maincontent" class="skip">Menuju ke konten</a>
        `;
    };
};

customElements.define("skip-link", SkipLink);