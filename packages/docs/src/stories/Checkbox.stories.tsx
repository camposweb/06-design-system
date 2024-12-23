import '@ignite-ui/react/dist/index.css'
import type { Meta, StoryObj } from '@storybook/react';
import { Box, Text, CheckBox, CheckBoxProps} from '@ignite-ui/react'

export default {
  title: 'Form/Checkbox',
  component: CheckBox,
  args: {},
	decorators: [
		(Story) => {
			return (
				<Box as='label' className='flex flex-row gap-2'>
					{Story()}
					<Text size='sm'>Accept terms of use</Text>
				</Box>
			)
		}
	]
} as Meta<CheckBoxProps>

export const Primary: StoryObj<CheckBoxProps> = {
}

