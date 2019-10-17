import "core-js/features/map";
import "core-js/features/set";
import React from "react";
import ReactDOM from "react-dom";
import connect from "@vkontakte/vk-connect";
import App from "./App";

import "@vkontakte/vkui/dist/vkui.css";

// Init VK Mini App
connect.send("VKWebAppInit");
connect.subscribe(({ detail: { type, data }}) => {
	if (type === "VKWebAppUpdateConfig") {
		const schemeAttribute = document.createAttribute("scheme");
		schemeAttribute.value = data.scheme ? data.scheme : "bright_light";
		document.body.attributes.setNamedItem(schemeAttribute);
	}
});

window.is_app_user = new URL(window.location.href).searchParams.get("vk_is_app_user") === "1";

ReactDOM.render(<App />, document.getElementById("root"));
