// My_home_page.jsx

import Container_div from '../components/layout'
import { Row_div } from '../components/layout'
import My_column_component from '../components/column'
// import an image from the assets folder
import bottle_image from '../assets/images/bottle.png'

function My_home_page() {
    return (
        <Container_div>

            <Row_div>

                <My_column_component
                    my_column_heading="heading for the column"
                    my_column_para="hello para"
                    my_column_anchor_url="https://spacex.com"
                    my_column_anchor_text="Go to Mars"
                />
                {/* refer to image in the src of img as variable declared in the import statement */}
                <img src={bottle_image} alt='image for a bottle' height={'100px'}></img>

            </Row_div>

            <Row_div>

                <img src={bottle_image} alt='image for a bottle' height={'100px'}></img>

                <My_column_component
                    my_column_heading="Heading for another row"
                    my_column_para="hello para from second row"
                    my_column_anchor_url="https://google.com"
                    my_column_anchor_text="Go to Google"
                />

            </Row_div>

        </Container_div>
    )
}

export default My_home_page;