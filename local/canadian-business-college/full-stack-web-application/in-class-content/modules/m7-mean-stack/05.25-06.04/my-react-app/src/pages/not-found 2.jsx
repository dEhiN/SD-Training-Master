// not-found.jsx

import Container_div from '../components/layout'
import {Row_div, Column_div} from '../components/layout'

function My_notfound_page(){
    return (
        <Container_div>

            <Row_div>

                <Column_div>
                
                    <h1>Page not found</h1>
                    <p>We do not serve any content on this path</p>

                </Column_div>

            </Row_div>
        
        </Container_div>
    )
}

export default My_notfound_page;