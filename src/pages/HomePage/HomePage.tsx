import {Helmet} from 'react-helmet'
import { TestDiv } from './styled'
const HomePage: React.FC = () => {
    return <> {
        <Helmet>
            <title>Main of MW MArketplace</title>
        </Helmet>
    }
    <h1>Головна сторінка</h1>
    </>
}
export default HomePage
export {}