import * as ToastPrimitive from "@radix-ui/react-toast";
import { X } from "lucide-react";
import { ComponentProps } from "react";
import { ToastClose, ToastDescription, ToastRoot, ToastTitle, ToastViewport } from "./styles";

export interface ToastProps extends ComponentProps<typeof ToastPrimitive.Root> {
	title: string
	description?: string
}

export const Toast = ({ title, description, ...props }: ToastProps) => {
	return (
		<ToastPrimitive.Provider>
			<ToastRoot {...props}>
			
				
				<div className="flex justify-between gap-10 items-center">
				<ToastTitle>{title}</ToastTitle>
				<ToastClose><X /></ToastClose>
				</div>
			
				{description && (
					<ToastDescription>{description}</ToastDescription>
				)}
				
			</ToastRoot>
			<ToastViewport />
		</ToastPrimitive.Provider>
	)}