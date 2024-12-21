import * as Avatar from "@radix-ui/react-avatar";
import { ComponentProps } from "react"
import { tv, VariantProps,  } from "tailwind-variants"

export const avatarContainer = tv({
	base: [
		'rounded-full inline-block w-12 h-12 overflow-hidden'
	]
})

type AvatarContainerType = ComponentProps<typeof Avatar.Root> & VariantProps<typeof avatarContainer>

export const AvatarContainer = ({ className, ...props }: AvatarContainerType) => {
	return (
		<Avatar.Root {...props} className={avatarContainer({ className })} />
	)
}

export const avatarImage = tv({
	base: [
		'object-cover w-[100%] h-[100%]'
	]
})

export type AvatarImageType = ComponentProps<typeof Avatar.Image> & VariantProps<typeof avatarImage>

export const AvatarImage = ({ className, ...props }: AvatarImageType) => {
	return (
		<Avatar.Image {...props} className={avatarImage({ className })} />
	)
}

export const avatarFallback = tv({
	base: [
		'w-[100%] h-[100%] flex items-center justify-center bg-gray600 text-gray800'
	]
})
type AvatarFallbackType = ComponentProps<typeof Avatar.Fallback> & VariantProps<typeof avatarFallback>

export const AvatarFallback = ({ className, ...props }: AvatarFallbackType) => {
	return (
		<Avatar.Fallback {...props} className={avatarFallback({ className })} />
	)
}
