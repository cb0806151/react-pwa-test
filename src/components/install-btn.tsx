import { Button } from '@chakra-ui/react'
import React, { ReactElement, useEffect, useState } from 'react'

// courtesy of Santiago https://dev.to/woile/simplest-react-hook-component-for-pwa-install-button-2die
const InstallPWA = (): ReactElement => {
  const [supportsPWA, setSupportsPWA] = useState(false)
  const [promptInstall, setPromptInstall] = useState<null | any>(null)

  useEffect(() => {
    const handler = (e: any): void => {
      e.preventDefault()
      // eslint-disable-next-line no-console
      console.log('we are being triggered :D')
      setSupportsPWA(true)
      setPromptInstall(e)
    }
    window.addEventListener('beforeinstallprompt', handler)

    return () => window.removeEventListener('transitionend', handler)
  }, [])

  const onClick = (evt: any): void => {
    evt.preventDefault()
    if (!promptInstall) {
      return
    }
    promptInstall.prompt()
  }
  if (!supportsPWA) {
    return <></>
  }
  return (
    <Button
      colorScheme="green"
      className="link-button"
      id="setup_button"
      aria-label="Install app"
      title="Install app"
      onClick={onClick}
    >
      Install
    </Button>
  )
}

export default InstallPWA
