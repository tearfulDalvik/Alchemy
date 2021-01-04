class Tab {
    static attach(element) {
        if (!element || !element.classList.contains("tab")) {
            throw "This element has to be a tab.";
        }
        return new Tab(element);
    }

    constructor(element) {
        this.element = element;
        this.items = [];
        this.active = null;
        for (let i = 0; i < element.children.length; i++) {
            let item = element.children[i];
            if (item.classList.contains("item")) {
                if (item.hasAttribute("name")) {
                    this.items.push(item);
                    if (item.classList.contains("active")) {
                        this.active = item;
                    }
                    item.addEventListener("click", (() => {
                        this.select(item.getAttribute("name"));
                    }).bind(this));
                }
            }
        }
    }

    select(name) {
        if (this.active) {
            this.active.classList.remove("active");
            this.active = null;
        }
        let item = this.element.querySelector(`.item[name=${name}]`);
        if (item && this.items.indexOf(item) > -1) {
            item.classList.add("active");
            this.active = item;
        } else {
            throw "Item not found"
        }
    }
}

export default Tab;