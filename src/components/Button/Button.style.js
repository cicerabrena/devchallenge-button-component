import styled, { css } from 'styled-components';

const Style = {};

Style.Button = styled.button`
	padding: 0.6rem 1rem;
	border: none;
	border-radius: 0.5rem;
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
					color: #3d5afe;

					&:hover,
					:focus {
						background-color: rgba(41, 98, 255, 0.1);
					}
				`;
			case 'outline':
				return css`
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
						: '0px 2px 3px 0px #333333'};

					&:hover,
					&:focus {
						background-color: #aeaeae;
					}
				`;
		}
	}}
`;

export default Style;
