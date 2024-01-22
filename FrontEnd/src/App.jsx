import React, { useEffect, useState } from "react";
import * as S from "./Style.js";
import BoardContacts from "./components/BoardContacts/BoardContacts";
import BoardMessage from "./components/BoardMessage/BoardMessage.jsx";
import Icon from "./assets/images/arrow-icon.svg";

function App() {
	const [selectedUsername, setSelectedUsername] = useState(null);
	const [boardOpen, setBoardOpen] = useState(false);
	const [modalOpen, setModalOpen] = useState(false);
	const [contactsLength, setContactsLength] = useState('');

	const handleUsernameChange = (newUsername) => {
		setSelectedUsername(newUsername);
	};

	const handleClick = () => {
		setBoardOpen((currentBoardOpen) => !currentBoardOpen);
		console.log(boardOpen);
	};

	return (
		<S.Container>
			<S.BoardWrapper boardOpen={boardOpen} >
				<BoardContacts
					modalOpen={(e) => setModalOpen(e)}
					onUsernameChange={handleUsernameChange}
					boardOpen={boardOpen}
					contactsLength={(e) => setContactsLength(e)}
				/>
				<button className="btnOpen" onClick={handleClick}>
					<img src={Icon} />
				</button>
			</S.BoardWrapper>

			<S.Wrapper>
				{/* <div className="header"> */}

				<div className="logo">ImagineUp</div>
				{/* </div> */}
				<BoardMessage username={selectedUsername} contactsLength={contactsLength}/>
			</S.Wrapper>
		</S.Container>
	);
}

export default App;
