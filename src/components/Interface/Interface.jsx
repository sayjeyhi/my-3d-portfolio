import { Contents } from './Contents/Contents.jsx'
import { CursorContextProvider } from './Cursor.jsx'
import { Menu } from './Menu.jsx'
import { useState } from 'react'

export const Interface = props => {
  const [audioMuted, setAudioMuted] = useState(false)
  const { setSection, menuOpened, setMenuOpened, section } = props
  return (
    <CursorContextProvider>
      <Menu
        audioMuted={audioMuted}
        setAudioMuted={setAudioMuted}
        onSectionChange={setSection}
        menuOpened={menuOpened}
        setMenuOpened={setMenuOpened}
      />
      <Contents
        audioMuted={audioMuted}
        menuOpened={menuOpened}
        setSection={setSection}
        section={section}
      />
    </CursorContextProvider>
  )
}
