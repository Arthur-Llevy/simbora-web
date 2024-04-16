import * as S from './styles';
import { Button } from '../../shared/components/button/index';
import { Link } from 'react-router-dom';

export function InitialPage(){
	return (
		<S.InitialPageContainer>
			<S.Main>
				<S.Header>
					<S.Image src='/images/logo.svg' alt='logo icon' />
					<S.Heading>Simbora</S.Heading>
				</S.Header>
				<S.TextContainer>
					<p>
						<S.Span>Bora Simbora</S.Span> conectar os apaixonados por hobbies?
					</p>
					<p>
						Encontre sua <S.Span>comunidade</S.Span> aqui!
					</p>
				</S.TextContainer>
				<S.ButtonContainer>
					<Button tertiary largeSize>
						<Link to='/login'>Entrar</Link>
					</Button>
					<Button primary largeSize >
						<Link to='/register-user'>Cadastrar</Link>
					</Button>
				</S.ButtonContainer>
			</S.Main>
		</S.InitialPageContainer>
	);
}