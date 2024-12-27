import * as Tooltip from '@radix-ui/react-tooltip'
import { ComponentProps, forwardRef } from "react";
import { tv, VariantProps } from "tailwind-variants";

const tooltipContent = tv({
	base: [
		'bg-gray900 py-3 px-4 text-gray100 text-sm font-medium font-default rounded-xs drop-shadow-tooltip-content',
		'relative inline-flex',
		'data-[state=delayed-open]:data-[side=bottom]:animate-slideUpAndFade data-[state=delayed-open]:data-[side=left]:animate-slideRightAndFade data-[state=delayed-open]:data-[side=right]:animate-slideLeftAndFade data-[state=delayed-open]:data-[side=top]:animate-slideDownAndFade'
	]
})

type TooltipContentType = ComponentProps<typeof Tooltip.Content> & VariantProps<typeof tooltipContent>

export const TooltipContent = forwardRef<HTMLDivElement, TooltipContentType>(({className, ...props}: TooltipContentType, ref) => {
  return (
    <Tooltip.Content {...props} ref={ref} className={tooltipContent({className})} />
  )
})

const tooltipArrow = tv({
	base: [
		'fill-gray900',
	]
})

type TooltipArrowType = ComponentProps<typeof Tooltip.Arrow> & VariantProps<typeof tooltipArrow>

export const TooltipArrow = forwardRef<SVGSVGElement, TooltipArrowType>(({className, ...props}: TooltipArrowType, ref) => {
  return (
    <Tooltip.Arrow {...props} ref={ref} className={tooltipArrow({className})} />
  )
})