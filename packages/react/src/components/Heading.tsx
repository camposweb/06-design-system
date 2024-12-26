import { ComponentProps, ElementType } from "react"
import { tv, VariantProps } from "tailwind-variants"

const heading = tv({
	base:[
		'font-default leading-base m-0 text-gray100'
	],
	variants: {
		size: {
				sm: 'text-xl',
				md: 'text-2xl',
				lg: 'text-4xl',
				'2xl': 'text-5xl',
				'4xl': 'text-7xl',
				'5xl': 'text-8xl',
				'6xl': 'text-9xl',
		}
	},
	defaultVariants: {
		size: 'md'
	}
})

type HeadingType = ComponentProps<'h2'> & VariantProps<typeof heading>

export interface HeadingProps extends HeadingType {
	as?: ElementType
}


export const Heading = ({ className , size, as: Component = 'h2', ...props }: HeadingProps) => {
	return (
		<Component {...props}  className={heading({ className, size })} />
	)
}