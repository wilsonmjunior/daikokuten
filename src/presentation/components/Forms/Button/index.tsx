import { Button as NBButton, IButtonProps } from "native-base"

type IButtonType = 'primary' | 'secondary' | 'error' | 'success'

interface ButtonProps extends IButtonProps {
  title: string
  type?: IButtonType
}

export function Button({ title, type = 'primary', ...othersProps }: ButtonProps) {
  return (
    <NBButton
      colorScheme={type}
      size="lg"
      _loading={{
        bg: "warning.400:alpha.70",
        _text: {
          color: "white",
        }
      }}
      {...othersProps}
    >
      {title}
    </NBButton>
  )
}
