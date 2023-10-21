import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import CardDetail from "./CardDetail/CardDetail";
import Team from "../Team/Team";



const CardDetails = () => {
  const [card, setCard] = useState({})
  const {id} = useParams()
  const cards = useLoaderData();
  console.log(cards)
  useEffect(() => {
    const findCard = cards.find(card=> card.id == id)
    setCard(findCard)
  },[id, cards])

       
       
       return (
              <div className="  mt-5">
                <CardDetail card={card}></CardDetail>


                <Team></Team>
                     
              </div>
              
       );
};

export default CardDetails;


