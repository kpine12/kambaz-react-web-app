export default function AssignmentEditor() {
    return (
        <div id="wd-assignments-editors">
            <label htmlFor="wd-name">
                <h3>
                    Assignment Name
                </h3>
            </label>
            <input id="wd-name" value="A1 - ENV + HTML"/><br/><br/>
            <textarea id="wd-description">
                The assignment is available online Submit a link to the landing page of 
                your Web application running on Netlify. The landing page should
                include the following: Your full name and section Links to each of
                the lab assignments Link to the Kanbaz application Links to all relevant
                source code repositories The Kanbaz application should include a link to
                navigate back to the landing page.
            </textarea>
            <br/>
            <table>
                <tr>
                    <td align="right" valign="top">
                        <label htmlFor="wd-points">Points</label>
                    </td>
                    <td>
                        <input id="wd-points" value={100}/>
                    </td>
                </tr>
                <tr>
                    <td align="right" valign="top">
                        <label htmlFor="wd-group">Assignment Group</label>
                    </td>
                    <td>
                        <select id="wd-group">
                            <option value="ASSIGNMENTS">ASSIGNMENTS</option>
                        </select>
                    </td>
                </tr>
                <tr>
                    <td align="right" valign="top">
                        <label htmlFor="wd-display-grade-as">Display Grade as</label>
                    </td>
                    <td>
                        <select id="wd-display-grade-as">
                            <option selected value="PERCENTAGE">Percentage</option>
                            <option value="LETTER">Letter</option>
                            <option value="FRACTION">Fraction</option>
                        </select>
                    </td>
                </tr>
                <tr>
                    <td align="right" valign="top">
                        <label htmlFor="wd-submission-type">Submission Type</label>
                    </td>
                    <td>
                        <select id="wd-submission-type">
                            <option selected value="ONLINE">Online</option>
                            <option value="TRADITIONAL">Traditional</option>
                        </select>
                    </td>
                </tr>
                <tr>
                    <td></td>
                    <td>
                            <label>Online Entry Options</label><br/>

                            <input type="checkbox" name="check-type" id="wd-text-entry"/>
                            <label htmlFor="wd-text-entry">Text Entry</label><br/>
                            
                            <input type="checkbox" name="check-type" id="wd-website-url"/>
                            <label htmlFor="wd-website-url">Website URL</label><br/>
                            
                            <input type="checkbox" name="check-type" id="wd-media-recordings"/>
                            <label htmlFor="wd-media-recordings">Media Recordings</label><br/>

                            <input type="checkbox" name="check-type" id="wd-student-annotation"/>
                            <label htmlFor="wd-student-annotation">Student Annotation</label><br/>

                            <input type="checkbox" name="check-type" id="wd-file-upload"/>
                            <label htmlFor="wd-file-upload">File Uploads</label><br/>
                        </td>
                </tr>
                <tr>
                    <td align="right" valign="top">
                        <label htmlFor="wd-assign-to">Assign Assign to</label>
                    </td>
                </tr>
                <tr>
                    <td></td>
                    <td>
                        <input placeholder="Everyone" id="wd-assign-to"/>
                    </td>
                </tr>
                <tr>
                    <td></td>
                    <td align="left" valign="top">
                        <label htmlFor="wd-due-date">Due</label>
                    </td>
                </tr>
                <tr>
                    <td></td>
                    <td>
                        <input type="date" value="2024-05-13" id="wd-due-date"/>
                    </td>
                </tr>
                <tr>
                    <td></td>
                    <td align="left" valign="top">
                        <label htmlFor="wd-available-from">Available from</label>
                    </td>
                    <td align="left" valign="top">
                        <label htmlFor="wd-available-until">Until</label>
                    </td>
                </tr>
                <tr>
                    <td></td>
                    <td>
                        <input type="date" value="2024-05-06" id="wd-available-until"/>
                    </td>
                    <td>
                        <input type="date" value="2024-05-20" id="wd-available-until"/>
                    </td>
                </tr>
            </table>
            <hr/>
            <button>Cancel</button> <button>Save</button>
        </div>
    );
}