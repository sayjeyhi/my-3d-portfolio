import { Contents } from './Contents'
import { CursorContextProvider } from './Cursor'
import { Menu } from './Menu'

export const Interface = props => {
  const { setSection, menuOpened, setMenuOpened, section } = props

  return (
    <CursorContextProvider>
      <Menu onSectionChange={setSection} menuOpened={menuOpened} setMenuOpened={setMenuOpened} />
      <Contents menuOpened={menuOpened} setSection={setSection} section={section} />
    </CursorContextProvider>
  )
}
