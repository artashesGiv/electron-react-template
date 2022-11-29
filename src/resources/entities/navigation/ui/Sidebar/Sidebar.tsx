import { Link } from 'react-router-dom'

export const Sidebar = () => {
    return (
        <div className="sidebar">
            <Link to="/">home</Link>
            <Link to="/editor">editor</Link>
            <Link to="/game">game</Link>
        </div>
    )
}
