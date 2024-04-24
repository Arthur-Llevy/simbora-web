// Icons
import { FcGoogle } from "react-icons/fc";

import { Button } from '../../shared/components/button/index';
import { Input } from '../../shared/components/input/index';
import * as S from './styles';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { PopUp } from '../../components/popup/';

// API
import { login } from '../../services/events-api/login';

export function Login() {	


	const [email, setEmail] = useState<string>('');	
	const [password, setPassword] = useState<string>('');
	const [error404, setError404] = useState<boolean>(false);
	const [error401, setError401] = useState<boolean>(false);

	async function doLogin() {
		try {
			await login(email, password);
		} catch (err: any) {
			if (err.response.status === 404){
				return setError404(previusValue => !previusValue);
			};

			if (err.response.status === 401){
				return setError401(previusValue => !previusValue);
			};
		}
	}
	return (
		<S.Container>
			{error404 && (
				<PopUp type="error" onclick={setError404}>
					Usuário não encontrado! Cadastre-se.
				</PopUp>
			)}
			{error401 && (
				<PopUp type="error" onclick={setError401}>
					E-mail ou senha incorretos! Tente novamente.
				</PopUp>
			)}
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