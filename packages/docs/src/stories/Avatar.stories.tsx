import '@camposweb-ignite-ui/react/dist/index.css'
import type { Meta, StoryObj } from '@storybook/react';
import { Avatar,AvatarProps } from '@camposweb-ignite-ui/react'

export default {
  title: 'Data Display/Avatar',
  component: Avatar,
  args: {
	 src: 'https://github.com/camposweb.png',
	 alt: 'Campos Web'
	}
} as Meta<AvatarProps>

export const Primary: StoryObj<AvatarProps> = {}

export const WithFallback: StoryObj<AvatarProps> = {
	args: {
		src: undefined,
	}
}

