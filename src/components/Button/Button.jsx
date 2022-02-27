import { Icon } from '@material-ui/core';

import PropTypes from 'prop-types';

import Style from './Button.style';

const Button = function buttonComponent({
	variant,
	disableShadow,
	disabled,
	startIcon,
	endIcon,
	size,
	color,
	children,
}) {
	return (
		<Style.Button
			variant={variant}
			disableShadow={disableShadow}
			disabled={disabled}
			size={size}
			color={color}
		>
			{startIcon && <Icon className="start">{startIcon}</Icon>}
			{children}
			{endIcon && <Icon className="end">{endIcon}</Icon>}
		</Style.Button>
	);
};

export default Button;

Button.propTypes = {
	variant: PropTypes.string,
	disableShadow: PropTypes.bool,
	disabled: PropTypes.bool,
	startIcon: PropTypes.string,
	endIcon: PropTypes.string,
	size: PropTypes.string,
	color: PropTypes.string,
	children: PropTypes.string,
};

Button.defaultProps = {
	variant: 'default',
	disableShadow: false,
	disabled: false,
	startIcon: '',
	endIcon: '',
	size: 'md',
	color: 'default',
	children: 'Default',
};
