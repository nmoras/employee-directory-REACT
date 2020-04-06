import React from 'react'

function Header() {
    const headerStyle = {
        // image: { height: '30vh'},
        // alert: { display: 'none'}
        col: {border: '3px solid blue'},
        headertxt: {color: 'blue', font: 'monospace', fontSize: '5rem', padding: '5px'}
    }

    return (
        <div>
            <div class="row">
                <div class="col-12 p-2" style={headerStyle.col}>
                    <h1 class=" headertxt text-center">EMPLOYEE DIRECTORY</h1>
                </div>
            </div>
            
            
        </div>
    )
}

export default Header
