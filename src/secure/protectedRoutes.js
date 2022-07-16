import { Children } from 'react'
import { Navigate } from 'react-router-dom'

const protectedRoutes = ({ isAth, children }) => {
    if (isAth) {
        return Children
    }
    else {
        return <Navigate to='/' replace />

    }
}

export default protectedRoutes