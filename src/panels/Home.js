import React, { useState, useEffect } from "react";
import vkConnect from "@vkontakte/vk-connect";

import Panel from "@vkontakte/vkui/dist/components/Panel/Panel";
import PanelHeader from "@vkontakte/vkui/dist/components/PanelHeader/PanelHeader";
import Group from "@vkontakte/vkui/dist/components/Group/Group";
import Avatar from "@vkontakte/vkui/dist/components/Avatar/Avatar";
import Cell from "@vkontakte/vkui/dist/components/Cell/Cell";
import List from "@vkontakte/vkui/dist/components/List/List";
import Button from "@vkontakte/vkui/dist/components/Button/Button";
import Spinner from "@vkontakte/vkui/dist/components/Spinner/Spinner";
import PullToRefresh from "@vkontakte/vkui/dist/components/PullToRefresh/PullToRefresh";

import FormLayout from "@vkontakte/vkui/dist/components/FormLayout/FormLayout";
import FormLayoutGroup from "@vkontakte/vkui/dist/components/FormLayoutGroup/FormLayoutGroup";
import Input from "@vkontakte/vkui/dist/components/Input/Input";
import Checkbox from "@vkontakte/vkui/dist/components/Checkbox/Checkbox";

import Icon24Linked from "@vkontakte/icons/dist/24/linked";
import Icon24View from '@vkontakte/icons/dist/24/view';
import Icon16Lock from "@vkontakte/icons/dist/16/lock";

const smartRound = (number) => {
	if (number < 1000) {
		return number;
	}

	if (number < 1000000) {
		return Math.floor( (number / 1000) * 10 ) / 10 + "K";
	}

	return Math.floor( (number / 1000000) * 10 ) / 10 + "M";
};

const Home = ({ id, navigator }) => {
	const [ accessToken, setAccessToken ] = useState(null);
	const [ links, setLinks ] = useState([]);
	const [ loaded, setLoaded ] = useState(false);

	const [ urlForm, setUrlForm ] = useState("");
	const [ onlyMy, setOnlyMy ] = useState(false);

	const auth = () => new Promise((resolve) => {
		vkConnect.sendPromise("VKWebAppGetAuthToken", {
			app_id: 7172940,
			scope: ""
		})
			.then((result) => resolve(result.access_token))
			.catch(() => auth());
	});

	useEffect(() => {
		if (window.is_app_user === false) {
			navigator.goPage("welcome");
		} else {
			if (!window.access_token) {
				auth()
					.then((token) => {
						setAccessToken(token);
						loadLinks(token);
					});
			} else {
				setAccessToken(window.access_token);
				loadLinks(window.access_token);
			}
		}
	}, []);

	const loadLinks = (accessToken) => {
		setLoaded(false);
		vkConnect.sendPromise("VKWebAppCallAPIMethod", {
			"method": "utils.getLastShortenedLinks",
			"params": {
				"count": "50",
				"v": "5.102",
				"access_token": accessToken
			}
		})
			.then((result) => setLinks(result.response.items))
			.finally(() => setLoaded(true));
	};

	const addLink = (link, onlyMy) => {
		navigator.showLoader();
		vkConnect.sendPromise("VKWebAppCallAPIMethod", {
			"method": "utils.getShortLink",
			"params": {
				"url": link,
				"private": onlyMy ? "1" : "0",
				"v": "5.102",
				"access_token": accessToken
			}
		})
			.then((result) => setLinks([
				{
					...result.response,
					timestamp: Math.floor(Date.now() / 1000),
					views: 0
				},
				...links
			]))
			.catch((e) => console.error(JSON.stringify(e)))
			.finally(() => navigator.hideLoader());
	};

	const deleteLink = (key) => {
		vkConnect.sendPromise("VKWebAppCallAPIMethod", {
			"method": "utils.deleteFromLastShortened",
			"params": {
				key,
				"v": "5.102",
				"access_token": accessToken
			}
		})
			.then(() => setLinks(links.filter((x) => x.key !== key)))
			.catch((e) => console.error(JSON.stringify(e)))
	};

	return (
		<Panel id={id}>
			<PanelHeader>Короткие ссылки</PanelHeader>

			<PullToRefresh onRefresh={() => loadLinks(accessToken)} isFetching={!loaded}>
				<Group title="Сократить ссылку">
						<FormLayout>
							<FormLayoutGroup>
								<Input
									placeholder="Ваша ссылка"
									value={urlForm}
									onChange={(e) => setUrlForm(e.currentTarget.value)}
								/>
								<Checkbox
									style={{ marginTop: 10 }}
									value={onlyMy}
									onChange={() => setOnlyMy(!onlyMy)}
								>
									Статистика видна только мне
								</Checkbox>
							</FormLayoutGroup>
							<Button
								size="xl"
								onClick={() => {
									addLink(urlForm, onlyMy);
									setUrlForm("");
								}}
							>
								Сократить
							</Button>
						</FormLayout>
				</Group>

				<Group title="Мои ссылки">
					{loaded ?
						<List>
							{links.map((link) => (
								<Cell
									expandable
									key={link.key}
									before={
										<Avatar type="app" style={{ background: "var(--accent)" }}>
											<Icon24Linked fill="white"/>
							 			</Avatar>
									}
									children={
										<span style={{ display: "flex", alignItems: "center" }}>
											<span style={{ marginRight: 3 }}>{link.short_url}</span>
											{link.access_key ? <Icon16Lock fill="var(--text_secondary)"/> : null}
										</span>
									}
									indicator={
										<span style={{ display: "flex", alignItems: "center" }}>
											<Icon24View fill="var(--text_secondary)"/>
											<span style={{ marginLeft: 3 }}>{smartRound(link.views)}</span>
										</span>
									}
									description={link.url.slice(0, 28) + (link.url.length > 28 ? "..." : "")}
									onClick={() => navigator.showModal("link-info", {
										link,
										deleteLink
									})}
								/>
							))}
						</List>
					: <div style={{ paddingBottom: 25 }}><Spinner/></div>}
				</Group>
			</PullToRefresh>
		</Panel>
	);
};

export default Home;
