import { GlobalStyle } from './style/global-style'
import { AppRoutes } from './pages/routes'
import { GenreProvider } from './context/genre-context'

function App() {
    return (
        <>
            <GenreProvider>
                <GlobalStyle />
                <AppRoutes />
            </GenreProvider>
        </>
    )
}

export default App
