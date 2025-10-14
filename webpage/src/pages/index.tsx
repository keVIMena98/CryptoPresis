import Welcome from '../components/welcome';
import Overview from '../components/overview';
import { homeObjOne } from '../components/overview/data';
import Dapp from '../components/dapp';
import InfiniteCollage from '../components/infinitecollage';
import Roadmap from '../components/roadmap';
// import Collection from '../components/collection';
// import { homeObjTwo } from '../components/collection/data';
import Team from '../components/team';
import Faq from '../components/faq';

const HomePage = () => {
	return (
		<>
			<Welcome />
			<Overview {...homeObjOne} />
			<Dapp />
			<InfiniteCollage />
			<Roadmap />
			{/* <Collection {...homeObjTwo} /> */}
			<Team />
			<Faq LightBg={false} imgStart={false} />
		</>
	);
};

export default HomePage;
