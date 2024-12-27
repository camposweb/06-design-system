import '@camposweb-ignite-ui/react/dist/index.css'
import type { Meta, StoryObj } from '@storybook/react';
import { Text, TextProps} from '@camposweb-ignite-ui/react'

export default {
  title: 'Typography/Text',
  component: Text,
  args: {
		children: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis nec eleifend libero. Sed lacinia metus neque, sit amet fermentum eros cursus in. Quisque vitae lectus pharetra, scelerisque mi et, bibendum massa. Nunc eleifend ultricies eleifend. Vivamus lobortis tellus eget odio ullamcorper, eget gravida nisi sollicitudin. Nullam ultricies fermentum consequat.'
	},
argTypes: {
	size: {
		options: ['xxs', 'xs', 'sm', 'md', 'lg', 'xl', '2xl', '4xl', '5xl', '6xl', '7xl', '8xl', '9xl'],
		control: {
			type: 'inline-radio'
		},
	},
	as: {
		options: ['p', 'span', 'strong'],
		control: {
			type: 'inline-radio'
		},
	},
}
} as Meta<TextProps>

export const Primary: StoryObj<TextProps> = {}

export const xl: StoryObj<TextProps> = {
	args: {
		children: 'Strong Text',
		as: 'strong'
	}
}

