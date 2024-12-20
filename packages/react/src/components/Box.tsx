import { ComponentProps } from "react";
import { tv, VariantProps } from "tailwind-variants";

const box = tv({
	base: [
		'p-4 rounded-md bg-gray-800 border border-gray-600 border-solid w-[100%]'
	]
})

export type BoxProps = ComponentProps<'div'> & VariantProps<typeof box>

export const Box = ({ className, ...props }: BoxProps) => {
	return (
		<div {...props} className={box({ className })} />
	)
}