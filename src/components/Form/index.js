import {Component} from 'react'
import './index.css'

class Form extends Component {

    state = {
        firstName : '',
        lastName : '',
        email : '',
        userType:'admin',
        phoneNumber : '',
        password :'',
        confirmPassword : '',
        errorMsgs : {}
    }

    validateForm = () => {
        const {phoneNumber,password,confirmPassword} = this.state
        let isValid;
        const errors = {}
        if(password !== confirmPassword){
            isValid = false;
            errors.passwordError = "Entered passwords are not matched"
        }
        if(phoneNumber.trim().length !== 10 ){
            isValid = false;
            errors.numberError = "Enter a valid Phone number"
        }

        this.setState({errorMsgs : errors})
        
        return isValid
    }

    submitFormHandler = (event) => {
        const {errorMsgs} = this.state
        event.preventDefault()
        const isValid = this.validateForm()
        if(isValid){
            console.log("valid")
        }      
        else{
            console.log("invalid")
        }

        console.log(errorMsgs)
    }

    firstNameHandler = (event) => {
        this.setState({firstName : event.target.value})
    }

    lastNameHandler = (event) => {
        this.setState({lastName : event.target.value})
    }

    emailHandler = (event) => {
        this.setState({email : event.target.value})
    }

    userTypeHandler = (event) => {
        this.setState({userType : event.target.value})
    }

    phoneHandler = (event) => {
        this.setState({phoneNumber : event.target.value})
    }

    passwordHandler = (event) => {
        this.setState({password : event.target.value})
    }

    confirmPasswordHandler = (event) => {
        this.setState({confirmPassword : event.target.value})
    }

    render(){
        const {firstName,lastName,email,userType,phoneNumber,password,confirmPassword} = this.state
        return (
            <form className="form-container" onSubmit={this.submitFormHandler}>
                <label className="label-text" htmlFor="first-name">First Name</label>
                <input className="input-container" id="first-name" type="text" onChange={this.firstNameHandler} value={firstName}/>
                <label className="label-text" htmlFor="last-name">Last Name</label>
                <input className="input-container" id="last-name" type="text" onChange={this.lastNameHandler} value={lastName}/>
                <label className="label-text" htmlFor="email">Email</label>
                <input className="input-container" id="email" type="email" onChange={this.emailHandler} value={email}/>
                <label className="label-text" htmlFor="type">Type</label>
                <select className="input-container" id="type" onChange={this.userTypeHandler} value={userType}>
                    <option value="admin" defaultValue={userType} className="label-text">Admin</option>
                    <option value="user" className="label-text">User</option>
                </select>
                <label className="label-text" htmlFor="phone">Phone number</label>
                <input className="input-container" id="phone" type="tel" onChange={this.phoneHandler} value={phoneNumber}/>
                <label className="label-text" htmlFor="passwd">Password</label>
                <input className="input-container" id="passwd" type="password" onChange={this.passwordHandler} value={password}/>
                <label className="label-text" htmlFor="passwd-2">Confirm Password</label>
                <input className="input-container" id="passwd-2" type="password" onChange={this.confirmPasswordHandler} value={confirmPassword}/>
                <button type="submit" className="btn">Submit</button>
            </form>
        )
    }

}

export default Form