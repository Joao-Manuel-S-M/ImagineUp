import React, { useEffect, useRef, useState } from "react";
import * as S from "./style";
import imgSend from "../../assets/images/send.svg";
import closeChat from "../../assets/images/closeChat.svg";
import { io } from "socket.io-client";
import { Wrapper } from "../../Style";

const socket = io("http://localhost:3000");

const BoardMessage = ({ username, ...props }) => {
	const [message, setMessage] = useState("");
	const [chats, setChats] = useState({});
	const [newMessage, setNewMessage] = useState([]);
	const [contactsLength, setContactsLength] = useState("");

	// Enviar a mensagem para a api http://localhost:3000/enviar-mensagem com o axios
	const enviarMensagem = async () => {
		try {
			const response = await fetch("http://localhost:3000/enviar-mensagem", {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify({
					username: username,
					mensagem: message,
				}),
			});

			const data = await response.json();
			console.log(data);

			// Atualize a lista de mensagens recebidas no estado
		} catch (error) {
			console.error("Erro ao enviar mensagem:", error);
		}
	};

	useEffect(() => {
		const handleNewMessage = (message) => {
			setChats((prevChats) => ({
				...prevChats,
				[message.username]: [
					...(prevChats[message.username] || []),
					{
						text: message.text,
						isSent: message.username !== username, // Altere esta linha
					},
				],
			}));
		};

		socket.on("newMessage", handleNewMessage);

		return () => {
			socket.off("newMessage", handleNewMessage);
		};
	}, [username]); // Adicione username como dependência
	const handleInputChange = (event) => {
		setMessage(event.target.value);
	};

	const handleButtonClick = () => {
		setChats((prevChats) => ({
			...prevChats,
			[username]: [
				...(prevChats[username] || []),
				{
					text: message,
					isSent: true,
				},
			],
		}));
		setMessage("");
		enviarMensagem();
	};

	useEffect(() => {
		setContactsLength(props.contactsLength);
	}, [props.contactsLength]);

	return (
		<S.Board contactsLength={contactsLength}>
			<form className="wrapper" onSubmit={(e) => e.preventDefault()}>
				<input
					type="text"
					className="input"
					placeholder="Digite aqui sua mensagem"
					value={message}
					onChange={handleInputChange}
				/>

				<button type="submit" className="btnSend" onClick={handleButtonClick}>
					<img src={imgSend} alt="send" />
				</button>
			</form>
			<div className="noContacts">
				<img src={closeChat} alt="Close chat" />
				<h1>Crie um contato ou selecione um para começar uma conversa.</h1>
			</div>
			<div className="chat">
				{(chats[username] || [])
					.slice()
					.reverse()
					.map((message, index) => (
						<p
							key={index}
							className={`message ${message.isSent ? "sent" : "received"}`}
						>
							<span className={`wrapperMessage ${message.isSent ? "wrapperSent" : ""}`}>{message.text}</span>
						</p>
					))}
			</div>
		</S.Board>
	);
};

export default BoardMessage;
