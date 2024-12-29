import '@camposweb-ignite-ui/react/dist/index.css'
import type { Meta, StoryObj } from '@storybook/react';
import { Button, Toast, ToastProps} from '@camposweb-ignite-ui/react'
import { useEffect, useRef, useState } from 'react';



const ToastStories = (props: ToastProps) => {
	const [isOpen, setIsOpen] = useState(false)
	const timeRef = useRef(0)

	useEffect(() => {
		return () => clearTimeout(timeRef.current)
	}, [])

	return (
		<div>
		<Button onClick={() => {
			setIsOpen(false)
			window.clearTimeout(timeRef.current)
			timeRef.current = window.setTimeout(() => setIsOpen(true), 100)
		}}>Toast</Button>
		<Toast open={isOpen} onOpenChange={setIsOpen} {...props} />
	</div>
	)
}


export default {
  title: 'Form/Toast',
  component: ToastStories,
  args: {
		title: 'Agendamento realizado',
		description: 'Quarta-feira, 23 de Outubro às 16h',
	},
	/* decorators: [
		(Story) => {
			const [isOpen, setIsOpen] = useState(false)
			return (
				<Box className='flex items-center justify-center py-30 bg-gray-200'>
					<Button>Toast</Button>
					{Story()}
				</Box>
			)
		}
	] */
} as Meta<ToastProps>

export const Primary: StoryObj<ToastProps> = {
}
