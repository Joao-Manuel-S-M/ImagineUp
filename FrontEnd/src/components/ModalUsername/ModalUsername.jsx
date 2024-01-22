import React, { useState } from "react";
import * as S from "./style";
import closeIcon from "../../assets/images/closeIcon.svg";

const ModalUsername = ({ onAddContact, modalOpen }) => {
	const [username, setUsername] = useState("");

	const handleSubmit = (event) => {
		event.preventDefault(); // Isso impede o comportamento padrão de recarregar a página
		onAddContact(username);
	};

	const handleClick = () => {
		modalOpen(false);
	};

	return (
		<S.Modal>
			<img
				src={closeIcon}
				alt="Close Icon"
				className="closeIcon"
				onClick={handleClick}
			/>
			<h1 className="title">Nova Conversa</h1>
			<p className="subTitle">Digite abaixo o username do novo contato</p>
			<form onSubmit={handleSubmit} className="form">
				<input
					type="text"
					placeholder="Ex: joaomanuelsm"
					className="inputUsername"
					value={username}
					required
					onChange={(e) => setUsername(e.target.value)}
				/>
				<input type="submit" value="Conversar" className="btn" />
			</form>
		</S.Modal>
	);
};

export default ModalUsername;
