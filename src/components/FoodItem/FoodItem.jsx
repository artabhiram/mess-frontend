// import React, { useContext, useState } from 'react'
// import './FoodItem.css'
// import { assets } from '../../assets/assets'
// import { StoreContext } from '../../Context/StoreContext';
// import ReviewSection from '../ReviewSection/ReviewSection';

// const FoodItem = ({ image, name, price, desc , id }) => {

//     const [itemCount, setItemCount] = useState(0);
//     const [showReviews, setShowReviews] = useState(false);

//     const {cartItems,addToCart,removeFromCart,url,currency} = useContext(StoreContext);

//     return (
//         <div className='food-item'>
//             <div className='food-item-img-container'>
//                 <img className='food-item-image' src={url+"/images/"+image} alt="" />
//                 {!cartItems[id]
//                 ?<img className='add' onClick={() => addToCart(id)} src={assets.add_icon_white} alt="" />
//                 :<div className="food-item-counter">
//                         <img src={assets.remove_icon_red} onClick={()=>removeFromCart(id)} alt="" />
//                         <p>{cartItems[id]}</p>
//                         <img src={assets.add_icon_green} onClick={()=>addToCart(id)} alt="" />
//                     </div>
//                 }
//             </div>
//             <div className="food-item-info">
//                 <div className="food-item-name-rating">
//                     <p>{name}</p> <img src={assets.rating_starts} alt="" />
//                 </div>
//                 <p className="food-item-desc">{desc}</p>
//                 <p className="food-item-price">{currency}{price}</p>
//             </div>
//             <ReviewSection
//                 reviews={[
//                     { name: 'Alice', rating: 5, comment: 'Delicious and fresh!' },
//                     { name: 'Bob', rating: 4, comment: 'Tasty but could use more spice.' }
//                 ]}
//                 onSubmitReview={(review) => console.log('New Review:', review)}
//             />

//         </div>
//     )
// }

// export default FoodItem


// import React, { useContext, useState } from 'react';
// import './FoodItem.css';
// import { assets } from '../../assets/assets';
// import { StoreContext } from '../../Context/StoreContext';
//import ReviewSection from '../ReviewSection/ReviewSection';

// const FoodItem = ({ image, name, price, desc , id }) => {
//     const [showReviews, setShowReviews] = useState(false);
//     const { cartItems, addToCart, removeFromCart, url, currency } = useContext(StoreContext);

//     return (
//         <div className='food-item'>
//             <div className='food-item-img-container'>
//                 <img className='food-item-image' src={url + "/images/" + image} alt="" />
//                 {!cartItems[id] ? (
//                     <img className='add' onClick={() => addToCart(id)} src={assets.add_icon_white} alt="" />
//                 ) : (
//                     <div className="food-item-counter">
//                         <img src={assets.remove_icon_red} onClick={() => removeFromCart(id)} alt="" />
//                         <p>{cartItems[id]}</p>
//                         <img src={assets.add_icon_green} onClick={() => addToCart(id)} alt="" />
//                     </div>
//                 )}
//             </div>
//             <div className="food-item-info">
//                 <div className="food-item-name-rating">
//                     <p>{name}</p> <img src={assets.rating_starts} alt="" />
//                 </div>
//                 <p className="food-item-desc">{desc}</p>
//                 <p className="food-item-price">{currency}{price}</p>
//                 <button className="review-toggle-button" onClick={() => setShowReviews(true)}>
//                     View/Add Reviews
//                 </button>
//             </div>

//             {showReviews && (
//                 <div className="review-modal">
//                     <div className="review-modal-content">
//                         <span className="close-modal" onClick={() => setShowReviews(false)}>&times;</span>
//                         <ReviewSection
//                             reviews={[
//                                 { name: 'Alice', rating: 5, comment: 'Amazing taste!' },
//                                 { name: 'John', rating: 4, comment: 'Pretty good.' }
//                             ]}
//                             onSubmitReview={(review) => console.log('New Review:', review)}
//                         />
//                     </div>
//                 </div>
//             )}
//         </div>
//     );
// };

// export default FoodItem;


// import React, { useContext, useState } from 'react';
// import './FoodItem.css';
// import { assets } from '../../assets/assets';
// import { StoreContext } from '../../Context/StoreContext';
// //import ReviewSection from './ReviewSection';

