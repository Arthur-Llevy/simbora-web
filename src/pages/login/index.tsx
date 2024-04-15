import { Button } from '../../shared/components/button/index';
import { Input } from '../../shared/components/input/index';
import * as S from './styles';
import { Link } from 'react-router-dom';


export function Login() {

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
					/>

					<Input 
						type='password'
						placeholder='Senha'
						alternateLinkText='Esqueceu a senha?'
						to='#'
					/>
				</S.InputContainer>
				<Button secondary largeSize>
					<Link to='/home'>Entrar</Link>
				</Button>				
			</main>
		</S.Container>
	)
}