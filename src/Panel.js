import React, { Component } from 'react'
import './Panel.css';
import './Search';
import './like.js';


export default class TitleBar extends Component {
    c="#323232"
    like(e) {
        if (e.target.value ==="false"){
            e.target.style.color = "red";
            e.target.value = "true";
        }
        else{
            e.target.style.color = "#323232";
            e.target.value = "false"
        }
        
    };

    render() {
        const ingredientList = []
        var j = 0
        // adding data to list 

        while (this.props.data.i.ingredient[j] !== "") {
            ingredientList.push(
                <li key={j} className="list-group-item list1">
                    {this.props.data.i.ingredient[j]}
                    <span className="badge badge-primary badge-pill">{this.props.data.i.measure[j]}</span>
                </li>)
            j++;
        }
        console.log("Panel:" + this.props.data.i.source);

        return (
            
            <div className="jumbotron box" >
                <div className="container-fluid">
                    {/* Title */}
                    <div className="alert alert-info head">
                        <a href={this.props.data.i.source} className="alert-link text-white" target="blank"><h2 >{this.props.data.i.name}</h2></a>
                        <i className="heart outline icon heart-icon big" onLoad={this.like} style={{color:this.c}} value="false" onClick={this.like} ></i>
                    </div>
                    {/* Content */}
                    <div className="card mb-3 " style={{ maxWidth: "540" }}>
                        <div className="row no-gutters jumbotron text-white bg-primary">
                            {/* Iamge */}
                            <div className=" image-container" >
                                <a href={this.props.data.i.youtubeLink} target="blank"><img src={this.props.data.i.thumbnail} className="card-img" alt="food item" /></a>
                            </div>


                            {/* Right Item */}
                            <div className="col-md-8 containt-box  bg-primary text-white">
                                <div className="card-body">
                                    <div>
                                        <ul className="list-group" >
                                            <li className="list-group-item list1" >Category : {this.props.data.i.category}</li>
                                            <li className="list-group-item list1">Area : {this.props.data.i.area}</li>
                                        </ul>
                                        <div>
                                            <div className="scrollable " style={{ height: 250 }}>
                                                <ul className="list-group">

                                                    {/* Displaying data added to list  */}

                                                    {ingredientList}
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Recipe */}
                        <div className="card col-md-12 Recipe-box  bg-primary">
                            <h2 >Recipe</h2>
                            <div className=" scrollable Recipe  text-white">

                                {this.props.data.i.instruction}

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
