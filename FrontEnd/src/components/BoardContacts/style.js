import styled from "styled-components";

export const Board = styled.div`
	max-width: 340px;
	width: 100%;
	height: 700px;
	border-radius: 17.26px;
	border: 1px solid #6d6d6d;
	display: flex;
	/* position: absolute; */
	/* top: 0; */
	/* bottom: 0; */
	/* margin: auto; */
	flex-direction: column;
	align-items: end;

	/* display: ${(props) => (props.boardOpen ? "flex" : "none")}; */

	@media (max-width: 970px) {
		position: ${(props) => (props.boardOpen ? "static" : "absolute")};
		left: ${(props) => (props.boardOpen ? "0px" : "-1000px")};
		transition: 1s;
		z-index: 20;

		/* position: absolute;
		z-index: 50000;
		background: #181818; */
		background: #181818;

	}
`;

export const Button = styled.button`
	border-radius: 4.571px;
	border: 0.5px solid #a0a0a0;
	background: #101010;
	box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);

	width: 102px;
	height: 28px;
	font-family: "Inter", sans-serif;
	color: #ababab;
	display: flex;
	flex-direction: row;
	justify-content: center;
	align-items: center;
	gap: 13px;
	font-size: 15px;
	cursor: pointer;
	float: right;
	margin: 18px 18px 0 0;

	.wrappIcon {
		display: flex;
		align-items: center;
		font-size: 13px;
	}

	.plusIcon {
		width: 13px;
		margin-right: 6px;
	}
`;
