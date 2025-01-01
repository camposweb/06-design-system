import { ComponentProps, forwardRef } from "react";
import { tv, VariantProps } from "tailwind-variants";

const textArea = tv({
	base: [
		'bg-gray900 py-3 px-4 rounded-sm border-2 border-solid border-gray900 flex items-baseline',
		'has-[input:focus]:border-ignite300 focus:outline-0 focus:border-ignite300',
		'disabled:opacity-50 disabled:cursor-not-allowed',
		'placeholder:text-gray400',
		'font-regular resize-y max-h-20 text-white',
		'focus:outline-none'
	]
})

type TextAreaType = ComponentProps<'textarea'> & VariantProps<typeof textArea>

export interface TextAreaProps extends TextAreaType {
	//as?: ElementType
}

export const TextArea = forwardRef<HTMLTextAreaElement, TextAreaProps>(({ className, ...props }: TextAreaProps, ref) => {
	return (
		<textarea  {...props} ref={ref}  className={textArea({ className })}/>
	)
})