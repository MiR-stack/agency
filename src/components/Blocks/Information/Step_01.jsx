import React from 'react'

export default function Step01({ prop }) {
    const { error, onChangeHandler, userName, phone } = prop
    return (
        <div className='input'>
            <table>
                <tbody>
                    <tr>
                        <th><label htmlFor="name">name</label></th>
                        <th>:</th>
                        <td className={(!userName && error) ? 'error' : ''} >
                            <input type="text" placeholder='Type your name' name='userName' value={userName} onChange={(e) => { onChangeHandler(e) }} />
                            <p>please type your name</p>
                        </td>
                    </tr>
                    <tr>
                        <th><label htmlFor="phone">phone</label></th>
                        <th>:</th>
                        <td className={(!phone && error) ? 'error' : ''}>
                            <input type="text" placeholder='Type your phone number' name='phone' value={phone} onChange={(e) => { onChangeHandler(e) }} />
                            <p>please type your phone number</p>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

