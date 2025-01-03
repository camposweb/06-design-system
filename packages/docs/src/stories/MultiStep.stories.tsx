import '@camposweb-ignite-ui/react/dist/index.css'
import type { Meta, StoryObj } from '@storybook/react';
import { Box, MultiStep, MultiStepProps} from '@camposweb-ignite-ui/react'

export default {
  title: 'Form/Multi Step',
  component: MultiStep,
  args: {
		size: 4,
		currentStep: 1
	},
	decorators: [
		(Story) => {
			return (
				<Box as='label' className='flex flex-col gap-2'>
					{Story()}
				</Box>
			)
		}
	]
} as Meta<MultiStepProps>

export const Primary: StoryObj<MultiStepProps> = {
	args: {}
}

export const Full: StoryObj<MultiStepProps> = {
	args: {
		currentStep: 4
	}
}
