function WishList() {
    const dispatch = useDispatch();
    const cards = useSelector((state) => state.cards.cardsList);
  
    useEffect(() => {
      dispatch(getAllCards());
    }, [])
  
    return (
      <div className="catalog">
        {
          cards.map(card =>
            <Card
              dataProducts={card}
              key={card.id}
            />
          )
        }
      </div>
    )
  }
  
  export default WishList;