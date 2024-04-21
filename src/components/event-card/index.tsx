import { EventCardProps } from './types';
import { FaLocationDot } from "react-icons/fa6";
import { FaHeart, FaRegHeart } from "react-icons/fa";
import * as S from './styles';

export const EventCard = ({ name, type, localization, startsAt, isFavorited, endsAt, linkTo }: EventCardProps) => {


	return (	
		<S.EventCardContainer type={type} onClick={() => window.location.href = `events/${linkTo}`}>
			<S.EventCardContainerHeader>
				<h2>{name}</h2>
				<div>
					<FaLocationDot />
					<p>{localization}</p>
				</div>							
			</S.EventCardContainerHeader>
			<main>
				<p>
					{startsAt}
					<span>Início</span>
				</p>
				<button>
					{ isFavorited ? ( <FaHeart color="red" /> )  : ( <FaRegHeart /> ) }
				</button>
				<p>
					{endsAt}
					<span>Fim</span>
				</p>							
			</main>
		</S.EventCardContainer>		
	);
}