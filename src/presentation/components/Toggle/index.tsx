import { ReactNode, useCallback, useState } from 'react'

type ToggleProps = {
  children: (data: { isVisible: boolean; toggle: () => void }) => ReactNode
};

export function Toggle({ children }: ToggleProps) {
  const [isVisible, setIsVisible] = useState(false)

  const handleClick = useCallback(() => setIsVisible(oldState => !oldState), [])

  return children({
    isVisible,
    toggle: handleClick,
  })
}
