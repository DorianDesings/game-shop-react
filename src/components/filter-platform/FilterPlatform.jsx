import { StyledFilterPlatform } from './styles';

const FilterPlatform = ({ platform, changeFilter, checked }) => {
	return (
		<StyledFilterPlatform>
			<input
				type='checkbox'
				id={platform}
				checked={checked}
				onChange={event => changeFilter(event.target.checked)}
			/>
			<label htmlFor={platform}>{platform}</label>
		</StyledFilterPlatform>
	);
};

export default FilterPlatform;
