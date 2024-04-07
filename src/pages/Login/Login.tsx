import { Link, useNavigate } from 'react-router-dom';
import Button from '../../components/Button/Button';
import Headling from '../../components/Headling/Headling';
import Input from '../../components/Input/Input';
import styles from './Login.module.css';
import { FormEvent, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../../store/store';
import { login, userActions } from '../../store/user.slice';

export type LoginForm = {
    email: {
        value: string;
    };
    password: {
        value: string;
    };
}

export function Login() {
	const navigate = useNavigate();
	const dispatch = useDispatch<AppDispatch>();
	const { jwt, loginErrorMessage } = useSelector((s: RootState) => s.user);

	useEffect(() => {
		if (jwt) {
			navigate('/');
		}
	}, [jwt, navigate]);

	const submit = async (e: FormEvent) => {
		e.preventDefault();
		dispatch(userActions.clearLoginError());
		const target = e.target as typeof e.target & LoginForm;
		const { email, password } = target;
		await sendLogin(email.value, password.value);
	};

	const sendLogin = async (email:string, password:string) => {
		dispatch(login({ email, password }));
	};

	return <div className={styles['login']}>
		<Headling>Log in</Headling>
		{ loginErrorMessage && <div className={styles['error']}>{loginErrorMessage}</div> }
		<form className={styles['form']} onSubmit={submit}>
			<div className={styles['field']}>
				<label htmlFor='email'>Your email</label>
				<Input id='email' name='email' placeholder='Email' />
			</div>
			<div className={styles['field']}>
				<label htmlFor='password'>Your password</label>
				<Input id='password' name='password' placeholder='Password' type='password' />
			</div>
			<Button appearence='big'>Log in</Button>
		</form>
		<div className={styles['links']}>
			<div>Don't have an account?</div>
			<Link to='/auth/register'>Register</Link>
		</div>
	</div>;
}