import Button from '..';

export default {
	component: Button,
	title: 'Button/Color',
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
		startIcon: {
			table: {
				disable: true,
			},
		},
		endIcon: {
			table: {
				disable: true,
			},
		},
		color: {
			options: ['default', 'primary', 'secondary', 'danger'],
			control: { type: 'select' },
		},
	},
};

const Template = function Template(args) {
	const { color, children } = args;
	return <Button color={color}>{children}</Button>;
};

export const Default = Template.bind({});
Default.args = {
	color: 'default',
	children: 'Default',
};

export const Primary = Template.bind({});
Primary.args = {
	color: 'primary',
	children: 'Primary',
};

export const Secondary = Template.bind({});
Secondary.args = {
	color: 'secondary',
	children: 'Secondary',
};

export const Danger = Template.bind({});
Danger.args = {
	color: 'danger',
	children: 'Danger',
};
