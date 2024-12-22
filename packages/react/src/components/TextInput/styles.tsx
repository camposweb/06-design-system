import { ComponentProps } from "react";
import { tv, VariantProps } from "tailwind-variants";

const textInputContainer = tv({
	base: [
		'bg-gray900 py-3 px-4 rounded-sm border-2 border-solid border-gray900 flex items-baseline',
		'has-[input:focus]:border-ignite300',
		'disabled:opacity-50 disabled:cursor-not-allowed'
	]
})

type TextInputContainerType = ComponentProps<'div'> & VariantProps<typeof textInputContainer>

export const TextInputContainer = ({className, ...props}: TextInputContainerType) => {
  return (
    <div className={textInputContainer({className})} {...props} />
  )
}

const prefix = tv({
	base: [
		'font-default text-sm text-gray400 font-regular',
		''
	]
})

type PrefixType = ComponentProps<'span'> & VariantProps<typeof prefix>

export const Prefix = ({className, ...props}: PrefixType) => {
  return (
    <span className={prefix({className})} {...props} />
  )
}

const input = tv({
	base: [
		'font-default text-sm text-white font-regular bg-transparent border-0 w-full',
		'focus:outline-0 focus-within:outline-0 focus-visible:outline-0',
		'disabled:cursor-not-allowed',
		'placeholder:text-gray400'
	]
})

type InputType = ComponentProps<'input'> & VariantProps<typeof input>

export const Input = ({className, ...props}: InputType) => {
  return (
    <input className={input({className})} {...props} />
  )
}