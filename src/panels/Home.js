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
import Placeholder from "@vkontakte/vkui/dist/components/Placeholder/Placeholder";

import FormLayout from "@vkontakte/vkui/dist/components/FormLayout/FormLayout";
import FormLayoutGroup from "@vkontakte/vkui/dist/components/FormLayoutGroup/FormLayoutGroup";
import FormStatus from "@vkontakte/vkui/dist/components/FormStatus/FormStatus";
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
	const [ error, setError ] = useState(null);

	const onRequestCallback = ({ detail: { type, data }}) => {
		if (!window.is_request) return;

		if (type === "VKWebAppCallAPIMethodResult") {
			setLinks((prev) => [
				{
					...data.response,
					timestamp: Math.floor(Date.now() / 1000),
					views: 0
				},
				...prev.filter((x) => x.key !== data.response.key)
			]);
			setUrlForm("");
			navigator.hideLoader();
			window.is_request = false;
		}

		if (type === "VKWebAppCallAPIMethodFailed") {
			setError("Введите корректную ссылку");
			navigator.hideLoader();
			window.is_request = false;
		}
	};

	useEffect(() => {
		if (window.is_app_user === false) {
			navigator.goPage("welcome");
		} else {
			if (!window.access_token) {
				const auth = () => new Promise((resolve) => {
					vkConnect.sendPromise("VKWebAppGetAuthToken", {
						app_id: 7172940,
						scope: ""
					})
						.then((result) => resolve(result.access_token))
						.catch(() => auth());
				});

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

		vkConnect.subscribe(onRequestCallback);

		return () => {
			vkConnect.unsubscribe(onRequestCallback);
		};
	}, []);

	const loadLinks = (accessToken) => {
		setLoaded(false);
		setError(null);
		setUrlForm("");
		vkConnect.sendPromise("VKWebAppCallAPIMethod", {
			"method": "utils.getLastShortenedLinks",
			"params": {
				"count": "50",
				"v": "5.102",
				"access_token": accessToken
			}
		})
			.then((result) => setLinks(result.response.items))
			.catch((e) => console.error(e))
			.finally(() => setLoaded(true));
	};

	const addLink = (link, onlyMy) => {
		if (window.is_request) return;
		setError(null);

		if (link.length === 0) {
			return setError("Введите ссылку");
		}

		window.is_request = true;
		navigator.showLoader();
		vkConnect.send("VKWebAppCallAPIMethod", {
			"method": "utils.getShortLink",
			"params": {
				"url": link,
				"private": onlyMy ? "1" : "0",
				"v": "5.102",
				"access_token": accessToken
			}
		});
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
							{error && <FormStatus
								state="error"
								title="Ошибка"
								children={error}
							/>}
							<Input
								placeholder="Ваша ссылка"
								value={urlForm}
								onChange={(e) => setUrlForm(e.currentTarget.value.slice(0, 255).trim())}
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
							}}
							style={{ cursor: "pointer" }}
						>
							Сократить
						</Button>
					</FormLayout>
				</Group>

				<Group title="Мои ссылки">
					{loaded ?
						links.length > 0
							?
								<List>
									{links.map((link) => (
										<Cell
											expandable
											key={link.key}
											before={
												<Avatar type="app" style={{ background: "var(--accent)" }} size={40}>
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
							:
								<Placeholder
									title="Список ссылок пуст"
									children="Создаваемые ссылки будут появляться в этой секции"
								/>
					: <div style={{ paddingBottom: 25 }}><Spinner/></div>}
				</Group>
			</PullToRefresh>
		</Panel>
	);
};

export default Home;
