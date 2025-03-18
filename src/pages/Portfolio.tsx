import Header from "../components/Header";
import Breadcrumb from "../components/Breadcrumb";
import PortfolioCardSection from "../components/PortfolioCardsSection";

const Portfolio = () => {
    return (
        <div>
            <div className="container mx-auto">
                <Header />
            </div>
            <Breadcrumb
                title="Our Portfolio"
                items={[
                    {label: "Home", path: "/"},
                    {label: "Portfolio"}
                ]}
            />
            <div>
                <PortfolioCardSection
                    title="Some Of Our Works"
                />
            </div>
        </div>
    )
}

export default Portfolio;