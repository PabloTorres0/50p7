import { LitElement, html, css } from 'lit-element';
import './console/console-component'
import styles from './app-init.css' assert { type: 'css' }; 

export class AppInit extends LitElement {

    static get properties(){
       return {
        ps5Active:{
            type:Boolean
        },
        xboxActive:{
            type:Boolean
        }
       }
    }

    static styles = [styles];


    handlePs5Active = () => {
        console.log('ps5')
        this.ps5Active=true
        this.xboxActive=false
    }

    handleXboxActive = () => {
        console.log('xbox')
        this.ps5Active=false
        this.xboxActive=true
    }

    handlePs5Leave = () =>{
        this.ps5Active=false
    }
    handleXbosLeave = () => {
        this.xboxActive=false
    }

    render() {
        return html`
        <div class='first-container'>
            <div class='second-container'>
                <div class=${`ps5 ${this.ps5Active ? 'ps5-active':'' } ${this.xboxActive ? 'ps5-inactive':''}`}
                    @mouseover= ${this.handlePs5Active}
                    @mouseleave= ${this.handlePs5Leave}
                >
                    <console-component .imgSelect=${false}></console-component>
                </div>
                <div class=${`xbox ${this.xboxActive ? 'xbox-active':'' } ${this.ps5Active ? 'xbox-inactive':''}`}
                    @mouseenter= ${this.handleXboxActive}
                    @mouseleave= ${this.handleXbosLeave}
                >
                    
                    <console-component .imgSelect=${true}></console-component>
                </div>
            </div>
            <div class= ${`xbox-image ${this.xboxActive ? 'xbox-image-active':'' } ${this.ps5Active ? 'xbox-image-inactive':''}`}>
                    <div class='pantalla'></div>
                    <img src='https://p4.wallpaperbetter.com/wallpaper/573/625/164/video-game-xbox-one-console-microsoft-wallpaper-preview.jpg' alt="">
                </div>
        </div>    
            
            
        `;
    }
}
customElements.define('app-init', AppInit);