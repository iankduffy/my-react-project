import { auth, signInWithGoogle } from '../../lib/firebase/firebase'
import FormInput from '../form-input'
import { useState, useContext, useEffect } from 'react';
import { UserContext } from '../product-listing/user-context'

const SigninForm = () => {
	let [currentUser, setUser] = useContext(UserContext);

	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')

	const handleSubmit = async (e) => {
		e.preventDefault()

		try {
			const { user } = await auth.signInWithEmailAndPassword(email, password);
			setUser(user) 
		} catch (error) {

			console.error(error)
		}
	}

	return(
		<div className="col-5">
			<h3>Sign In</h3>
			<form onSubmit={handleSubmit}>
				<FormInput    
				name='email'
				type='email'
				handleChange={setEmail}
				value={email}
				label='email'
				placeholder='email'
				className="col-12 u-pad-v-sm u-pad-h-sm"
				required />
				<FormInput    
				name='password'
				type='password'
				handleChange={setPassword}
				value={password}
				label='password'
				placeholder='password'
				className="col-12 u-pad-v-sm u-pad-h-sm"
				required />
				<div className="container container__row container--space-between u-pad-t-sm">
					<button type="submit" className="c-btn-category col-6">Sign In</button>
					<button className="c-btn-category col-5" onClick={signInWithGoogle}>Sign In With Google</button>
				</div>
			</form>
		</div>
	)
};
  
export default SigninForm;