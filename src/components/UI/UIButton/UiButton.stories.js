import UiButton from './UiButton.jsx'

export default {
    title: 'Ui-Kit/Button',
    component: UiButton
}

const Template = (args) => <UiButton {...args}/>;

const props = {
    text: 'Button',
    onclick: () => console.log('it works'),
    disabled: false,
    theme: 'light',
    classes: '',
}

export const Light = Template.bind({});

Light.args = {
    ...props,
    theme: 'light'
};
export const Dark = Template.bind({});

Dark.args = {
    ...props,
    theme: 'dark'
};
export const Disabled = Template.bind({});

Disabled.args = {
    ...props,
    disabled: true
};