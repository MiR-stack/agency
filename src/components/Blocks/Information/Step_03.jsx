import React from 'react'

export default function Step03({ prop }) {
    const { error, onChangeHandler, projectDetails, projectTitle } = prop
    return (
        <div className='input'>
            <table>
                <tbody>
                    <tr>
                        <th><label htmlFor="project_title"> project title</label></th>
                        <th>:</th>
                        <td className={(!projectTitle && error) ? 'error' : ''}>
                            <input type="text" placeholder='Type your project title' name="projectTitle" value={projectTitle} onChange={(e) => { onChangeHandler(e) }} />
                            <p>please type your project title</p>
                        </td>

                    </tr>
                    <tr>
                        <th><label htmlFor="project_details">details</label></th>
                        <th>:</th>
                        <td className={(!projectDetails && error) ? 'error' : ''}>
                            <textarea name="projectDetails" value={projectDetails} id="project_details" placeholder='Write about your project in details...' onChange={(e) => { onChangeHandler(e) }}></textarea>
                            <p>please type your project details</p>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}
