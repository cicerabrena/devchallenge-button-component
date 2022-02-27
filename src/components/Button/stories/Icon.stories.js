import Button from '..';

export default {
	component: Button,
	title: 'Button/Icon',
	argTypes: {
		variant: {
			table: {
				disable: true,
			},
		},
		disableShadow: {
			table: {
				disable: true,
			},
		},
		disabled: {
			table: {
				disable: true,
			},
		},
		color: {
			table: {
				disable: true,
			},
		},
		children: {
			table: {
				disable: true,
			},
		},
	},
};

const Template = function Template(args) {
	const { startIcon, endIcon } = args;
	return <Button startIcon={startIcon} endIcon={endIcon} />;
};

export const StartIcon = Template.bind({});
StartIcon.args = {
	startIcon: 'star',
};

export const EndIcon = Template.bind({});
EndIcon.args = {
	endIcon: 'email',
};
