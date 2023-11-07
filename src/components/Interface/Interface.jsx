import { Contents } from './Contents/Contents.jsx'
import { CursorContextProvider } from './Cursor.jsx'
import { Menu } from './Menu.jsx'

export const Interface = props => {
  const { setSection, menuOpened, setMenuOpened, section } = props

  return (
    <CursorContextProvider>
      <Menu onSectionChange={setSection} menuOpened={menuOpened} setMenuOpened={setMenuOpened} />
      <Contents menuOpened={menuOpened} setSection={setSection} section={section} />
    </CursorContextProvider>
  )
}
