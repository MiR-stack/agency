import React from 'react'

export default function Step02({ prop }) {
    const { error, onChangeHandler, companyName, email, budget } = prop
    return (
        <div className='input'>


            <table >
                <tbody>
                    <tr>
                        <th><label htmlFor="company_name">company name</label></th>
                        <th>:</th>
                        <td className={(error && !companyName) ? 'error' : ''}>
                            <input type="text" id='company_name' placeholder='type your company name' name="companyName" value={companyName} onChange={(e) => { onChangeHandler(e) }} />
                            <p>please type your company name </p>
                        </td>
                    </tr>
                    <tr>
                        <th><label htmlFor="email">email</label><br /></th>
                        <th>:</th>
                        <td className={(error && !email) ? 'error' : ''}>
                            <input type="email" id='email' placeholder='type your email' name='email' value={email} onChange={(e) => { onChangeHandler(e) }} />
                            <p>please type your email</p>
                        </td>

                    </tr>
                    <tr>
                        <th><label htmlFor="budget">budget</label></th>
                        <th>:</th>
                        <td className={(error && !budget) ? 'error' : ''}>
                            <select name="budget" value={budget} id="budget" placeholder='select ' onChange={(e) => { onChangeHandler(e) }}>
                                <option value="">select your budget</option>
                                <option value="under 1000"> under 1000$</option>
                                <option value="1000-5000"> 1000$-5000$</option>
                                <option value="5000+">5000+</option>
                            </select>
                            <p>please select your budget</p>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    )



}
