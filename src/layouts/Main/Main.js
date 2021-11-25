import React from 'react'

function Main(props) {

    const { children, history } = props;

    return (
        <div>
            <main>
                {children}
            </main>
        </div>
    )

}

export default Main
