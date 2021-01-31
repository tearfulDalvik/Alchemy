export default class AlchemyBase {
    constructor(alchemyCSS = null) {
        this._css = alchemyCSS;
    }

    css(className) {
        return this._css ? this._css[className] : className;
    }
}