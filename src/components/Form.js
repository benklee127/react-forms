


export default function Form () {
    return (
        <form>
            <label >
                Name
                <input name='name' type='text'/>
            </label>
            <label >
                Email
                <input name='email' type='email'/>
            </label>
            <label >
                Phone Number
                <input name='phoneNum' type='tel'/>
            </label>
            <label >
                Phone type
                <select name='phoneType'>
                    <option value="Home">Home</option>
                    <option value="Work">Work</option>
                    <option value="Mobile">Mobile</option>
                </select>
            </label>
            <label >
                Instructor
                <input name='role' type='radio' value='instructor'/>
            </label>
            <label >
                Student
                <input name='role' type='radio' value='student'/>
            </label>
            <label >
                Bio
                <textarea name='bio' placeholder = 'Please input a bio'></textarea>
            </label>
            <label >
                Name
                <input name='Name' type='text'/>
            </label>
        </form>
        )
}
