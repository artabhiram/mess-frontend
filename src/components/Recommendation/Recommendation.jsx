import React, { useContext, useState } from 'react';
import './Recommendation.css';
import { StoreContext } from '../../Context/StoreContext';
import FoodItem from '../FoodItem/FoodItem';

// Function to calculate similarity
const getSimilarity = (food1, food2) => {
    const features1 = `${food1.category} ${food1.description}`;
    const features2 = `${food2.category} ${food2.description}`;

    // Simple string matching for now
    const similarity = features1.split(' ').filter(word => features2.includes(word)).length;
    return similarity;
};

// Function to recommend similar foods based on current food
const recommendFoods = (food_list, foodId) => {
    const currentFood = food_list.find(item => item._id === foodId);
    if (!currentFood) return [];

    const similarities = food_list.map(food => {
        const score = getSimilarity(currentFood, food);
        return { food, score };
    });

    // Sort foods based on similarity score, descending
    similarities.sort((a, b) => b.score - a.score);

    // Return the top 5 recommended foods
    return similarities.slice(1, 4).map(item => item.food);
};

const Recommendation = ({ currentFoodId }) => {
    const { food_list } = useContext(StoreContext);
    const [recommendedFoods, setRecommendedFoods] = useState([]);

    // Fetch recommended foods when the currentFoodId changes
    React.useEffect(() => {
        const recommended = recommendFoods(food_list, currentFoodId);
        setRecommendedFoods(recommended);
    }, [food_list, currentFoodId]);

    return (
        <div className="recommendation">
            <h3>Recommended for You</h3>
            <div className="recommended-foods">
                {recommendedFoods.length > 0 ? (
                    recommendedFoods.map(food => (
                        <FoodItem
                            key={food._id}
                            image={food.image}
                            name={food.name}
                            desc={food.description}
                            price={food.price}
                            id={food._id}
                            averageRating={food.averageRating}
                        />
                    ))
                ) : (
                    <p>No recommendations available.</p>
                )}
            </div>
        </div>
    );
};

export default Recommendation;
