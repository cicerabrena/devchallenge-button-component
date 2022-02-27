import PropTypes from 'prop-types';

import Style from './Button.style';

const Button = function buttonComponent({
	variant,
	children,
	disableShadow,
	disabled,
}) {
	return (
		<Style.Button
			variant={variant}
			disableShadow={disableShadow}
			disabled={disabled}
		>
			{children}
		</Style.Button>
	);
};

export default Button;

Button.propTypes = {
	variant: PropTypes.string,
	disableShadow: PropTypes.bool,
	disabled: PropTypes.bool,
	children: PropTypes.string,
};

Button.defaultProps = {
	variant: 'default',
	disableShadow: false,
	disabled: false,
	children: 'Button',
};
