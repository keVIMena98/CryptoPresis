import DropSection from '../components/drop';
import { homeObjOne, homeObjTwo, homeObjThree } from '../components/drop/data';
import DropIntroSection from '../components/dropintro';

const DropPage = () => {
	return (
		<>
			<DropIntroSection {...homeObjOne} />
			<DropSection {...homeObjOne} />
			<DropSection {...homeObjTwo} />
			<DropSection {...homeObjThree} />
		</>
	);
};

export default DropPage;
