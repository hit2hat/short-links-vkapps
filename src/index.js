import "core-js/features/map";
import "core-js/features/set";
import React from "react";
import ReactDOM from "react-dom";
import connect from "@vkontakte/vk-connect";
import * as Sentry from "@sentry/browser";
import App from "./App";

import packageJson from "../package.json";
import "@vkontakte/vkui/dist/vkui.css";
import "./style.css";

// Init Sentry
Sentry.init({
	dsn: "https://6c2fd3ebb2d34f2fb50651894a8e6292@sentry.io/1788338",
	release: packageJson.version,
	environment: process.env.NODE_ENV
});

// Prepare app
const launchParams = new URL(window.location.href);

Sentry.setUser({
	"id": launchParams.searchParams.get("vk_user_id"),
	"platform": launchParams.searchParams.get("vk_platform")
});

window.is_app_user = ["localhost:10888", "192.168.1.141:10888"].indexOf(launchParams.host) === -1 ? launchParams.searchParams.get("vk_is_app_user") === "1" : true;

// Init VK Mini App
connect.send("VKWebAppInit");
connect.subscribe(({ detail: { type, data }}) => {
	if (type === "VKWebAppUpdateConfig") {
		const schemeAttribute = document.createAttribute("scheme");
		schemeAttribute.value = data.scheme ? data.scheme : "bright_light";
		document.body.attributes.setNamedItem(schemeAttribute);
	}
});

ReactDOM.render(<App />, document.getElementById("root"));
