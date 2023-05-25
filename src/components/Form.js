import { useState } from 'react';

export default function Form () {
    const [name, setName] = useState();
    const [email, setEmail] = useState();
    const [phone, setPhone] = useState();
    const [phoneType, setPhoneType] = useState();
    const [bio, setBio] = useState();
    const [role, setRole] = useState();
    const [emailNotice, setEmailNotice] = useState();
    const [validationErrors, setValidationErrors] = useState({});

    const validate = () => {
        const errors = {};

        if(!name) errors.name = "Name is required";
        if(!email) errors.email = "Email is required";
        if(phone && !phoneType) errors.phoneType= "Phone type is required if phone number is submitted";
        if(bio && bio.length > 280) errors.bio = "Maximum bio length is 280";

        if(phone) {
            const parts= phone.split("-");

            if (parts.length !== 3
                || parts[0].length !== 3
                || parts[1].length !== 3
                || parts[2].length !== 4
                || !isNaN(parseInt(parts[0]))
                || !isNaN(parseInt(parts[1]))
                || !isNaN(parseInt(parts[2]))
                ) errors.phone = "Please format phone number correctly ex: 111-222-3333";

        }

        return errors;
    }

    const onSubmit = e => {
        e.preventDefault();

        const errors = validate();
        if(Object.keys(errors).length) {
            setValidationErrors(errors);

            return;
        }

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
        setValidationErrors({});

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
            {validationErrors.name}
            <label >
                Email
                <input id='email' type='email' onChange={e => setEmail(e.target.value)}/>
            </label>
            {validationErrors.email}
            <label >
                Phone Number
                <input id='phoneNum' type='tel' onChange={e => setPhone(e.target.value)}/>
            </label>
            {validationErrors.phone}
            <label >
                Phone type
                <select name='phoneType' onChange={e => setPhoneType(e.target.value)}>
                    <option value="">Please select an option</option>
                    <option value="Home">Home</option>
                    <option value="Work">Work</option>
                    <option value="Mobile">Mobile</option>
                </select>
            </label>
            {validationErrors.phoneType}
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
            {validationErrors.bio}
            <label >
                Sign up for email notification
                <input id='emailNotice' type='checkbox' onChange={e => setEmailNotice(e.target.value)}/>
            </label>
            <button type="submit" onClick={onSubmit}>Submit</button>
        </form>
        )
}
