import React, { Component } from 'react'

export default class Coba extends Component {
    constructor(props) {
        super(props)

        this.state = {
            data: []
        }
    }

    async componentDidMount() {
        try {
            const res = await fetch("https://jsonplaceholder.typicode.com/todos/1");
            const json = await res.json();
            this.setState({
                data: json
            });
            console.log(json);
        } catch (error) {
            console.log(error);
        }
    }

    render() {
        return (
            <div>coba</div>
        )
    }
}
