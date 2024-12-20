import { ComponentProps } from "react"
import { AvatarContainer, AvatarFallback, AvatarImage } from "./styles"

export interface AvatarProps extends ComponentProps<typeof AvatarImage> {}

export const Avatar = (props: AvatarProps) => {
	return (
		<AvatarContainer>
			<AvatarImage {...props} />
			<AvatarFallback delayMs={600}>
			</AvatarFallback>
		</AvatarContainer>
	)
}