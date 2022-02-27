import { Icon } from '@material-ui/core';

import PropTypes from 'prop-types';

import Style from './Button.style';

const Button = function buttonComponent({
	variant,
	children,
	disableShadow,
	disabled,
	startIcon,
	endIcon,
}) {
	return (
		<Style.Button
			variant={variant}
			disableShadow={disableShadow}
			disabled={disabled}
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
	children: PropTypes.string,
};

Button.defaultProps = {
	variant: 'default',
	disableShadow: false,
	disabled: false,
	startIcon: '',
	endIcon: '',
	children: 'Default',
};
