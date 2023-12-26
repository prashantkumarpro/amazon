const ProductReducer = (state, action) => {


  switch (action.type) {

    case "API_LOADING":
      return {
        ...state,
        isError: false,
        isLoading: true
      };

    case "MY_API_DATA":

      const mensData = action.payload.filter(product => {
        return product.category === "men's clothing";
      });

      return {
        ...state,
        products: action.payload, // Update the products array with the new data
        isError: false, // Reset the error state when data is successfully fetched
        isLoading: false,
        mensCloths: mensData
      };

    case "API_ERROR":
      return {
        ...state,
        isError: true,
      };

    case "SINGLE_API_LOADING":
      return {
        ...state,
        isSingleError: false,
        isSingleLoading: true
      }
      
    case 'SINGLE_PRODUCT_DATA':
      return {
        ...state,
        singleProduct: action.payload,
        isSingleLoading: false,
        isSingleError: false,
      };
    case "SINGLE_API_ERROR":
      return {
        ...state,
        isSingleError: true,
        isSingleLoading: false,
      };


    default:
      return state;
  }
};

export default ProductReducer;
