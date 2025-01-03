import { Label, MultiStepContainer, Steps, Step } from "./styles"

export interface MultiStepProps {
	size: number
	currentStep?: number
}

export const MultiStep = ({ size, currentStep = 1 }: MultiStepProps) => {
	return (
		<MultiStepContainer>
			<Label size="xs">Passo {currentStep} de {size}</Label>
			<Steps>
				{Array.from({ length: size }, (_, i) => i + 1).map(step => {
					return (
						<Step key={step} active={currentStep >= step} />
					)
				})}
			</Steps>
		</MultiStepContainer>
	)
}