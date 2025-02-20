import { GlobalStyle } from './style/global-style'
import { Logo } from './components/welcome/logo-welcome'
import { MediaIcons } from './components/welcome/media-icons'
import { AppRoutes } from './pages/routes'

function App() {
 return (
        <>
            <GlobalStyle />
            <AppRoutes />
        </>
    )
}

export default App
