class Spinner {
    constructor(css=null) {
        this.$alchemy = css;
    }

    start() {
        if (document.body.hasAttribute('alchemy-spin-scene')) {
            throw new Exception("This webapp has already started spining");
        }
        let scene = document.createElement('div');
        scene.classList.add(this.$alchemy.scene || "scene");
        let div = document.createElement('div');
        div.classList.add(this.$alchemy.hero || "hero");
        div.style.left = '50%';
        div.style.transform = "translate(-50%, -50%)";
        let spinner = document.createElement('span');
        spinner.classList.add(this.$alchemy.spinner || 'spinner', this.$alchemy['low-profile'] || 'low-profile');
        div.appendChild(spinner);
        scene.appendChild(div);
        document.body.appendChild(scene);
        document.body.setAttribute('alchemy-spin-scene', 'true');
        this.runningScene = scene;
    }

    stop() {
        document.body.removeChild(this.runningScene);
        document.body.removeAttribute("alchemy-spin-scene");
        delete this.runningScene;
    }
}

export default Spinner;