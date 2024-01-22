import styled from "styled-components";

export const Contact = styled.div`
	margin: 30px auto 0 auto;
	background-color: ${props => props.isselect ? "#2d2d2d" : "#06c3ba00 "};
	border: 2px solid #2d2d2d;
	max-width: 237px;
	width: calc(100% - 118px);
	font-family: "Inter", sans-serif;
	color: #ffffff;
	height: 65px;
	border-radius: 10px;
	filter: drop-shadow(0px 1px 9px rgba(0, 0, 0, 0.25));
	display: flex;
	align-items: center;
	justify-content: space-between;
	padding: 0 40px;


	.btn {
		background: none;
		border: none;
		cursor: pointer;
	}

	.trashIcon {
		width: 21px;
		height: 21px;
	}

	.select {
		background-color: red;
	}

`;
