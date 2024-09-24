import { Route, Routes } from 'react-router-dom'
import Login from './Login'
import App from '../App'

const UserRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<App />} />
            <Route path="/login" element={<Login />} />
        </Routes>
    )
}

export default UserRoutes