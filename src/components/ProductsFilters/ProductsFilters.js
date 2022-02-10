import React from 'react';
import styles from '../../common/styles/Headers.module.scss';

class ProductsFilters extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            productType: 'all',
            productName: ""
        }
        this.getProductsTypes = this.getProductsTypes.bind(this);
        this.filter = this.filter.bind(this);
        this.handleChange = this.handleChange.bind(this);

        
    }
    componentDidUpdate(prevProps) {
        if (prevProps.productsList.length !== this.props.productsList.length) {
            console.log(prevProps.productsList.length, this.props.productsList, "tuttaj")
            console.log(this.props.productsList, " w filtrowaniu update");
            this.filter();
        }
    }
    getProductsTypes() {
        const productsList = this.props.productsList;
        const productsTypes = productsList.map((product) => product.kategoria);
        // console.log(productsTypes);
        return [...new Set(productsTypes)];
    }

    handleChange(event) {
        const value = event.target.value;
        const name = event.target.name;
        switch (name) {
            case "nazwa":
                this.setState({
                    productName: value,
                },() => {
                    this.filter();
                })
                break;
            case "kategoria":
                this.setState({
                    productType: value,
                },() => {
                    this.filter();
                })
                break;
            default:
                break;
        }
        console.log("zmiana state");
    }
    filter() {
        console.log("w filtrze")
        const productsList = this.props.productsList;
        let filteredList = productsList;
        if (this.state.productName) {
            filteredList = productsList.filter((item) => item.nazwa.includes(this.state.productName));
        }
        if (this.state.productType !== 'all') {
            filteredList = filteredList.filter((item) => item.kategoria === this.state.productType);
        }
        this.props.filterProducts(filteredList)
    };
    render(){
        return (
            <div className={styles.Wrapper}>
                <form>
                    <label>
                        Wyszukiwarka:
                        <input type="text" value={this.state.productName} name="nazwa" onChange={this.handleChange}/>
                    </label>
                    <label>
                        Kategoria:
                        <select value= {this.state.productType} name="kategoria" onChange={this.handleChange}>
                            <option value="all" key="all">Wszystkie</option>
                            {this.getProductsTypes().map((type) => <option value={type} key={type}> {type}</option>)}
                        </select>
                    </label>
                </form>

            </div>
        );
    }   
}

// function ProductsFilters(props) {
//     const [productType, setProductType] = useState('all');
//     const [productName, setProductName] = useState('');
//     useEffect(() => {
//         filter(); 
//         console.log("tu w effecie1")
//     }, [props.productsList]);
//     useEffect(() => {
//         // filter();
//         console.log("tu w effecie2")
//         }, [productName]);
//     useEffect(() => {
//         // filter();
//         console.log("tu w effecie3")
//     }, [productType]);

//     function getProductsTypes() {
//         const productsList = props.productsList;
//         const productsTypes = productsList.map((product) => product.kategoria);
//         // console.log(productsTypes);
//         return [...new Set(productsTypes)];
//     }

//     function handleChange(event) {
//         const value = event.target.value;
//         const name = event.target.name;
//         switch (name) {
//             case "nazwa":
//                 setProductName(value);
//                 filter();
//                 break;
//             case "kategoria":
//                 setProductType(value);
//                 filter();
//                 break;
//             default:
//                 break;
//         }
//         console.log("zmiana state");
//     }
//     function filter() {
//         const productsList = props.productsList;
//         let filteredList = productsList;
//         if (productName) {
//             filteredList = productsList.filter((item) => item.nazwa.includes(productName));
//         }
//         if (productType !== 'all') {
//             filteredList = filteredList.filter((item) => item.kategoria === productType);
//         }
//         props.filterProducts(filteredList)
//     };

//     return (
//         <div className={styles.Wrapper}>
//             <form>
//                 <label>
//                     Wyszukiwarka:
//                     <input type="text" value={productName} name="nazwa" onChange={handleChange}/>
//                 </label>
//                 <label>
//                     Kategoria:
//                     <select value= {productType} name="kategoria" onChange={handleChange}>
//                         <option value="all" key="all">Wszystkie</option>
//                         {getProductsTypes().map((type) => <option value={type} key={type}> {type}</option>)}
//                     </select>
//                 </label>
//                 <button>Wyszukaj</button>
//             </form>

//         </div>
//     );     
// };

export default ProductsFilters;