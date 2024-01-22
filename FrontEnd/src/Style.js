import styled from "styled-components";

export const Container = styled.div`
	max-width: 1440px;
	width: 100%;
	margin: 0 auto;
	display: flex;
	align-items: center;
	position: absolute;
	top: 0;
	bottom: 0;
	left: 0;
	right: 0;

	.logo {
		color: #f2f2f2;
		font-size: 30px;
		font-family: "Noyh";
		border-radius: 20px;
		background: #212121;
		box-shadow: 0px 2px 4.2px 0px rgba(12, 12, 12, 0.25) inset,
			0px 2px 4.2px 0px rgba(0, 0, 0, 0.25);
		padding: 10px 29px;
		margin: 0 auto;
	}

	/* .header {
		display: flex;
		flex-direction: row;
		/* justify-content: space-between; */
	/* align-items: center;
		width: 90%;
		height: 100px;
		padding: 0 30px; */
	// }

	.btnOpen {
		display: none;
		background-color: #181818;
		border: none;
		padding: 20px 5px;
		border-radius: 0px 10px 10px 0px;
		border: 1px solid #6d6d6d;
		margin-left: -1px;
		margin-top: 15px;
		z-index: 10000;
		border-left: none;

		img {
			width: 20px;
			height: 30px;
		}
		@media (max-width: 970px) {
			display: block;
		}
	}
`;

export const BoardWrapper = styled.div`
	max-width: 340px;
	width: 100%;
	height: 700px;
	border-radius: 17.26px;
	align-items: start;
	/* position: absolute; */
	left: ${(props) => (props.boardOpen ? "0px" : "-10px")};
	z-index: 50000;
	/* transition: .5s; */
	display: flex;

	@media (max-width: 970px) {
		width: ${(props) => (props.boardOpen ? "100%" : "40px")};
		/* max-width: ${(props) => (props.boardOpen ? "100%" : "40px")}; */
		/* background: ${(props) => (props.propsModal ? "red" : "blue")}; */
		height: 700px;
		border-radius: 17.26px;
		/* display: flex; */
		align-items: start;
		position: absolute;
		left: ${(props) => (props.boardOpen ? "0px" : "-10px")};
		/* display: ${(props) => (props.boardOpen ? "flex" : "none")}; */
		/* z-index: ${(props) => (props.boardOpen ? "5000" : "-10")}; */
		transition: .2s;
	}
`;

export const Wrapper = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	margin: 0 auto;
	width: 100%;
	height: 703px;
	gap: 0;
	justify-content: space-between;
`;
