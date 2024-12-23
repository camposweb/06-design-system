import { Check } from "lucide-react";
import { CheckboxContainer, CheckboxIndicator } from "./styles";
import { ComponentProps } from "react";

export interface CheckboxProps extends ComponentProps<typeof CheckboxContainer> {
	//checked?: boolean
}

export function CheckBox(props: CheckboxProps) {
	return (
		<CheckboxContainer {...props}>
			<CheckboxIndicator asChild>
				<Check fontWeight='bold' />
			</CheckboxIndicator>
		</CheckboxContainer>
	)
}