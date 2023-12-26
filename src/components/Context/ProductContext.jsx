import { createContext, useContext, useReducer, useEffect } from "react";
import reducer from '../ProductReducer/ProductReducer'

{
    
}
// Create the data Context 
const DataContext = createContext()

const initialState = {
    products: [],
    isLoading: true,
    isError: false,
    mensCloths: [],
    isSingleLoading: true,
    singleProduct: {},
    isSingleError: false,
}
// data provider
export const DataProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initialState)

    const API = 'https://fakestoreapi.com/products'

    //API CALL for get all products
    const fetchProducts = async (url) => {
        try {
            dispatch({ type: 'API_LOADING' }); // Dispatch loading before the API call
            const response = await fetch(url);
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            const products = await response.json()
  
            dispatch({ type: 'MY_API_DATA', payload: products })
        } catch (error) {
            dispatch({ type: 'API_ERROR' })
            console.log(error)
        }
    }

    //2nd API CALL for get single product

    const fetchSingleProduct = async (url) => {
        dispatch({ type: 'SINGLE_API_LOADING' }); // Dispatch loading before the API call
        try {
            const response = await fetch(url)
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            const singleProduct = await response.json()
            // console.log("Single Product:", singleProduct);
            dispatch({ type: 'SINGLE_PRODUCT_DATA', payload: singleProduct });
        } catch (error) {
            dispatch({ type: 'SINGLE_API_ERROR' })
        }
    }
    useEffect(() => {
        // Call the fetchProducts function
        fetchProducts(API)
    }, [API]);

    // const contextValue = { ...state,  fetchSingleProduct }

    return (
        <DataContext.Provider value={{ ...state, fetchSingleProduct }}>
            {children}

        </DataContext.Provider>
    )
}

// use the Context 
export const useDataContext = () => {
    return useContext(DataContext);
}