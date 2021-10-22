import axios from 'axios';
export const GET_CATEGORY_FILTERS = 'GET_CATEGORY_FILTERS';
export const GET_BRAND_FILTERS = 'GET_BRAND_FILTERS';

export const getCategoryFilters = (categoryFilters) => {
  return {
    type: GET_CATEGORY_FILTERS,
    payload: categoryFilters
  }
}

export const getAllCategoryFilters = () => {
  return (dispath) => {
    axios.get('http://localhost:3001/categories')
      .then(response => {
        dispath (getCategoryFilters(response.data))
      })
  }
}

export const getBrandFilters = (brandFilters) => {
  return {
    type: GET_BRAND_FILTERS,
    payload: brandFilters
  }
}

export const getAllBrandFilters = () => {
  return (dispath) => {
    axios.get('http://localhost:3001/brands')
      .then(response => {
        dispath (getBrandFilters(response.data))
      })
  }
}