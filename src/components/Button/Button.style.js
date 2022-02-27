import styled, { css } from 'styled-components';

const Style = {};

Style.Button = styled.button`
	display: inline-flex;
	align-items: center;
	border: none;
	border-radius: 5px;
	font-family: 'Noto Sans JP', sans-serif;
	font-size: 0.875rem;
	font-weight: 500;
	cursor: pointer;
	background-color: white;

	&:disabled {
		cursor: not-allowed;
		pointer-events: none;
	}

	${(props) => {
		switch (props.variant) {
			case 'text':
				return css`
					background-color: transparent;
					color: #3d5afe;

					&:hover,
					:focus {
						background-color: rgba(41, 98, 255, 0.1);
					}

					&:disabled {
						color: #9e9e9e;
					}
				`;
			case 'outline':
				return css`
					background-color: transparent;
					border: 1px solid #3d5afe;
					color: #3d5afe;

					&:hover,
					:focus {
						background-color: rgba(41, 98, 255, 0.1);
					}
				`;
			default:
				return css`
					background-color: #e0e0e0;
					box-shadow: ${props.disableShadow
						? 'none'
						: '0px 2px 3px 0px rgba(0, 49, 202, 0.2)'};

					&:hover,
					&:focus {
						background-color: #aeaeae;
					}

					&:disabled {
						background-color: #e0e0e0;
						font-weight: bold;
						color: #9e9e9e;
					}

					${(prev) => {
						switch (prev.color) {
							case 'default':
								return css`
									background-color: #e0e0e0;
									color: #3f3f3f;
									box-shadow: 0px 2px 3px 0px rgba(51, 51, 51, 0, 2);

									&:hover,
									&:focus {
										background-color: rgba(174, 174, 174, 1);
									}
								`;
							case 'primary':
								return css`
									background-color: #2962ff;
									color: white;
									box-shadow: 0px 2px 3px 0px rgba(41, 98, 255, 0, 2);

									&:hover,
									:focus {
										background-color: #0039cb;
									}
								`;
							case 'secondary':
								return css`
									background-color: #455a64;
									color: white;
									box-shadow: 0px 2px 3px 0px rgba(69, 90, 100, 0, 2);

									&:hover,
									&:focus {
										background-color: #1c313a;
									}
								`;
							case 'danger':
								return css`
									background-color: #d32f2f;
									color: white;
									box-shadow: 0px 2px 3px 0px rgba(211, 47, 47, 0, 2);

									&:hover,
									&:focus {
										background-color: #9a0007;
									}
								`;
							default:
								return css`
									background-color: #e0e0e0;
								`;
						}
					}}
				`;
		}
	}}

	${(props) => {
		switch (props.size) {
			case 'sm':
				return css`
					padding: 0.3rem 0.7rem;
				`;
			case 'lg':
				return css`
					padding: 0.7rem 1.3rem;
				`;
			default:
				return css`
					padding: 0.5rem 1rem;
				`;
		}
	}}

	span {
		&.start {
			margin-right: 0.4rem;
		}
		&.end {
			margin-left: 0.4rem;
		}
		font-size: 1rem;
	}
`;

export default Style;
