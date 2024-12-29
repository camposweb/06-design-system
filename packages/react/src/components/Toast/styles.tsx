import * as Toast from "@radix-ui/react-toast";
import { ComponentProps } from "react";
import { tv, VariantProps } from "tailwind-variants";

const toasRoot = tv({
	base: [
		'py-3 px-5 bg-gray800 rounded-sm font-default relative',
		'border-2 border-solid border-gray600',
		'data-[swipe=cancel]:translate-x-0 data-[swipe=move]:translate-x-[var(--radix-toast-swipe-move-x)] data-[state=closed]:animate-hide data-[state=open]:animate-slideInToast data-[swipe=end]:animate-swipeOutToast data-[swipe=cancel]:transition-[transform_200ms_ease-out]'
	]
})

type ToastRootProps = ComponentProps<typeof Toast.Root> & VariantProps<typeof toasRoot>

export const ToastRoot = ({className, ...props}: ToastRootProps) => {
	return (
		<Toast.Root {...props} className={toasRoot({className})} />
	)
}

const toastTitle = tv({
	base: [
		'font-default font-bold text-white leading-base text-xl'
	]
})

type ToastTitleProps = ComponentProps<typeof Toast.Title> & VariantProps<typeof toastTitle>

export const ToastTitle = ({className, ...props}: ToastTitleProps) => {
	return (
		<Toast.Title {...props} className={toastTitle({className})} />
	)
}

const toastDescription = tv({
	base: [
		'font-default font-regular leading-base text-sm text-gray200 mt-1'
	]
})

type ToastDescriptionProps = ComponentProps<typeof Toast.Description> & VariantProps<typeof toastDescription>

export const ToastDescription = ({className, ...props}: ToastDescriptionProps) => {
	return (
		<Toast.Description {...props} className={toastDescription({className})} />
	)
}

const toastClose  = tv({
	base: [
		'text-gray200 w-5 h-5 border-none'
	]
})

type ToastCloseProps = ComponentProps<typeof Toast.Close> & VariantProps<typeof toastClose>

export const ToastClose = ({className, ...props}: ToastCloseProps) => {
	return (
		<Toast.Close {...props} className={toastClose({className})} />
	)
}


const toastViewport = tv({
	base: [
		'fixed bottom-0 right-0 max-w-[100vw] w-[390px] m-0 list-none z-[2147483647] outline-none flex p-[var(--viewport-padding)] [--viewport-padding:_25px] gap-10'
	]
})

type ToastViewportProps = ComponentProps<typeof Toast.Viewport> & VariantProps<typeof toastViewport>

export const ToastViewport = ({className, ...props}: ToastViewportProps) => {
	return (
		<Toast.Viewport {...props} className={toastViewport({className})} />
	)
}