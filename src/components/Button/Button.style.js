import styled, { css } from 'styled-components';

const Style = {};

function getSize(size) {
	const sizes = {
		sm: () => `
			padding: 0.3rem 0.7rem;
			height: 32px;
		`,
		md: () => `
			padding: 0.5rem 1rem;
			height: 36px;
		`,
		lg: () =>
			`
				padding: 0.7rem 1.3rem;
				height: 42px;
			`,
	};

	return sizes[size || 'md'];
}

function getBackgroundColor(color = 'default', disableShadow = false) {
	const backgrounds = {
		default: () => `
			background-color: #e0e0e0;
			color: #3f3f3f;
			box-shadow: ${disableShadow ? 'none' : '0px 2px 3px 0px rgba(51, 51, 51, 0.2)'};

			&:hover,
			&:focus {
				background-color: rgba(174, 174, 174, 1);
			}
		`,
		primary: () => `
			background-color: #2962ff;
			color: white;
			box-shadow: 0px 2px 3px 0px rgba(41, 98, 255, 0.2);

			&:hover,
			:focus {
				background-color: #0039cb;
			}
		`,
		secondary: () => `
			background-color: #455a64;
			color: white;
			box-shadow: 0px 2px 3px 0px rgba(69, 90, 100, 0.2);

			&:hover,
			&:focus {
				background-color: #1c313a;
			}
		`,
		danger: () => `
			background-color: #d32f2f;
			color: white;
			box-shadow: 0px 2px 3px 0px rgba(211, 47, 47, 0.2);

			&:hover,
			&:focus {
				background-color: #9a0007;
			}
		`,
	};

	return backgrounds[color || 'default']();
}

function getVariant({ variant, color, disableShadow, size }) {
	const styles = {
		text: () => `
			background-color: transparent;
			color: #3d5afe;

			&:hover,
			:focus {
				background-color: rgba(41, 98, 255, 0.1);
			}

			&:disabled {
				color: #9e9e9e;
			}
		`,
		outline: () =>
			`
				background-color: transparent;
				border: 1px solid #3d5afe;
				color: #3d5afe;

				&:hover,
				:focus {
					background-color: rgba(41, 98, 255, 0.1);
				}
			`,
		default: () => getBackgroundColor(color, disableShadow),
	};

	const style = css`
		${styles[variant || 'default']}${getSize(size)}
	`;

	return style;
}

Style.Button = styled.button`
	display: inline-flex;
	align-items: center;
	justify-content: center;
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

	${(props) => getVariant({ ...props })}

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
