class Alert {
    constructor(content) {
        this._content = content;
    }

    duration(duration) {
        this._duration = duration;
    }
    
    icon(icon) {
        this._icon = icon;
    }

    warn() {
        this._style = 'warn';
        this._show();
    }

    primary() {
        this._style = 'primary';
        this._show();
    }

    success() {
        this._style = 'success';
        this._show();
    }

    error() {
        this._style = 'error';
        this._show();
    }

    info() {
        this._style = 'info';
        this._show();
    }
    
    _show() {
        if (!document.getElementById("alchemy-alerts")) {
            let container = document.createElement('div');
            container.id = "alchemy-alerts";
            container.className = "alerts";
            document.body.prepend(container);
        }
        let newDiv = document.createElement("div");
        newDiv.classList.add('alert');
        if (this._duration != null) {
            newDiv.classList.add('disappear');
            if (this._duration != "") newDiv.classList.add(this._duration);
        }
        newDiv.classList.add(this._style);
        let i = document.createElement("i");
        i.classList.add('fad');
        i.classList.add('m-r-compat');
        console.log(this._icon);
        i.classList.add(this._icon || 'fa-exclamation-circle');
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