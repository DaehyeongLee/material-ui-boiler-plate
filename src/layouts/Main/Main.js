import React from 'react'

function Main(props) {

    const { children, history } = props;

    return (
        <div>
            <h1>
                Main Layout
            </h1>
            <main>
                {children}
            </main>
        </div>
    )

}

export default Main
