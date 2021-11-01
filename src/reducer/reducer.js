import { combineReducers } from "redux";
import { cardsReducer } from "./cardsReducer";
import { activeFiltersReducer } from "./checkboxReducer";
import { brandFiltersReducer, categoryFiltersReducer } from "./filterReducer";
import { paginationReducer } from "./paginationReducer";
import { searchReducer } from "./searchReducer";

export const globalReducer = combineReducers({
  cards: cardsReducer,
  categoryFilters: categoryFiltersReducer,
  brandFilters: brandFiltersReducer,
  activeFilters: activeFiltersReducer,
  pagination: paginationReducer,
  search: searchReducer,
})