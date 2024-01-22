import styled from "styled-components";

export const Board = styled.div`
	width: calc(100% - 54px);
	max-width: 100%;
	height: 90%;

	border-radius: 26px;
	/* border: 0.5px solid #858585; */
	border: ${(props) =>
		props.contactsLength === 0 ? "none" : "0.5px solid #858585;"};
	background: ${(props) =>
		props.contactsLength === 0
			? "rgba(255, 255, 255, 0)"
			: "rgba(0, 0, 0, 0.18)"};
	box-shadow: ${(props) =>
		props.contactsLength === 0
			? "none"
			: "box-shadow: 0px 8px 18px 0px #0000002e inset"};
	position: relative;

	.noContacts {
		display: ${(props) => (props.contactsLength === 0 ? "flex" : "none")};
		max-width: 100%;
		height: 90%;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		gap: 20px;
		opacity: 0.5;
		text-align: center;

		img {
			width: 70px;
			height: 70px;
		}

		h1 {
			font-size: 20px;
			font-weight: 400;
			color: #ffffff65;
			font-family: "Inter", sans-serif;
		}
	}

	.wrapper {
		position: absolute;
		bottom: 0;
		left: 0;
		right: 0;
		margin: auto;
		display: flex;
		justify-content: center;
		align-items: center;
		max-width: 82%;
		width: 894px;
		margin-bottom: 26px;
		gap: 10px;
	}

	.input {
		max-width: 500px;
		width: calc(100% - 20px);
		height: 45px;
		flex-shrink: 0;
		border-radius: 11px;
		background: #101010;
		border: 0;
		color: #ffff;
		font-size: 16px;
		font-weight: 500;
		padding-left: 20px;

		display: ${(props) => (props.contactsLength === 0 ? "none" : "block")};
	}

	.input::placeholder {
		color: #ffffff6b;
	}

	.btnSend {
		border-radius: 10px;
		background: #101010;
		padding: 12px;
		border: none;
		display: ${(props) => (props.contactsLength === 0 ? "none" : "block")};
	}

	.btnSend img {
		width: 20px;
		height: 20px;
	}

	.chat {
		display: ${(props) => (props.contactsLength === 0 ? "none" : "flex")};
		flex-direction: column-reverse;
		overflow-y: auto;
		height: 500px;
		align-items: end;
		justify-content: flex-start;
		max-width: calc(90% + 20px);
		margin: 0 auto;
		gap: 30px;

		&::-webkit-scrollbar {
			width: 10px;
		}

		&::-webkit-scrollbar-track {
			background: #242424;
		}

		&::-webkit-scrollbar-thumb {
			background: #18181894;
			border-radius: 10px;
		}

		&::-webkit-scrollbar-thumb:hover {
			background: #555;
		}
	}

	.message {
		width: 100%;
		display: flex;
		justify-content: flex-end;
		word-wrap: break-word;
		overflow-wrap: break-word;
	}

	.wrapperMessage {
		background: #454545;
		color: #fff;
		font-family: "Inter", sans-serif;
		font-size: 18px;
		font-weight: 500;
		padding: 15px 150px 15px 20px;
		border-radius: 7px;
		width: fit-content;
		line-height: 28px;
	}

	.wrapperSent {
		padding: 15px 20px 15px 150px;
	}

	.received {
		justify-content: flex-start;
	}

	@media (max-width: 770px) {
		.wrapperMessage {
			background: #454545;
			color: #fff;
			font-family: "Inter", sans-serif;
			font-size: 14px;
			font-weight: 500;
			border-radius: 7px;
			line-height: 28px;
			padding: 10px 100px 10px 20px;
			
		}

		.wrapperSent {
			padding: 10px 20px 10px 100px;
		}
		
		.received {
			
		}
	}
`;
