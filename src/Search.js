import React, { Component } from "react";
import HeadBar from './HeadBar';
import Panel from './Panel';


export default class Search extends Component {

  state = {
    value: '',
    divValue: 1,
    disable: true
  }

  // array to store the data returned by api call

  meals = []
  inputChangedHandler = (e) => {
    const state = this.state;
    state.value = e.target.value;
    console.log(this.state);
  }

  // to call the api with the name passed in input field


  async onFormSubmitted(e) {
    e.preventDefault();
    this.setState(this.state);
    console.log(this.state.value);
    let url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${this.state.value}`;
    const r = await fetch(url);
    const result = await r.json();
    if (result.meals === null) {
      //if meals is empty then set divValue to 2 for condtitional rendering 
      this.setState({ divValue: 2 });
      console.log(this.state.divValue);
    }
    else {
      //if  data is not null then map the result to meals 
      let k = 0;
      console.log(result);

      result.meals.map(i => {
        let m = {
          id: i.idMeal,
          name: i.strMeal,
          category: i.strCategory,
          area: i.strArea,
          instruction: i.strInstructions,
          thumbnail: i.strMealThumb,
          youtubeLink: i.strYoutube,
          ingredient: [],
          measure: [],
          source: i.strSource
        }
        this.meals.push(m);
        this.meals[k].ingredient.push(
          i.strIngredient1, i.strIngredient2,
          i.strIngredient3, i.strIngredient4,
          i.strIngredient5, i.strIngredient6,
          i.strIngredient7, i.strIngredient8,
          i.strIngredient9, i.strIngredient10,
          i.strIngredient11, i.strIngredient12,
          i.strIngredient13, i.strIngredient14,
          i.strIngredient15, i.strIngredient16,
          i.strIngredient17, i.strIngredient18,
          i.strIngredient19, i.strIngredient20
        );
        this.meals[k].measure.push(
          i.strMeasure1, i.strMeasure2,
          i.strMeasure3, i.strMeasure4,
          i.strMeasure5, i.strMeasure6,
          i.strMeasure7, i.strMeasure8,
          i.strMeasure9, i.strMeasure10,
          i.strMeasure11, i.strMeasure12,
          i.strMeasure13, i.strMeasure14,
          i.strMeasure15, i.strMeasure16,
          i.strMeasure17, i.strMeasure18,
          i.strMeasure19, i.strMeasure20
        );
        k++;
        return 0;
      });
      console.log(this.meals);
      // set divValue to 3 for condtitional rendering 
      this.setState({ divValue: 3 });
    }
  }


  // function for conditional rendering 
  display() {
    if (this.state.divValue === 1) {
      // initial state 
      return <HeadBar content="Type a Dish Name to Search for its Ingredients" />
    }
    if (this.state.divValue === 2) {
      // when no data is recived 
      return <HeadBar content="No Data has been received" />
    }
    if (this.state.divValue === 3) {
      //  mapping result to panel 

      return this.meals.map(i => {
        return <Panel key={`${i.id}`} data={{ i }} />   // error when calling api with same value twice 
      });
    }
  }



  render() {


    return (
      <div className="Search-bar">
        <div className="container">
          <br />
          <form className="card-sm" onSubmit={this.onFormSubmitted.bind(this)}>
            <div className="card-body row align-items-center">
              <div className="col">
                <input
                  className="form-control form-control-borderless"
                  type="search"
                  placeholder="Enter the Name of Dish"
                  onChange={this.inputChangedHandler}
                  style={{ textAlign: "center" }}
                />
              </div>
              <div className="col-auto">
                <button className="btn  btn-danger" type="submit" >
                  Get Ingredients
              </button>
              </div>
            </div>
          </form>
        </div>

        {/* display for conditiona rendering  */}

        {this.display()}

      </div>

    );

  }
}
