import styled from "styled-components";

export const Modal = styled.div`
	max-width: 503px;
	height: 247px;
	position: absolute;
	top: 0;
	bottom: 0;
	left: 0;
	right: 0;
	margin: auto;
	z-index: 9000;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;

	border-radius: 21px;
	border: 1px solid rgba(255, 255, 255, 0.09);
	background: #1b1b1b;
	box-shadow: 0px 0px 67.4px 0px rgba(0, 0, 0, 0.47);
	font-family: "Inter", sans-serif;

	.title {
		color: #fff;
		font-size: 23.86px;
		font-weight: 600;
		letter-spacing: 0.954px;

		margin-bottom: 5px;
	}

	.subTitle {
		color: #fff;
		text-align: center;
		font-size: 12.86px;
		font-style: normal;
		font-weight: 400;
		line-height: normal;
		letter-spacing: 0.514px;
	}

	.inputUsername {
		border-radius: 9px;
		border: 0.5px solid #06c3b8;
		background: #373737;
		box-shadow: 0px 0px 6px 0px rgba(0, 0, 0, 0.25) inset;
		font-family: "Inter", sans-serif;
		width: 335px;
		height: 43px;
		margin-top: 23px;
		color: white;
		padding-left: 10px;
		font-size: 15px;
	}

	.btn {
		display: inline-flex;
		padding: 8px 40px;
		justify-content: center;
		align-items: center;
		gap: 10px;
		border-radius: 5px;
		background: #06c3b8;
		border: none;
		cursor: pointer;

		color: #1b1b1b;
		text-align: center;
		font-family: "Inter", sans-serif;
		font-size: 18px;
		font-weight: 500;
		letter-spacing: 1.855px;

		margin-top: 48px;
	}

	.closeIcon {
		position: absolute;
		top: 16px;
		right: 16px;
		cursor: pointer;
	}

	.form {
		text-align: center;
	}
`;
