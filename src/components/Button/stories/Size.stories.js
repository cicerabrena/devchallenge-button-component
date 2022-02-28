import Button from '..';

export default {
	component: Button,
	title: 'Button/Size',
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
			table: {
				disable: true,
			},
		},
		size: {
			options: ['sm', 'md', 'lg'],
			control: {
				type: 'select',
			},
		},
	},
};

const Template = function Template(args) {
	const { size, children } = args;
	return (
		<Button size={size} color="primary">
			{children}
		</Button>
	);
};

export const Small = Template.bind({});
Small.args = {
	size: 'sm',
};

export const Medium = Template.bind({});
Medium.args = {
	size: 'md',
};

export const Large = Template.bind({});
Large.args = {
	size: 'lg',
};
