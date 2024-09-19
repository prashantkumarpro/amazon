

const FilterDataReducer = (state, action) => {
    switch (action.type) {
        case "FILTER_DATA":

            return {
                ...state,
                filter_data: [...action.payload],
                all_data: [...action.payload],
                
            };

        case "SORT_FILTER_DATA":
            let sortedData = []

            switch (action.payload) {
                case "A-Z":
                    sortedData = [...state.filter_data].sort((a, b) => a.title.localeCompare(b.title));
                    break;
                case "Z-A":
                    sortedData = [...state.filter_data].sort((a, b) => b.title.localeCompare(a.title));
                    break;
                case "price low to high":
                    sortedData = [...state.filter_data].sort((a, b) => a.price - b.price);
                    break;
                case "price high to low":
                    sortedData = [...state.filter_data].sort((a, b) => b.price - a.price);
                    break;
                default:
                    sortedData = state.filter_data;
                    break;
            }
            return {
                ...state,
                filter_data: sortedData,
                sortData: action.payload,
            }

        case "GET_FILTER_CATEGORY":
            let categoryData = [];
            const lowerCasePayload = action.payload.toLowerCase(); // Convert payload to lowercase

            switch (lowerCasePayload) {
                case "all":
                    categoryData = [...state.all_data];
                    break;
                case "men's clothing":
                    categoryData = [...state.all_data].filter(product =>
                        product.category.toLowerCase() === "men's clothing"
                    );
                    break;
                case "women's clothing":
                    categoryData = [...state.all_data].filter(product =>
                        product.category.toLowerCase() === "women's clothing"
                    );
                    break;
                case "jewelery":
                    categoryData = [...state.all_data].filter(product =>
                        product.category.toLowerCase() === "jewelery"
                    );
                    break;
                case "electronics":
                    categoryData = [...state.all_data].filter(product =>
                        product.category.toLowerCase() === "electronics"
                    );
                    break;
                default:
                    categoryData = state.all_data;
                    break;
            }

            return {
                ...state,
                filter_data: categoryData,
                category_Data: action.payload
            };

        case "GET_FILTER_PRICE":
            let priceData = [];

            switch (action.payload) {
                case "All":
                    priceData = [...state.all_data]
                    console.log('priceData', priceData)
                    break;
                case "Under ₹10":
                    priceData = [...state.all_data].filter((data) => data.price <= 10)
                    // console.log(priceData)
                    break;
                case "₹100 - ₹500":
                    priceData = [...state.all_data].filter((data) => data.price >= 100 && data.price <= 500)
                    // console.log(priceData)
                    break;
                case "₹500 - ₹1,000":
                    priceData = [...state.all_data].filter((data) => data.price >= 500 && data.price <= 1000)
                    // console.log(priceData)
                    break;
                case "Over ₹1,000":
                    priceData = [...state.all_data].filter((data) => data.price > 1000)
                    // console.log(priceData)
                    break;
                default:
                    priceData = state.all_data;
                    break;
            }
            return {
                ...state,
                filter_data: priceData
            }

        case "UPDATE_FILTER_VALUE":
            const { name, value } = action.payload;

            return {
                ...state,
                filters: {
                    ...state.filters,
                    [name]: value,
                }
            }

        case "FILTER_PRODUCT":

            // let { filter_data } = state;
            let {text} = state.filters
            let filterProducts = [...state.filter_data]

            if(text){
                filterProducts = filterProducts.filter((currentElem) => currentElem.title.toLowerCase().includes(text))
            }


            return {
                ...state,
                filter_data: filterProducts
            }
        default:
            return state
    }

}

export default FilterDataReducer