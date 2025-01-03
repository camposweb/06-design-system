import { ComponentProps, ElementRef, ElementType, forwardRef } from "react";
import { tv, VariantProps } from "tailwind-variants";

const button = tv({
	base: [
		'py-0 px-4 disabled:cursor-not-allowed rounded-sm text-sm font-medium font-default text-center min-w-[120px] box-border flex items-center justify-center gap-2 cursor-pointer',
		'disabled:cursor-not-allowed',
		//'focus:shadow-sm focus:shadow-gray100'
	],
	variants: {
		variant: {
			primary: 'text-white bg-ignite500 disabled:bg-gray200 hover:bg-ignite300',
			secundary: 'text-ignite300 border-2 border-solid border-ignite500 hover:bg-ignite500 hover:text-white disabled:text-gray200 disabled:bg-gray200',
			tertiary: 'text-gray100 hover:text-white disabled:text-gray600',
		},
		size: {
			sm: 'h-[38px]',
			md: 'h-[46px]'
		}
	},
	defaultVariants: {
		variant: 'primary',
		size: 'md'
	}
})

type ButtonType = ComponentProps<'button'> & VariantProps<typeof button>

export interface ButtonProps extends ButtonType {
	as?: ElementType
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(({ className, as: Component = 'button', variant, size, ...props }: ButtonProps, ref) => {
	return (
		<Component {...props} ref={ref} className={button({className, variant, size})} />
	)
})
