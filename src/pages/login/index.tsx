// Icons
import { FcGoogle } from "react-icons/fc";

import { Button } from '../../shared/components/button/index';
import { Input } from '../../shared/components/input/index';
import * as S from './styles';
import { Link } from 'react-router-dom';
import { useState } from 'react';

// API
import { login } from '../../services/api/';

export function Login() {	

	const [email, setEmail] = useState<string>('');	
	const [password, setPassword] = useState<string>('');

	async function doLogin() {
		await login(email, password);		
	}

	return (
		<S.Container>
			<header>
				<img src='/images/background.svg' alt='background image'/>
			</header>
			<main>
				<S.Heading>Entrar</S.Heading>
				<S.InputContainer>
					<Input 
						type='email'
						placeholder='E-mail'
						exceptionText='Por favor, insira um e-mail válido!'
						onchange={setEmail}
					/>

					<Input 
						type='password'
						placeholder='Senha'
						alternateLinkText='Esqueceu a senha?'
						to='#'
						onchange={setPassword}
					/>
				</S.InputContainer>
				<Button primary largeSize  onclick={doLogin}>
					<Link to='#'>Entrar</Link>
				</Button>				
				<Button secondary largeSize icon={<FcGoogle />}>
					<Link to='#'>Entrar com o Google</Link>
				</Button>		
				<span>Não tem uma conta? <Link to='/register-user'>Cadastre-se!</Link></span>
			</main>
			<S.Footer>
				<div></div>
				<img src='/images/logo.svg' alt="logo icon" />
				<div></div>
			</S.Footer>
		</S.Container>
	)
}