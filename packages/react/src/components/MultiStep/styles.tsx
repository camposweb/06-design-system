import { ComponentProps } from "react";
import { tv, VariantProps } from "tailwind-variants";
import { Text, TextProps } from "../Text";
import { twMerge } from "tailwind-merge";

const multiStepContainer = tv({})

type MultiStepContainerType = ComponentProps<'div'> & VariantProps<typeof multiStepContainer>

interface MultiStepContainerProps extends MultiStepContainerType {}

export function MultiStepContainer({ className, ...props }: MultiStepContainerProps) {
  return (
    <div {...props} className={multiStepContainer({className})}/>
  )
}

const label = tv({
	base: [
		'text-gray200'
	],

})

type LabelType = TextProps & VariantProps<typeof label>

interface LabelProps extends LabelType {
}

export function Label({ className, as = 'label', size, ...props }: LabelProps) {
  return (
    <Text {...props} as={as} size={size} className={label({className})}/>
  )
}

const steps = tv({
  base: [
    'grid mt-2 gap-2 grid-cols-4'
  ]
})


type StepType = ComponentProps<'div'> & VariantProps<typeof steps>

export interface StepProps extends StepType {}

export function Steps({ className, ...props }: StepProps) {
  return (
    <div {...props} className={twMerge(steps({className}), className)}/>
  )
}

const step = tv({
  base: [
    'h-1 rounded-px bg-gray600'
  ],
  variants: {
      active: {
        true: 'bg-gray100'
      }
  }
})

type StepItemType = ComponentProps<'div'> & VariantProps<typeof step>

export interface StepItemProps extends StepItemType {}

export function Step({ className, active, ...props }: StepItemProps) {
  return (
    <div {...props} className={step({className, active})}/>
  )
}

