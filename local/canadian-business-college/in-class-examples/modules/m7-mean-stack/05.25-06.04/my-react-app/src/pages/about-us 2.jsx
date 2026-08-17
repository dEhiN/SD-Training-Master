// about-us.jsx

import Show_users_list from '../components/user_list'
import Container_div from '../components/layout'
import { Row_div, Column_div } from '../components/layout'

function My_about_page() {

    // declare the path as a variable
    let phone_path = 'images/phone.png'

    return (
        <Container_div>

            <Row_div>

                <Column_div>
                    {/* using the image path as a variable in expressions */}
                    <img src={phone_path} height='200px'></img>
                    <h1>Hello from the about us page</h1>
                    <p>This para is from the about us page</p>
                    <Show_users_list />
                    {/* using the image path as a full path */}
                    <img src='images/phone.png' height='200px'></img>

                </Column_div>

            </Row_div>

        </Container_div>
    )
}

export default My_about_page;