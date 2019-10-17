import React from "react";
import { Stack, Page } from "vkui-navigator/dist";

import Home from "./panels/Home";
import LinkInfo from "./panels/LinkInfo";
import Welcome from "./panels/Welcome";

const App = () => (
	<Stack
		activePage="main"
		modals={[
			<LinkInfo
				id="link-info"
				title="Информация о ссылке"
			/>
		]}
	>
		<Page id="main" activePanel="home">
			<Home id="home"/>
		</Page>
		<Page id="welcome" activePanel="welcome">
			<Welcome id="welcome"/>
		</Page>
	</Stack>
);

export default App;

