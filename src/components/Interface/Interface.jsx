import { Contents } from './Contents/Contents.jsx'
import { Cursor, CursorContextProvider } from './Cursor.jsx'
import { Menu } from './Menu.jsx'

export const Interface = props => {
  const { setSection, menuOpened, setMenuOpened } = props
  return (
    <CursorContextProvider>
      <Menu onSectionChange={setSection} menuOpened={menuOpened} setMenuOpened={setMenuOpened} />
      <Contents setSection={setSection} />
      <Cursor />
    </CursorContextProvider>
  )
}
