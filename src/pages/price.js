import { useLoaderData } from "react-router-dom";

const Price = (props) => {

    const coin = useLoaderData();

    console.log(coin)

    return <div>
        <h1>
            {coin.asset_id_base}/{coin.asset_id_quote}
        </h1>
        <h2>{coin.rate}</h2>
    </div>;
  };
  
  export default Price;