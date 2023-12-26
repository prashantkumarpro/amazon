import React, { createContext, useContext, useEffect, useReducer } from 'react'
import { useDataContext } from './ProductContext'
import reducer from '../ProductReducer/FilterDataReducer'


// Create the filterDataContext

export const FilterDataContext = createContext()


const initialState = {
    filter_data: [],
    all_data: [],
    sortData: null,
    category_Data: null,
    filters: { text: '' }
}



// Create the filterDataProvider

export const FilterDataProvider = ({ children }) => {

    const [state, dispatch] = useReducer(reducer, initialState)
    const { products } = useDataContext()

    // sorting function

    const sortBy = (event) => {
        const sortValue = event.target.value;

        // console.log('targeted value :', sortValue)
        dispatch({ type: "SORT_FILTER_DATA", payload: sortValue })
    }



    const categories = ['All', "men's clothing", "women's clothing", "jewelery", 'electronics'];

    // Function to handle category click
    const handleCategoryClick = (category) => {
        // console.log('category :', category);
        dispatch({ type: "GET_FILTER_CATEGORY", payload: category })
    };

    const prices = ['All', "Under ₹10", "₹100 - ₹500", "₹500 - ₹1,000", "₹1,000 - ₹2,000", "Over ₹1,000"]
    // Function to handle price click
    const handlePricesClick = (price) => {
        dispatch({ type: "GET_FILTER_PRICE", payload: price })
    }

    const submitHendlar = (event) => {
        console.log(event.target.value)
    }

    // to get filter values
    const filterValueHandler = (event) => {
        let name = event.target.name;
        let value = event.target.value
        return dispatch({ type: 'UPDATE_FILTER_VALUE', payload: { name, value } })
    }


    useEffect(() => {
        dispatch({ type: 'FILTER_DATA', payload: products })
        // console.log(products)

        dispatch({ type: 'FILTER_PRODUCT' })
    }, [products, state.filters])


    // get context values
    const contextValue = {
        ...state,
        sortBy,
        categories,
        handleCategoryClick,
        prices,
        handlePricesClick,
        submitHendlar,
        filterValueHandler
    }


    return (<  FilterDataContext.Provider value={contextValue}>
        {children}
    </FilterDataContext.Provider>
    )
}

// Use the Context 

export const useFilterDataContext = () => {
    return useContext(FilterDataContext)
}