import '@camposweb-ignite-ui/react/dist/index.css'
import type { Meta, StoryObj } from '@storybook/react';
import { Box, Button, Tooltip, TooltipProps} from '@camposweb-ignite-ui/react'

export default {
  title: 'Form/Tooltip',
  component: Tooltip,
  args: {
		children: <Button>Info</Button>,
		content: 'Example tooltip'
	},
	decorators: [
		(Story) => {
			return (
				<Box className='flex items-center justify-center py-30 bg-gray-200'>
					{Story()}
				</Box>
			)
		}
	]
} as Meta<TooltipProps>

export const Primary: StoryObj<TooltipProps> = {
}