// const FoodItem = ({ image, name, price, desc, id, averageRating, reviews }) => {
//     const [showReviews, setShowReviews] = useState(false);
//     const { cartItems, addToCart, removeFromCart, url, currency } = useContext(StoreContext);

//     const renderStars = (rating) => {
//         const fullStars = Math.floor(rating);
//         const halfStar = rating - fullStars >= 0.5;
//         const emptyStars = 5 - fullStars - (halfStar ? 1 : 0);
      
//         const stars = [];
//         for (let i = 0; i < fullStars; i++) stars.push(<span key={"full" + i}>★</span>);
//         if (halfStar) stars.push(<span key="half">☆</span>);
//         for (let i = 0; i < emptyStars; i++) stars.push(<span key={"empty" + i}>✩</span>);
      
//         return stars;
//       };

      
//     return (
//         <>
//             <div className='food-item'>
//                 <div className='food-item-img-container'>
//                     <img className='food-item-image' src={url + "/images/" + image} alt="" />
//                     {!cartItems[id] ? (
//                         <img className='add' onClick={() => addToCart(id)} src={assets.add_icon_white} alt="" />
//                     ) : (
//                         <div className="food-item-counter">
//                             <img src={assets.remove_icon_red} onClick={() => removeFromCart(id)} alt="" />
//                             <p>{cartItems[id]}</p>
//                             <img src={assets.add_icon_green} onClick={() => addToCart(id)} alt="" />
//                         </div>
//                     )}
//                 </div>
//                 <div className="food-item-info">
//                 <div className="food-item-name-rating">
//                     <p>{name}</p>
//                     <div className="food-item-stars">{renderStars(averageRating)} ({averageRating.toFixed(1)})</div>
//                 </div>

//                     <p className="food-item-desc">{desc}</p>
//                     <p className="food-item-price">{currency}{price}</p>
//                     <button className="review-toggle-button" onClick={() => setShowReviews(true)}>
//                         View/Add Reviews
//                     </button>
//                 </div>
//             </div>

//             {/* Place modal outside of food-item */}
//             {showReviews && (
//                 <div className="review-modal">
//                     <div className="review-modal-content">
//                         <span className="close-modal" onClick={() => setShowReviews(false)}>&times;</span>
//                         <ReviewSection
//                             foodId={id} // 👈 Pass foodId
//                             reviews={reviews}
//                             onSubmitReview={(review) => {
//                                 const reviewWithId = { ...review, foodId: id };
//                                 console.log('New Review:', reviewWithId);
//                                 // You can send this to backend via axios.post('/api/food/add-review', reviewWithId)
//                             }}
//                         />

//                     </div>
//                 </div>
//             )}
//         </>
//     );
// };

// export default FoodItem;

// import React, { useContext } from 'react';
// import './FoodItem.css';
// import { assets } from '../../assets/assets';
// import { StoreContext } from '../../Context/StoreContext';
// import Recommendation from '../Recommendation/Recommendation';

// const FoodItem = ({ image, name, price, desc, id, averageRating }) => {
//     const [showRecommendations, setShowRecommendations] = React.useState(false);

//     const { cartItems, addToCart, removeFromCart, url, currency } = useContext(StoreContext);

//     const handleRecommendationToggle = () => {
//         setShowRecommendations(!showRecommendations);
//     };

//     return (
//         <>
//             <div className='food-item'>
//                 <div className='food-item-img-container'>
//                     <img className='food-item-image' src={url + "/images/" + image} alt={name} />
//                     {!cartItems[id] ? (
//                         <img className='add' onClick={() => addToCart(id)} src={assets.add_icon_white} alt="" />
//                     ) : (
//                         <div className="food-item-counter">
//                             <img src={assets.remove_icon_red} onClick={() => removeFromCart(id)} alt="" />
//                             <p>{cartItems[id]}</p>
//                             <img src={assets.add_icon_green} onClick={() => addToCart(id)} alt="" />
//                         </div>
//                     )}
//                 </div>
//                 <div className="food-item-info">
//                     <div className="food-item-name-rating">
//                         <p>{name}</p>
//                         <div className="food-item-stars">{renderStars(averageRating)} ({averageRating.toFixed(1)})</div>
//                     </div>

//                     <p className="food-item-desc">{desc}</p>
//                     <p className="food-item-price">{currency}{price}</p>
//                     <button className="recommendation-toggle-button" onClick={handleRecommendationToggle}>
//                         View Similar Foods
//                     </button>
//                 </div>
//             </div>

