import { ComponentProps, ElementType } from "react";
import { twMerge } from "tailwind-merge";
import { tv, VariantProps } from "tailwind-variants";

const box = tv({
	base: [
		'p-4 rounded-md bg-gray800 border border-gray600 border-solid w-full',
		'flex flex-col'
	]
})

type BoxType = ComponentProps<'div'> & VariantProps<typeof box>

export interface BoxProps extends BoxType {
	as?: ElementType
}

export const Box = ({ className, as: Component = 'div', ...props }: BoxProps) => {
	return (
		<Component {...props} className={twMerge(box({className}), className)} />
	)
}