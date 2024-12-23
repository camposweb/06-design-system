import * as Checkbox from "@radix-ui/react-checkbox";
import { ComponentProps } from "react";
import { twMerge } from "tailwind-merge";
import { tv, VariantProps } from "tailwind-variants";

const checkboxContainer = tv({
	base: [
		'w-6 h-6 bg-gray900 rounded-xs cursor-pointer overflow-hidden box-border flex justify-center items-center',
		'leading-[0]',
		'border-2 border-solid border-gray900',
		'focus:border-2 focus:border-solid focus:border-ignite300',
		'data-[state=checked]:bg-ignite300'
	]
})

type checkboxContainerType = ComponentProps<typeof Checkbox.Root> & VariantProps<typeof checkboxContainer>

export const CheckboxContainer = ({ className, ...props }: checkboxContainerType) => {
	return (
		<Checkbox.Root {...props} className={twMerge(checkboxContainer({className}), className)} />
	)
}

const checkboxIndicator = tv({
	base: [
		'text-white w-4 h-4',
		'data-[state=checked]:animate-slideIn duration-200 ease-out',
		'data-[state=unchecked]:animate-slideOut duration-200 ease-out'
	]
})

type checkboxIndicatorType = ComponentProps<typeof Checkbox.Indicator> & VariantProps<typeof checkboxIndicator>

export const CheckboxIndicator = ({ className, ...props }: checkboxIndicatorType) => {
	return (
		<Checkbox.Indicator {...props} className={checkboxIndicator({ className })} />
	)
}