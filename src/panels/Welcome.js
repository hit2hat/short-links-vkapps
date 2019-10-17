import React from "react";
import vkConnect from "@vkontakte/vk-connect";

import Panel from "@vkontakte/vkui/dist/components/Panel/Panel";
import Button from "@vkontakte/vkui/dist/components/Button/Button";
import FixedLayout from "@vkontakte/vkui/dist/components/FixedLayout/FixedLayout";
import Div from "@vkontakte/vkui/dist/components/Div/Div";
import Avatar from "@vkontakte/vkui/dist/components/Avatar/Avatar";

import Icon24Linked from "@vkontakte/icons/dist/24/linked";

const Welcome = ({ id, navigator }) => (
	<Panel id={id} theme="white" centered>
		<Div style={{ display: "flex", flexDirection: "column", textAlign: "center", alignItems: "center" }}>
			<Avatar type="app" size={60} style={{ background: "var(--accent)" }}>
				<Icon24Linked fill="white"/>
			</Avatar>
			<h1 style={{ marginBottom: 0 }}>Короткие ссылки</h1>
			<p style={{ marginTop: 15, marginBottom: 5 }}>
				В этом сервисе Вы можете сделать из длинной и сложной ссылки простую.
				Такие ссылки удобнее использовать в Ваших записях и сообщениях.
			</p>
		</Div>
		<FixedLayout vertical="bottom">
			<Div>
				<Button
					size="xl"
					onClick={() => {
						vkConnect.sendPromise("VKWebAppGetAuthToken", {
							app_id: 7172940,
							scope: ""
						})
							.then((result) => {
								window.is_app_user = true;
								window.access_token = result.access_token;
								navigator.goPage("main");
							});
					}}
				>
					Начать
				</Button>
			</Div>
		</FixedLayout>
	</Panel>
);

export default Welcome;