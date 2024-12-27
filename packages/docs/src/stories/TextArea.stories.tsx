import '@camposweb-ignite-ui/react/dist/index.css'
import type { Meta, StoryObj } from '@storybook/react';
import { Box, Text, TextArea, TextAreaProps} from '@camposweb-ignite-ui/react'
import { twMerge } from 'tailwind-merge';

export default {
  title: 'Form/Text Area',
  component: TextArea,
  args: {},
	decorators: [
		(Story) => {
			return (
				<Box as='label' className={twMerge('flex flex-col gap-2')}>
					<Text size='sm'>Observations</Text>
					{Story()}
				</Box>
			)
		}
	]
} as Meta<TextAreaProps>

export const Primary: StoryObj<TextAreaProps> = {
	args: {
		placeholder: 'Add any observations'
	}
}

export const Disabled: StoryObj<TextAreaProps> = {
	args: {
		disabled: true
	}
}

export const WithPrefix: StoryObj<TextAreaProps> = {
	args: {
		prefix: 'cal.com/'
	}
}
