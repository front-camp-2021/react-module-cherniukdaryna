import { useDispatch, useSelector } from "react-redux";

function GetCardsData (){
    const cards = useSelector((state) => state.cards.cardsList);
    //console.log(cards);
}

export default GetCardsData;