import PortfolioList from "../components/PortfolioList";

const Portfolio = () => {
  return (
    <div className="text-white p-8">
      <h1 className="text-4xl font-bold">Portfolio,</h1>
      <p className="mt-2 text-gray-300">
        Berikut ini beberapa karya saya dalam project yang pernah saya kerjakan baik personal maupun dengan team. Disini juga disertakan bahasa dan framework yang saya gunakan untuk membangun project tersebut. Silakan dilihat-lihat.
      </p>
      <PortfolioList />
    </div>
  );
};

export default Portfolio;
