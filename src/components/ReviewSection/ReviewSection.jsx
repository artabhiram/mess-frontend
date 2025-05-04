import React, { useContext, useState } from 'react';
import axios from 'axios';
import { StoreContext } from '../../Context/StoreContext';

const ReviewSection = ({ foodId, foodName, reviews = [], onNewReview }) => {
    const [name, setName] = useState('');
    const [rating, setRating] = useState(5);
    const [comment, setComment] = useState('');
    const { token, url } = useContext(StoreContext);

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!name || !comment) return;

        try {
            const response = await axios.post(
                `${url}/api/food/add-review`,
                { foodId, name, rating, comment },
                { headers: { token } }
            );

            if (response.data.success) {
                onNewReview && onNewReview({ name, rating, comment });
                setName('');
                setRating(5);
                setComment('');
            } else {
                alert("Failed to submit review.");
            }
        } catch (err) {
            console.error(err);
            alert("An error occurred while submitting the review.");
        }
    };

    return (
        <div className="review-section">
            <h4>Customer Reviews for: <span style={{ color: '#f66', fontWeight: 'bold' }}>{foodName}</span></h4>

            {reviews.length > 0 ? (
                reviews.map((rev, i) => (
                    <div key={i} className="review">
                        <p><strong>{rev.name}</strong> - {rev.rating}★</p>
                        <p>{rev.comment}</p>
                    </div>
                ))
            ) : (
                <p>No reviews yet.</p>
            )}

            <form onSubmit={handleSubmit} className="review-form">
                <input
                    type="text"
                    placeholder="Your Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                />
                <select value={rating} onChange={(e) => setRating(Number(e.target.value))}>
                    {[5, 4, 3, 2, 1].map(r => (
                        <option key={r} value={r}>{r} Star{r > 1 && 's'}</option>
                    ))}
                </select>
                <textarea
                    placeholder="Write your review..."
                    value={comment}
                    onChange={(e) => setComment(e.target.value)}
                    required
                />
                <button type="submit">Submit Review</button>
            </form>
        </div>
    );
};

export default ReviewSection;
