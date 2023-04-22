import { NavLink } from 'react-router-dom'
import { Nav } from 'react-bootstrap'

export function Home() {
    return(
        <div className='homeWrap'>
            <div className='shopBanner'>
                <h1>DISCOVER WHAT POWERFUL LOOKS LIKE IN SILVER</h1>
            </div>
            <div className='shop'>
            <Nav.Link to={'/Store'} as={NavLink}>SHOP NOW</Nav.Link>
            </div>
        </div>
    )
}