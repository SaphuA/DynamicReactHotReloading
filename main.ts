import * as React from "react";
import * as ReactDOM from "react-dom";
import { AppContainer } from "react-hot-loader";

declare const require: any;
declare const module: any;

const render = (element, instance, props) => {
    const reactElement = React.createElement(AppContainer, null, React.createElement(instance, props));
    ReactDOM.render(reactElement, element);
};

const register = (element, component, props) => {
    ((e, c, p) => {
        render(e, c.default, p);
        if (module.hot) {
            module.hot.accept(c.id, () => { render(e, c.default, p); });
        }
    })(element, component, props);
};

(() => {
    const staticElement = document.getElementById("static");
    const staticComponent = require("./Component");
    register(staticElement, staticComponent, null);

    const dynamicElement = document.getElementById("dynamic");
    const dynamicComponent = require("./" + dynamicElement.innerText);
    register(dynamicElement, dynamicComponent, null);
})();