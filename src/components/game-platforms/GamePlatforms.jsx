import { StyledButtonPlatform } from './styles';

const GamePlatforms = ({ platforms, activePlatform, setActivePlatform }) => {
	return (
		<div>
			{platforms.map((platform, index) => (
				<StyledButtonPlatform
					key={platform.id}
					$active={activePlatform === index}
					onClick={() => changeActivePlatform(index, setActivePlatform)}
				>
					{platform.name}
				</StyledButtonPlatform>
			))}
		</div>
	);
};

const changeActivePlatform = (index, setActivePlatform) => {
	setActivePlatform(index);
};

export default GamePlatforms;
