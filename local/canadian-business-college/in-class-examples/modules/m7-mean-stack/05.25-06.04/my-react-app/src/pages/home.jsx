// My_home_page.jsx

import My_column_component from '../components/column'

function My_home_page() {
    return (
        <>
            <h1>Hello from the home page</h1>
            <p>This para is from the home page</p>

            <My_column_component
                my_column_heading="heading for the column"
                my_column_para="hello para"
                my_column_anchor_url="https://spacex.com"
                my_column_anchor_text="Go to Mars"
            />

        </>
    )
}

export default My_home_page;