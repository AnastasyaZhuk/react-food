import React, {useEffect, useState} from 'react';
import {useHistory, useParams} from "react-router-dom";
import {getMealById} from "../api";
import Preloader from "../components/common/Preloader";

const Recipe = () => {
    const {id} = useParams();
    const [recipe, setRecipe] = useState({});
    const {goBack} = useHistory();

    useEffect(() => {
        getMealById(id)
            .then(data => setRecipe(data.meals[0]))
    }, [id])

    return (
        <>
            <button className="btn grey" onClick={goBack}>Go back</button>
            {!recipe.idMeal
                ? <Preloader/>
                : (<div className="recipe">
                    <h2>{recipe.strMeal}</h2>
                    <div className="recipe-instractions">
                        <img className="recipeImg recipe-instractions-item" src={recipe.strMealThumb}
                             alt={recipe.strMeal}/>
                        <div className="recipe-instractions-item">
                            <h5>Cooking process:</h5>
                            <p>{recipe.strInstructions}</p>
                        </div>
                    </div>
                    <table className="centered">
                        <thead>
                        <tr>
                            <th>Ingredient</th>
                            <th>Measure</th>
                        </tr>
                        </thead>
                        <tbody>
                        {Object.keys(recipe).map(key => {
                            if (key.includes('Ingredient') && recipe[key]) {
                                return <tr key={key}>
                                    <td>{recipe[key]}</td>
                                    <td>{
                                        recipe[`strMeasure${key.slice(13)}`]
                                    }</td>
                                </tr>
                            }
                            return null;
                        })}
                        </tbody>
                    </table>
                    {recipe.strYoutube ? (
                        <div className="row">
                            <h5 style={{margin: '2rem 0 1.5rem'}}>Video Recipe</h5>
                            <iframe
                                title={id}
                                src={`https://www.youtube.com/embed/${recipe.strYoutube.slice(-11)}`}
                            />
                        </div>
                    ) : null}
                </div>)
            }
        </>
    );
};

export default Recipe;