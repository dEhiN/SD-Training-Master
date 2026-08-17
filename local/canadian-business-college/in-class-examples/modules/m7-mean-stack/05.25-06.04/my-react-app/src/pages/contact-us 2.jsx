// contact-us.jsx

import My_form_component from '../components/form'
import Container_div from '../components/layout'
import {Row_div, Column_div} from '../components/layout'

function My_contact_page(){
    return (
        <Container_div>

            <Row_div>
                
                <Column_div>

                    <h1>Hello from the contact page</h1>
                    <p>This para is from the contact page</p>

                    <My_form_component />

                </Column_div>

            </Row_div>

        </Container_div>
    )
}

export default My_contact_page