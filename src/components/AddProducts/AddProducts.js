import React from 'react';
import styles from '../../common/styles/Headers.module.scss';
import {setState} from 'react'

class AddProducts extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            nazwa: "",
            kategoria: "",
            produktSpozywczy: false,
        }
        this.handleChangeForm = this.handleChangeForm.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleChangeForm(event) {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;
        this.setState({
            [name]: value
        });
    }
    handleSubmit(e) {
        e.preventDefault();
        if (this.state.nazwa && this.state.kategoria) {
            let list = [...this.props.productsList];
            list.push(this.state);
            // console.log(list)
            this.props.addProduct(list);
        } else {
            alert("nie uzupełniono formularza" )
        }

    }
    render() {
        return (
            <div className={styles.Wrapper}>
                <form onSubmit={this.handleSubmit}>
                    <label>
                        Nazwa:
                        <input type="text" value={this.state.nazwa} name="nazwa" onChange={this.handleChangeForm}/>
                    </label>
                    <label>
                        Kategoria:  
                        <input type="text" value={this.state.kategoria} name="kategoria" onChange={this.handleChangeForm}/>
                    </label>
                    <label>
                        Produkt spożywczy
                        <input type="checkbox" value={this.state.produktSpozywczy} name="produktSpozywczy" onChange={this.handleChangeForm}/>
                    </label>
                    <button>Dodaj</button>
                </form>
            </div>
        );
    };
}

  export default AddProducts;