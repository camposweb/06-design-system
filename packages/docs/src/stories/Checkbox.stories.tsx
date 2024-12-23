import '@ignite-ui/react/dist/index.css'
import type { Meta, StoryObj } from '@storybook/react';
import { Box, Text, CheckBox, CheckboxProps} from '@ignite-ui/react'

export default {
  title: 'Form/Checkbox',
  component: CheckBox,
  args: {},
	decorators: [
		(Story) => {
			return (
				<Box as='label' className='flex flex-row gap-2 items-center'>
					{Story()}
					<Text size='sm'>Accept terms of use</Text>
				</Box>
			)
		}
	]
} as Meta<CheckboxProps>

export const Primary: StoryObj<CheckboxProps> = {
}


