import { signInWithGoogle } from '../../lib/firebase/firebase'
import FormInput from '../form-input'
import { useState, useContext } from 'react';
// import { auth } from '../../lib/firebase/firebase'
import { UserContext } from '../product-listing/user-context'

const SigninForm = () => {
	let [currentUser, setUser] = useContext(UserContext);

	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')

	const handleEmail = (event) => {
		const { value, name } = event.target;
		setEmail(value)
	}	

	const handlePassword = (event) => {
		const { value, name } = event.target;
		setPassword(value)
	}

	return(
		<div className="col-6">
			<FormInput    
			name='email'
			type='email'
			handleChange={handleEmail}
			value={email}
			label='email'
			required />
			<FormInput    
			name='password'
			type='password'
			handleChange={handlePassword}
			value={password}
			label='password'
			required />
			<button className="c-btn-category col-4">Set Email</button>
      <button className="c-btn-category col-4" onClick={signInWithGoogle}>Sign In With Google</button>
			{ currentUser ? "Exists" : 'N/a' }
		</div>
	)
};
  
export default SigninForm;