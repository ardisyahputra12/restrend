import data from "../../public/data/DATA.json";

class CatalogList extends HTMLElement {
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
                .title {
                    margin: 50px 0 15px;
                    font-size: 28px;
                    text-align: center;
                    text-decoration: underline;
                    color: #F97B22;
                }
                .caption {
                    text-align: center;
                    font-size: 20px;
                    padding: 0 20px;
                    margin-bottom: 30px;
                }
                .wrapper {
                    display: flex;
                    flex-direction: row;
                    flex-wrap: wrap;
                    justify-content: center;
                    padding: 0 10px 50px;
                }
                .content {
                    width: 300px;
                    margin: 15px;
                    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
                    border-radius: 4px;
                }
                .content:hover {
                    position: relative;
                    bottom: 5px;
                    transition-duration: 0.7s;
                    box-shadow: rgba(0, 0, 0, 0.24) 0 1px 1px;
                }
                .picture {
                    position: relative;
                }
                .picture h3 {
                    position: relative;
                    top: 20px;
                    z-index: 10;
                    padding: 4px 0 4px 12px;
                    width: 60%;
                    background-color: #F97B22;
                    color: #FFF;
                }
                .picture img {
                    position: absolute;
                    top: 0;
                    width: 100%;
                    height: 200px;
                    object-fit: cover;
                    border-radius: 4px 4px 0 0;
                }
                .desc {
                    margin-top: 180px;
                    padding: 10px 20px 30px;
                }
                .desc h2 {
                    color: #F97B22;
                }
                .desc h3 {
                    margin: 20px 0 10px;
                }
                .desc p {
                    line-height: 1.7;
                    font-family: 'Lato', sans-serif;
                }
                @media screen and (min-width: 1200px) {
                    .title {
                        margin: 80px 0 20px;
                        font-size: 32px;
                    }
                    .wrapper {
                        padding: 0 10px 80px;
                    }
                    .content {
                        width: 350px;
                        margin: 20px;
                    }
                }
            </style>
            <h2 class="title" tabindex="0">Explore Restaurant</h2>
            <p class="caption" tabindex="0">Find your favorite restaurant and satisfy yourself here</p>
            <article class="wrapper"></article>
        `;

        data.restaurants.forEach(restaurant => {
            const { name, description, pictureId, city, rating } = restaurant;
            this.shadowDOM.querySelector(".wrapper").innerHTML += `
                <article class="content">
                    <div class="picture">
                        <h3 tabindex="0">Kota. ${city}</h3>
                        <img src="${pictureId}" alt="${name} in ${city}" tabindex="0">
                    </div>
                    <div class="desc">
                        <h2 tabindex="0">${name}</h2>
                        <h3 tabindex="0">Rating: ${rating}</h3>
                        <p tabindex="0">${description.substring(0, 250)}...</p>
                    </div>
                </article>
            `;
        });
    };
};

customElements.define("catalog-list", CatalogList);