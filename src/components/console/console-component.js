import { LitElement, html, css, nothing } from 'lit-element';
import styles from './console-component.css' assert { type: 'css' }
export class ConsoleComponent extends LitElement {
    static styles = [styles]

    static get properties() {
        return {
            imgSelect :{
                type : Boolean
            },
            img:{
                type: String
            }

        }
    }

    constructor() {
        super()
        this.imgSelect=false
    }

    render() {
        return html`
        <div class='container'>
            <div class='title-container'>
                <h1>${this.imgSelect ? 'Xbox Series X' : 'Playstation 5'}</h1>
                <button class=${this.imgSelect ? 'buttonXbox' : 'buttonPs5'}>BUY NOW</button>
            </div>
        </div>
        `;
    }
}
customElements.define('console-component', ConsoleComponent);