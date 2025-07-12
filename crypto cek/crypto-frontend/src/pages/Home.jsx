import CoinList from "../components/Home/CoinList";
import GlobalStats from "../components/Home/GlobalStats";
import Hero from "../components/Home/Hero";
import SubHeading from "../components/Home/SubHeading";

export default function Home() {

    return(
        <div >
            <Hero />
            <GlobalStats />
            <SubHeading />
            <CoinList />
        </div>
    );
}