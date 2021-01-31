import AlchemyBase from './_base';

class Alert extends AlchemyBase {
    constructor(content, css=null) {
        super(css);
        this._content = content;
    }

    duration(duration) {
        this._duration = duration;
        return this;
    }
    
    icon(icon) {
        this._icon = icon;
        return this;
    }

    warn() {
        this._icon = this._icon || "fa-exclamation-circle";
        this._style = super.css('warn');
        this._show();
    }

    primary() {
        this._icon = this._icon || "fa-info-circle";
        this._style = null;
        this._show();
    }

    success() {
        this._icon = this._icon || "fa-check";
        this._style = super.css('success');
        this._show();
    }

    error() {
        this._icon = this._icon || "fa-times-octagon";
        this._style = super.css('error');
        this._show();
    }

    info() {
        this._icon = this._icon || "fa-info-circle";
        this._style = super.css('info');
        this._show();
    }
    
    _show() {
        if (!document.getElementById("alchemy-alerts")) {
            let container = document.createElement('div');
            container.id = "alchemy-alerts";
            container.className = super.css('alerts');
            document.body.prepend(container);
        }
        let newDiv = document.createElement("div");
        newDiv.classList.add(super.css('alert'));
        if (this._duration != null) {
            newDiv.classList.add(super.css('disappear'));
            if (this._duration != "") newDiv.classList.add(this._duration);
        }
        this._style && newDiv.classList.add(this._style);
        let i = document.createElement("i");
        i.classList.add('fad');
        i.classList.add(super.css('m-r-compat'));
        i.classList.add(this._icon);
        let newContent = document.createTextNode(this._content);
        newDiv.appendChild(i);
        newDiv.appendChild(newContent);
        document.getElementById("alchemy-alerts").appendChild(newDiv);
    }

    static dismissAll() {
        let container = document.getElementById("alchemy-alerts");
        container && document.body.removeChild(container);
    }
}

export default Alert;