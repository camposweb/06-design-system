import { ComponentProps, ElementType } from "react"
import { tv, VariantProps } from "tailwind-variants"

const text = tv({
	base:[
		'font-default leading-shorter m-0 text-gray100'
	],
	variants: {
		size: {
			xxs: 'text-xxs',
        xs: 'text-xs',
        sm: 'text-sm',
        md: 'text-md',
        lg: 'text-lg',
        xl: 'text-xl',
        '2xl': 'text-2xl',
        '4xl': 'text-4xl',
        '5xl': 'text-4xl',
        '6xl': 'text-6xl',
        '7xl': 'text-7xl',
        '8xl': 'text-8xl',
        '9xl': 'text-9xl',
		}
	},
	defaultVariants: {
		size: 'md'
	}
})

type TextType = ComponentProps<'p'> & VariantProps<typeof text>

export interface TextProps extends TextType {
	as?: ElementType
}


export const Text = ({ className , size, as: Text = 'p', ...props }: TextProps) => {
	return (
		<Text {...props}  className={text({ className, size })} />
	)
}