import React from 'react'

class Form extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            name:'',
            url: 'https://',
            description: 'Describe this item'
        }
    }

    handleChange = (event) => {
        console.log(event.target.value)
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleSubmit= (event) => {
        event.preventDefault();
        console.log('you prevented the default');
        const newItem = {
            name: this.state.name,
            price: this.state.price,
            description: this.state.description
        }
        
        this.setState({
            products: [newItem, ...this.state.products]
        })

        this.setState({
            products: [ newItem, ...this.state.products],
            name: '',
            price: 0,
            description: 'Describe this item'
          })
    }

    render() {
        return (
            <div>
                <h1> Recommend an App </h1>
                <form onSubmit={this.handleSubmit}>
                    <label htmlFor="name">App</label>
                    <input type="text" value={this.state.name} onChange={this.handleChange} name="name" id='app-name'/>
                    <label htmlFor="url">Where did you find this App?</label>
                    <input type="url" name="url" id="app-url" value={this.state.price} onChange={this.handleChange}/>
                    <label htmlFor="description">How does this app help you? </label>
                    <input type="text" value={this.state.description} onChange={this.handleChange} id='description'/>
                    <label htmlFor="category">Category</label>
                    <select name="category" id="app-category">
                    {/* <option value="productivity">Productivity</option>
                    <option value="timers">Timers</option>
                    <option value="task-management">Task Management</option>
                    dynamically grab from category map.
                     */}
                </select>
                    <input type="submit" value="Enter"/>
                </form>

                <ul>
                    {this.state.products.map(product => {
                        return (
                            <li>{product.name}  {product.price}</li>)
                    }
                    )
                    }
                </ul>
            </div>
        )
    }
}

ReactDOM.render(
    <Form></Form>, document.querySelector('#app')
)

