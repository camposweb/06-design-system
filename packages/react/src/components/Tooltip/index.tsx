import * as TooltipPrimitive from "@radix-ui/react-tooltip";
import { ComponentProps, ReactNode } from "react";
import { TooltipArrow, TooltipContent } from "./styles";


export interface TooltipProps extends ComponentProps<typeof TooltipPrimitive.Root> {
	children: ReactNode
	content: string | ReactNode
}

export const Tooltip = ({children, content, ...props}: TooltipProps) => {
	return (
		<TooltipPrimitive.Provider>
			<TooltipPrimitive.Root {...props}>
					<TooltipPrimitive.Trigger asChild>
						{children}
					</TooltipPrimitive.Trigger>
					<TooltipPrimitive.Portal>
						<TooltipContent>
							{content}
							<TooltipArrow />
						</TooltipContent>
					</TooltipPrimitive.Portal>
			</TooltipPrimitive.Root>
		</TooltipPrimitive.Provider>
	)
}