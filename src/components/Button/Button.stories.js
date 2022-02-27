import Button from '.';

export default {
	component: Button,
	title: 'Button/Variant',
};

const Template = function Template(args) {
	const { variant, children, disableShadow, disabled } = args;
	return (
		<Button variant={variant} disableShadow={disableShadow} disabled={disabled}>
			{children}
		</Button>
	);
};

export const Default = Template.bind({});
Default.args = {
	variant: 'default',
	disableShadow: false,
	disabled: false,
	children: 'Default',
};

export const DefaultWithoutShadow = Template.bind({});
DefaultWithoutShadow.args = {
	...Default.args,
	disableShadow: true,
	disabled: false,
};

export const Outline = Template.bind({});
Outline.args = {
	variant: 'outline',
	children: 'Default',
	disabled: false,
};

export const Text = Template.bind({});
Text.args = {
	...Outline.args,
	variant: 'text',
};
