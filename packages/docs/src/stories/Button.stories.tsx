import '@camposweb-ignite-ui/react/dist/index.css'
import type { Meta, StoryObj } from '@storybook/react';
import { Button, ButtonProps } from '@camposweb-ignite-ui/react'
import { ArrowRight } from 'lucide-react';

export default {
  title: 'Form/Button',
  component: Button,
  args: {
	 children: 'Send'
	},
	argTypes: {
		variant: {
			options: ['primary', 'secundary', 'tertiary'],
			control: {
				type: 'inline-radio'
			},
		},
		size: {
			options: ['sm', 'md'],
			control: {
				type: 'inline-radio'
			},
		},
		disabled: {
			control: {
				type: 'boolean'
			},
		},
		onClick: {
			action: 'click'
		}
	}
} as Meta<ButtonProps>

export const Primary: StoryObj<ButtonProps> = {}

export const Secundary: StoryObj<ButtonProps> = {
	args: {
		variant: 'secundary',
	}
}

export const Tertiary: StoryObj<ButtonProps> = {
	args: {
		variant: 'tertiary',
		children: 'Cancel'
	}
}

export const Small: StoryObj<ButtonProps> = {
	args: {
		variant: 'primary',
		size: 'sm',
	}
}


export const WithIcon: StoryObj<ButtonProps> = {
	args: {
		children: (
			<>
				Próximo passo
				<ArrowRight />
			</>
		)
	}
}

export const Disabled: StoryObj<ButtonProps> = {
	args: {
		disabled: true,
	}
}





