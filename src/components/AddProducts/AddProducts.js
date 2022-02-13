import React from 'react';
import styles from '../../common/styles/Headers.module.scss';

class AddProducts extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            nazwa: "",
            kategoria: "",
            produktSpozywczy: false,
        }
        this.resetFilters = this.resetFilters.bind(this);
    }
    handleChangeForm = (event) => {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;
        this.setState({
            [name]: value
        });
    }
    handleSubmit= (e) => {
        e.preventDefault();
        if (this.state.nazwa && this.state.kategoria) {
            this.props.newProduct(this.state);
        }else {
            alert("nie uzupełniono formularza" )
        }
        this.resetFilters();

        // if (this.state.nazwa && this.state.kategoria) {
        //     let list = [...this.props.productsList];
        //     if (list.find((item) => item.nazwa === this.state.nazwa)) {
        //         alert("produkt juz istnieje na liscie");
        //     } else {
        //         list.push(this.state);
        //         // console.log(list)
        //         this.props.addProduct(list);
        //         this.resetFilters();                
        //     }
        // } else {
        //     alert("nie uzupełniono formularza" )
        // }
    }
    resetFilters() {
        this.setState({
            nazwa: "",
            kategoria: "",
            produktSpozywczy: false,
        }) 
    }
    render() {
        const { nazwa, kategoria, produktSpozywczy } = this.state;
        return (
            <div className={styles.Wrapper}>
                <form onSubmit={this.handleSubmit}>
                    <label>
                        Nazwa:
                        <input type="text" value={nazwa} name="nazwa" onChange={this.handleChangeForm}/>
                    </label>
                    <label>
                        Kategoria:  
                        <input type="text" value={kategoria} name="kategoria" onChange={this.handleChangeForm}/>
                    </label>
                    <label>
                        Produkt spożywczy
                        <input type="checkbox" checked={produktSpozywczy} name="produktSpozywczy" onChange={this.handleChangeForm}/>
                    </label>
                    <button>Dodaj</button>
                </form>
            </div>
        );
    };
}

  export default AddProducts;