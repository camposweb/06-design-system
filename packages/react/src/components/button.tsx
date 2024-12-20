import { ComponentProps } from "react";
import { tv, VariantProps } from "tailwind-variants";


const button = tv({
	base: [
		'font-default bg-ignite300 rounded-sm border-0 font-bold text-white'
	],
	variants: {
		variant: {},
		size: {
			small: 
				'text-sm py-2 px-4',
			big: 'text-base py-3 px-6'
		},
	},
	defaultVariants: {
		size: 'small',
	},
})

export type ButtonProps = ComponentProps<'button'> & VariantProps<typeof button>

export const Button = ({ variant, size, className, ...props }: ButtonProps) => {
	return (
		<button {...props} className={button({ variant, className, size })} />
	)
}