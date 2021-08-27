import React from 'react';
import MealItem from "./MealItem";

const MealList = (props) => {
    const {meals} = props;

    return (
        <div className="list">
            {meals.map((item) => (
                <MealItem key={item.idMeal} {...item}/>
            ))}
        </div>
    );
};

export default MealList;