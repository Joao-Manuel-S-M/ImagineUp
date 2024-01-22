import React, { useEffect, useState } from "react";
import * as S from "./style";
import plusIcon from "../../assets/images/plusIcon.svg";
import Contact from "../Contact/Contact";
import ModalUsername from "../ModalUsername/ModalUsername";

const BoardContacts = (props) => {
	const [newContacts, setNewContacts] = useState([]);
	const [idCounter, setIdCounter] = useState(
		Number(localStorage.getItem("idCounter")) || 0
	);
	const [modalOpen, setModalOpen] = useState(false);
	const [selectedContactId, setSelectedContactId] = useState(null); // Adicione este estado
	const [contacts, setContacts] = useState([]);
	const [open, setOpen] = useState(props.boardOpen);

	useEffect(() => {
		localStorage.setItem("idCounter", idCounter);
	}, [idCounter]);

	useEffect(() => {
		const storedContacts = localStorage.getItem("contacts");
		if (storedContacts) {
			setContacts(JSON.parse(storedContacts));
		}
	}, []);

	const addContact = (username) => {
		const newId = idCounter + 1;
		setIdCounter(newId);
		const newContact = { id: newId, username };
		setContacts((prevContacts) => {
			const updatedContacts = [...prevContacts, newContact];
			localStorage.setItem("contacts", JSON.stringify(updatedContacts));
			return updatedContacts;
		});
		setSelectedContactId(newContact); // Adicione esta linha
		setModalOpen(false);
	};

	const incrementIdCounter = () => {
		const newIdCounter = idCounter + 1;
		setIdCounter(newIdCounter);
		localStorage.setItem("idCounter", newIdCounter);
	};

	const handleDelete = (id) => {
		setContacts((prevContacts) => {
			const updatedContacts = prevContacts.filter(
				(contact) => contact.id !== id
			);
			localStorage.setItem("contacts", JSON.stringify(updatedContacts));
			return updatedContacts;
		});
	};

	const handleContactClick = (contact) => {
		setSelectedContactId(contact.id);
		props.onUsernameChange(contact.username);
	};

	useEffect(() => {
		setOpen(props.boardOpen);
	}, [props.boardOpen]);

	// exibir a quantidade de contatos criados no console com useEffect
	useEffect(() => {
		props.contactsLength(contacts.length);
	}, [contacts]);

	return (
		<>
			<S.Board boardOpen={props.boardOpen}>
				<S.Button onClick={() => setModalOpen(true)}>
					<div className="wrapIcon">
						<img src={plusIcon} className="plusIcon" alt="plus icon" />|
					</div>
					Novo
				</S.Button>

				{contacts.map((contact) => (
					<Contact
						key={contact.id}
						id={contact.id}
						username={contact.username}
						onDelete={handleDelete}
						isselect={contact.id === selectedContactId}
						onClick={() => handleContactClick(contact)}
					/>
				))}
			</S.Board>
			{modalOpen && (
				<ModalUsername
					onAddContact={addContact}
					modalOpen={(e) => setModalOpen(e)}
				/>
			)}
		</>
	);
};

export default BoardContacts;
