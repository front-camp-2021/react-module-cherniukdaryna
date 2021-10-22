import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllBrandFilters, getAllCategoryFilters } from '../actions/filtersActions';



function GetChecksData (){
    const categoryFilters = useSelector(state => state.categoryFilters.categoryFiltersList);
    const brandFilters = useSelector(state => state.brandFilters.brandFiltersList);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getAllCategoryFilters());
        dispatch(getAllBrandFilters());
      }, [])
    const a = brandFilters.map(index => index);

    console.log(brandFilters)
}

export default GetChecksData;