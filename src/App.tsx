import { Suspense } from 'react'
import PublicRoutes from './routes/PublicRoutes'
import PrivateRoutes from './routes/PrivateRoutes'
const App = () => {
    return (
        <Suspense fallback={'Loading...'}>
            <PrivateRoutes />
            <PublicRoutes />
            </Suspense>
    )
} 
export default App