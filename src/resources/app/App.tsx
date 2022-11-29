import { Sidebar } from '../entities/navigation/ui/Sidebar/Sidebar'
import { Route, Routes } from 'react-router-dom'
import { Editor } from '../pages/editor/ui/Editor/Editor'

export const App = () => {
    return (
        <div className="app">
            <Sidebar/>
            <div className="app__container container">
                <Routes>
                    <Route path="/" element={<Home/>}/>
                    <Route path="/editor" element={<Editor/>}/>
                    <Route path="/game" element={<Game/>}/>
                    <Route path="*" element={<NotFound/>}/>
                </Routes>
            </div>
        </div>
    )
}

const Home = () => {
    return (
        <div className="home">
            home
        </div>
    )
}

const Game = () => {
    return (
        <div className="dame">
            game
        </div>
    )
}

const NotFound = () => {
    return (
        <div className="not-found">
            game
        </div>
    )
}
