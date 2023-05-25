import { useState } from 'react';

export default function Form () {
    const [name, setName] = useState();
    const [email, setEmail] = useState();
    const [phone, setPhone] = useState();
    const [phoneType, setPhoneType] = useState();
    const [bio, setBio] = useState();
    const [role, setRole] = useState();
    const [emailNotice, setEmailNotice] = useState();
    const [validationErrors, setValidationErrors] = useState();

    const validate = () => {
        const errors = {};

        if(!name)
    }

    const onSubmit = e => {
        e.preventDefault();
        console.log(name);
        console.log(email);
        console.log(phone);
        console.log(phoneType);
        console.log(bio);
        console.log(role);
        console.log(emailNotice);

        setName();
        setEmail();
        setPhone();
        setPhoneType();
        setBio();
        setRole();
        setEmailNotice();

        const formInfo = {
            name,
            email,
            phone,
            phoneType,
            bio,
            role,
            emailNotice
        };

        console.log(formInfo);
    }

    return (
        <form>
            <label >
                Name
                <input id='name' type='text' value={name} onChange={e => setName(e.target.value)}/>
            </label>
            <label >
                Email
                <input id='email' type='email' onChange={e => setEmail(e.target.value)}/>
            </label>
            <label >
                Phone Number
                <input id='phoneNum' type='tel' onChange={e => setPhone(e.target.value)}/>
            </label>
            <label >
                Phone type
                <select name='phoneType' onChange={e => setPhoneType(e.target.value)}>
                    <option value="Home">Home</option>
                    <option value="Work">Work</option>
                    <option value="Mobile">Mobile</option>
                </select>
            </label>
            <label >
                Instructor
                <input id='role' type='radio' value='instructor'/>
            </label>
            <label >
                Student
                <input id='role' type='radio' value='student'/>
            </label>
            <label >
                Bio
                <textarea id='bio' placeholder = 'Please input a bio' onChange={e => setBio(e.target.value)}></textarea>
            </label>
            <label >
                Sign up for email notification
                <input id='emailNotice' type='checkbox' onChange={e => setEmailNotice(e.target.value)}/>
            </label>
            <button type="submit" onClick={onSubmit}>Submit</button>
        </form>
        )
}
