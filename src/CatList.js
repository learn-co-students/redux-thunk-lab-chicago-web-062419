import React, { Component } from 'react';

class CatList extends Component{
    renderCats = () => {
        return this.props.cats.map(cat => {
            return <img id={cat.id} src={cat.url}></img>
        })
    }  

    render(){
        return(
            <div>
                {this.renderCats()}
            </div>
        )
    }
}

export default CatList