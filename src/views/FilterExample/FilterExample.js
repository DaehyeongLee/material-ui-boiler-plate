import React, { useEffect } from 'react'

function FilterExample(props) {

    const { history } = props;

    useEffect(() => {

        const init = () => {
            console.log("FIlter Example")
		};
		setTimeout(() => {
			init();
		});
        
    }, [])

    return (
        <h1>
            FilterExample <br />
        </h1>
    )
}

export default FilterExample
