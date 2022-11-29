import { createRoot } from 'react-dom/client'
import { App } from './resources/app/App'
import { BrowserRouter } from 'react-router-dom'

const container = document.getElementById('app')
createRoot(container).render(
    <BrowserRouter>
        <App/>
    </BrowserRouter>,
)
