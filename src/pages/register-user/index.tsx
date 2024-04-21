import { Button } from '../../shared/components/button/index';
import { Input } from '../../shared/components/input/index';
import * as S from './styles';
import { Link } from 'react-router-dom';
import { useState } from 'react';

// API
import { registerUser } from '../../services/events-api/register-user';
 

export function RegisterUser() {

	const [email, setEmail] = useState<string>('');
	const [name, setName] = useState<string>('');
	const [password, setPassword] = useState<string>('');

	async function doRegisterUser() {
		await registerUser(name, email, password);
	}

	return (
		<S.Container>
			<header>
				<img src='/images/background.svg' alt='background image'/>
			</header>
			<main>
				<S.Heading>Olá, novo usuário!</S.Heading>
				<span>Crie já sua conta!</span>
				<S.InputContainer>
					<Input 
						type='text'
						placeholder='Seu nome'
						onchange={setName}
					/>
					<Input 
						type='email'
						placeholder='E-mail'
						exceptionText='Por favor, insira um e-mail válido!'
						onchange={setEmail}
					/>

					<Input 
						type='password'
						placeholder='Senha'
						onchange={setPassword}
					/>					
				</S.InputContainer>
				<Button primary largeSize onclick={doRegisterUser}>
					<Link to='#'>Cadastrar</Link>
				</Button>				
			</main>
			<S.Footer>
				<div></div>
				<img src='/images/logo.svg' alt="logo icon" />
				<div></div>
			</S.Footer>
		</S.Container>
	)
}