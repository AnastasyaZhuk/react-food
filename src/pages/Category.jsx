import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import {getAllCategories, getFilteredCategory} from "../api";
import Preloader from "../components/common/Preloader";
import MealList from "../components/MealList";

const Category = () => {

    const [meals, setMeals] = useState([]);
    const {name} = useParams();

    useEffect(() => {
        console.log('Category useEffect');
        getFilteredCategory(name).then((data) => {
            setMeals(data.meals);
        });
    }, [name])

    return (
        <>
            {!meals.length ? <Preloader/> : (<MealList meals={meals}/>)}
        </>
    );
};

export default Category;