//             {/* Show recommendations if toggled */}
//             {showRecommendations && <Recommendation currentFoodId={id} />}
//         </>
//     );
// };

// // Helper function to render stars based on average rating
// const renderStars = (rating) => {
//     const fullStars = Math.floor(rating);
//     const halfStar = rating - fullStars >= 0.5;
//     const emptyStars = 5 - fullStars - (halfStar ? 1 : 0);

//     const stars = [];
//     for (let i = 0; i < fullStars; i++) stars.push(<span key={"full" + i}>★</span>);
//     if (halfStar) stars.push(<span key="half">☆</span>);
//     for (let i = 0; i < emptyStars; i++) stars.push(<span key={"empty" + i}>✩</span>);

//     return stars;
// };

// export default FoodItem;

import React, { useContext, useState } from 'react';
import './FoodItem.css';
import { assets } from '../../assets/assets';
import { StoreContext } from '../../Context/StoreContext';
import Recommendation from '../Recommendation/Recommendation';
import ReviewSection from '../ReviewSection/ReviewSection';

const FoodItem = ({ image, name, price, desc, id, averageRating, reviews }) => {
    const [showRecommendations, setShowRecommendations] = useState(false);
    const [showReviews, setShowReviews] = useState(false);

    const { cartItems, addToCart, removeFromCart, url, currency, mess } = useContext(StoreContext);

    const handleRecommendationToggle = () => {
        setShowRecommendations(!showRecommendations);
    };

    const handleReviewToggle = () => {
        setShowReviews(!showReviews);
    };

    return (
        <>
            <div className='food-item'
                style={{
                    backgroundColor: mess?.cardColor? mess.cardColor : "white"
                }}
            >
                <div className='food-item-img-container'>
                    <img className='food-item-image' src={url + "/images/" + image} alt={name} />
                    {!cartItems[id] ? (
                        <img className='add' onClick={() => addToCart(id)} src={assets.add_icon_white} alt="" />
                    ) : (
                        <div className="food-item-counter">
                            <img src={assets.remove_icon_red} onClick={() => removeFromCart(id)} alt="" />
                            <p>{cartItems[id]}</p>
                            <img src={assets.add_icon_green} onClick={() => addToCart(id)} alt="" />
                        </div>
                    )}
                </div>
                <div className="food-item-info">
                    <div className="food-item-name-rating">
                        <p>{name}</p>
                        <div className="food-item-stars">{renderStars(averageRating)} ({averageRating.toFixed(1)})</div>
                    </div>

                    <p className="food-item-desc"
                        style={{
                            color: mess?.textColor? mess.textColor : "darkgray"
                        }}
                    >{desc}</p>
                    <p className="food-item-price">{currency}{price}</p>
                    <button className="recommendation-toggle-button" onClick={handleRecommendationToggle}>
                        Similar Foods
                    </button>
                    <button className="review-toggle-button" onClick={handleReviewToggle}>
                        View/Add Reviews
                    </button>
                </div>
            </div>

            {/* Recommendations Modal */}
            {showRecommendations && (
                <div className="recommendation-modal">
                    <div className="recommendation-modal-content">
                        <span className="close-modal" onClick={handleRecommendationToggle}>&times;</span>
                        <Recommendation currentFoodId={id} />
                    </div>
                </div>
            )}

            {/* Reviews Modal */}
            {showReviews && (
                <div className="review-modal">
                    <div className="review-modal-content">
                        <span className="close-modal" onClick={handleReviewToggle}>&times;</span>
                        <ReviewSection
                            foodId={id}
                            foodName={name}
                            reviews={reviews}
                            onSubmitReview={(review) => {
                                const reviewWithId = { ...review, foodId: id };
                                console.log('New Review:', reviewWithId);
                            }}
                        />
                    </div>
                </div>
            )}
        </>
    );
};

const renderStars = (rating) => {
    const fullStars = Math.floor(rating);
    const halfStar = rating - fullStars >= 0.5;
    const emptyStars = 5 - fullStars - (halfStar ? 1 : 0);

    const stars = [];
    for (let i = 0; i < fullStars; i++) stars.push(<span key={"full" + i}>★</span>);
    if (halfStar) stars.push(<span key="half">☆</span>);
    for (let i = 0; i < emptyStars; i++) stars.push(<span key={"empty" + i}>✩</span>);

    return stars;
};

export default FoodItem;

