import { auth, createUserProfileDocument, signInWithGoogle } from '../../lib/firebase/firebase'
import FormInput from '../form-input'
import { useState, useContext } from 'react';
import { UserContext } from '../product-listing/user-context'

const SignUpForm = () => {
	let [currentUser, setUser] = useContext(UserContext);

	const [firstName, setFirstName] = useState('')
	const [lastName, setLastName] = useState('')
	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')
	const [passwordConfirm, setPasswordConfirm] = useState('')

	const handleSubmit = async (e) => {
		e.preventDefault()
		// console.log({email})
		if ( password !== passwordConfirm) {
			return;
		}

		try {
			const { user } = await auth.createUserWithEmailAndPassword(email, password);
			const displayName = `${firstName} ${lastName}`
			await createUserProfileDocument(user, { displayName })
		} catch (error) {
			console.error(error)
		}
	}

	return(
		<div className="col-5 o-form u-pad-h-md u-pad-v-md">
			<h3 className="u-mar-b-md">Sign Up</h3>
			<form onSubmit={handleSubmit}>
      <div className="container__row">
        <FormInput    
        name='first_name'
        type='text'
        handleChange={setFirstName}
        value={firstName}
        label='first name'
        placeholder='first name'
        className="col-12 u-pad-v-sm"
        containerClass="col-5"
        required />
        <FormInput    
        name='last_name'
        type='text'
        handleChange={setLastName}
        value={lastName}
        label='last name'
        placeholder='last name'
        className="col-12 u-pad-v-sm"
        containerClass="col-5"
        required />
      </div>
				<FormInput    
				name='email'
				type='email'
				handleChange={setEmail}
				value={email}
				label='email'
				placeholder='email'
				className="col-10 u-pad-v-sm"
				required />
				<FormInput    
				name='password'
				type='password'
				handleChange={setPassword}
				value={password}
				label='password'
				placeholder='password'
				className="col-10 u-pad-v-sm"
				required />
				<FormInput    
				name='confirm_password'
				type='password'
				handleChange={setPasswordConfirm}
				value={passwordConfirm}
				label='Confirm password'
				placeholder='Confirm password'
				className="col-10 u-pad-v-sm"
				required />
				<button type="submit" className="c-btn-category col-12 u-mar-t-sm">Create Account</button>
			</form>
		</div>
	)
};
  
export default SignUpForm;