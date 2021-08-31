import React, {useEffect, useState} from 'react';
import {useHistory, useParams} from "react-router-dom";
import {getFilteredCategory} from "../api";
import Preloader from "../components/common/Preloader";
import MealList from "../components/MealList";

const Category = () => {

    const [meals, setMeals] = useState([]);
    const {name} = useParams();
    const {goBack} = useHistory();

    useEffect(() => {
        getFilteredCategory(name).then((data) => {
            setMeals(data.meals);
        });
    }, [name])

    return (
        <>
            <button className="btn grey" onClick={goBack}>Go back</button>
            {!meals.length ? <Preloader/> : (<MealList meals={meals}/>)}
        </>
    );
};

export default Category;