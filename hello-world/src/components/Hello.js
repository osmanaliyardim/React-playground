import React from 'react';

const Hello = () => {
    // return (
    //     <div className='dummyClass'>
    //         <h1>Hello | Hola | Hallo | Merhaba</h1>
    //     </div>
    // )

    return React.createElement(
        'div', 
        {id: 'hello', className: 'dummyClass'}, 
        React.createElement('h1', null, 'Hello | Hola | Hallo | Merhaba')
    )
}

export default Hello;