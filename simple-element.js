class SimpleElement extends Polymer.Element {
    static get is() { return 'simple-element'; }
    static get properties() {
    return {
            prop1: {
            type: String,
            value: 'simple-element'
            }
        };
    }
}

window.customElements.define(SimpleElement.is, SimpleElement);
