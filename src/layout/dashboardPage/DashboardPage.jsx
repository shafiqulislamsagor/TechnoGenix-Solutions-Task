import Activities from "../../components/Activities/Activities";
import EarningChart from "../../components/EarningCharts/EarningChart";
import OrderStatus from "../../components/OrderStatus/OrderStatus";
import StatusCard from "../../components/StatusCard/StatusCard";
import SocialCharts from './../../components/SocialCharts/SocialCharts';

const DashboardPage = () => {
    return (
        <div className="md:p-8 mt-10 md:mt-0">
            <div className="flex flex-col lg:flex-row flex-wrap gap-5">
                <EarningChart/>
                <SocialCharts/>
            </div>
            <StatusCard/>
            <div className="flex flex-col lg:flex-row flex-wrap gap-5">
                <Activities/>
                <OrderStatus/>
            </div>
        </div>
    );
};

export default DashboardPage;