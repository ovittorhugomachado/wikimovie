import { GlobalStyle } from './style/global-style'
import { Logo } from './components/container-welcome/logo-welcome'
import { MediaIcons } from './components/container-welcome/media-icons'
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
