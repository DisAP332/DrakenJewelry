import { NavLink } from 'react-router-dom'
import { Nav } from 'react-bootstrap'

import searchIcon from '../Icons/searchIcon.png'
import bagIcon from '../Icons/bagIcon.png'
import favoritesIcon from '../Icons/favoritesIcon.png'

export function Navbar(Props) {

    return(
        <div className='headerWrap'>
            <div className='leftHeader'>
                <h3>Ship To</h3>
                <select>
                    <option value="AL">AL</option>
                    <option value="AK">AK</option>
                    <option value="AR">AR</option>
                    <option value="AZ">AZ</option>
                    <option value="CA">CA</option>
                    <option value="CO">CO</option>
                    <option value="CT">CT</option>
                    <option value="DC">DC</option>
                    <option value="DE">DE</option>
                    <option value="FL">FL</option>
                    <option value="GA">GA</option>
                    <option value="HI">HI</option>
                    <option value="IA">IA</option>
                    <option value="ID">ID</option>
                    <option value="IL">IL</option>
                    <option value="IN">IN</option>
                    <option value="KS">KS</option>
                    <option value="KY">KY</option>
                    <option value="LA">LA</option>
                    <option value="MA">MA</option>
                    <option value="MD">MD</option>
                    <option value="ME">ME</option>
                    <option value="MI">MI</option>
                    <option value="MN">MN</option>
                    <option value="MO">MO</option>
                    <option value="MS">MS</option>
                    <option value="MT">MT</option>
                    <option value="NC">NC</option>
                    <option value="NE">NE</option>
                    <option value="NH">NH</option>
                    <option value="NJ">NJ</option>
                    <option value="NM">NM</option>
                    <option value="NV">NV</option>
                    <option value="NY">NY</option>
                    <option value="ND">ND</option>
                    <option value="OH">OH</option>
                    <option value="OK">OK</option>
                    <option value="OR">OR</option>
                    <option value="PA">PA</option>
                    <option value="RI">RI</option>
                    <option value="SC">SC</option>
                    <option value="SD">SD</option>
                    <option value="TN">TN</option>
                    <option value="TX">TX</option>
                    <option value="UT">UT</option>
                    <option value="VT">VT</option>
                    <option value="VA">VA</option>
                    <option value="WA">WA</option>
                    <option value="WI">WI</option>
                    <option value="WV">WV</option>
                    <option value="WY">WY</option>
                </select>
            </div>
            <div className='middleHeader'>
                <Nav.Link to={'/'} as={NavLink}><h1 className='CompanyBanner'>Draken Jewelry</h1></Nav.Link>
                <div className='specialLinks'>
                    <h2 className='specialLink'>OUR JEWELRY</h2>
                    <h2>|</h2>
                    <h2 className='specialLink'>OUR MOTTO</h2>
                    <h2>|</h2>
                    <h2 className='specialLink'>INSIDE THE ART</h2>
                    <h2>|</h2>
                    <h2 className='specialLink'>PERFECT PEICE QUIZ</h2>
                </div>
            </div>
            <div className='rightHeader'>
                <img src={searchIcon} alt='Icon' />
                <h3>Search</h3>
                <Props.signIn/>
                <img src={favoritesIcon} alt='Icon' />
                <img src={bagIcon} alt='Icon' />
            </div>
        </div>
    )
}