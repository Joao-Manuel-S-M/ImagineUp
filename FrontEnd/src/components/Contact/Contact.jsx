import React, { useEffect, useState } from "react";
import * as S from "./style";
import trashIcon from "../../assets/images/trashIcon.svg";

const Contact = ({ id, onDelete, username, onClick, isselect }) => {
	const handleClick = () => {
		onClick(id);
	};


	return (
		<S.Contact key={id} onClick={handleClick} isselect={isselect}>
			<span className="userName">{username}</span>
			<button onClick={() => onDelete(id)} className="btn">
				<img src={trashIcon} className="trashIcon" />
			</button>
		</S.Contact>
	);
};

export default Contact;
