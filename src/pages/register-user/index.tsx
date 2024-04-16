import { Button } from '../../shared/components/button/index';
import { Input } from '../../shared/components/input/index';
import * as S from './styles';
import { Link } from 'react-router-dom';


export function RegisterUser() {

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
						type='email'
						placeholder='E-mail'
						exceptionText='Por favor, insira um e-mail válido!'
					/>

					<Input 
						type='password'
						placeholder='Senha'
					/>
					<Input 
						type='password'
						placeholder='Confirmar senha'
						alternateLinkText='Já tem uma conta?'
						to='/login'
					/>
				</S.InputContainer>
				<Button primary largeSize>
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