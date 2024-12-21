import { ComponentProps, ElementType } from "react";
import { tv, VariantProps } from "tailwind-variants";

const box = tv({
	base: [
		'p-4 rounded-md bg-gray800 border border-gray600 border-solid w-[100%]'
	]
})

type BoxType = ComponentProps<'div'> & VariantProps<typeof box>

export interface BoxProps extends BoxType {
	as?: ElementType
}

export const Box = ({ className, as: Box = 'div', ...props }: BoxProps) => {
	return (
		<Box {...props} className={box({ className })} />
	)
}