import React from "react";
import vkConnect from "@vkontakte/vk-connect";
import FireEvent from "../utils/FireEvent";

import ModalPage from "@vkontakte/vkui/dist/components/ModalPage/ModalPage";
import Avatar from "@vkontakte/vkui/dist/components/Avatar/Avatar";
import Div from "@vkontakte/vkui/dist/components/Div/Div";
import Cell from "@vkontakte/vkui/dist/components/Cell/Cell";
import List from "@vkontakte/vkui/dist/components/List/List";
import Button from "@vkontakte/vkui/dist/components/Button/Button";

import Icon24Linked from "@vkontakte/icons/dist/24/linked";
import Icon24LinkCircle from "@vkontakte/icons/dist/24/link_circle";
import Icon16Lock from "@vkontakte/icons/dist/16/lock";
import Icon24Share from "@vkontakte/icons/dist/24/share";
import Icon24Delete from "@vkontakte/icons/dist/24/delete";

const LinkInfo = ({ id, onClose, header, navigator }) => {
	const link = navigator.params.link || {};
	const deleteLink = navigator.params.deleteLink || null;

	return (
		<ModalPage
			id={id}
			onClose={onClose}
			header={header}
		>
			<Div style={{ display: "flex", alignItems: "center", flexDirection: "column" }}>
				<Avatar
					type="image"
					size={60}
					style={{ background: "var(--accent)" }}
				>
					<Icon24Linked fill="white"/>
				</Avatar>
				<h1 style={{ marginTop: 10, marginBottom: 0, fontSize: 18, display: "flex", alignItems: "center" }}>
					<span style={{ margin: 0, padding: 0, marginRight: 3 }}>{link.key}</span>
					{link.access_key ? <Icon16Lock fill="var(--text_secondary)"/> : null}
				</h1>
				<h3
					style={{
						marginTop: 5,
						marginBottom: 0,
						fontSize: 14,
						color: "var(--text_secondary)"
					}}
				>
					{link.short_url}
				</h3>
			</Div>

			<Div>
				<div style={{ display: "flex", marginBottom: 25 }}>
					<Button
						before={<Icon24Share/>}
						size="l"
						stretched
						onClick={() => vkConnect.send("VKWebAppShare", {"link": link.short_url})}
						style={{ cursor: "pointer", marginRight: 10 }}
					>
						Поделиться
					</Button>
					<Button
						before={<Icon24Delete/>}
						level="destructive"
						size="l"
						stretched
						onClick={() => {
							deleteLink(link.key);
							navigator.hideModal();
						}}
						style={{ cursor: "pointer" }}
					>
						Удалить
					</Button>
				</div>
				<List>
					<Cell
						children="Создано"
						indicator={new Date(link.timestamp * 1000).toLocaleString()}
					/>
					<Cell
						children="Оригинальная ссылка"
						onClick={() => FireEvent(link.url)}
						indicator={
							<Button
								before={<Icon24LinkCircle/>}
							>
								Открыть
							</Button>
						}
					/>
					<Cell
						children="Статистика"
						indicator={!link.access_key ? "Публичная" : "Приватная"}
					/>
					<Cell
						children="Переходы"
						indicator={link.views}
					/>
				</List>
			</Div>
		</ModalPage>
	);
};

export default LinkInfo;