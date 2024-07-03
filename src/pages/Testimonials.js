import React from 'react';
import '../assets/styles/Testimonials.css';

const testimonials = [
    {
        name: 'John Scott',
        rating: 5,
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.'
    },
    {
        name: 'Joshua Davis',
        rating: 4,
        text: 'Nostrud aute id elit proident veniam ex. Elit enim laborum enim velit laborum anim. Occaecat do non velit sint elit mollit.'
    },
    {
        name: 'Sarah Walker',
        rating: 5,
        text: 'Occaecat aliqua id et labore reprehenderit deserunt aute cillum voluptate reprehenderit consectetur ut anim consectetur.'
    }
];

const Testimonials = () => {
    return (
        <div className="testimonials-page">
            <h1>Testimonials</h1>
            <h2>Hear from our awesome users!</h2>
            <div className="testimonials-container">
                {testimonials.map((testimonial, index) => (
                    <div className="testimonial" key={index}>
                        <div className="testimonial-header">
                            <div className="testimonial-avatar">
                                <i className="fa fa-user"></i>
                            </div>
                            <div className='testtimonial-name-div'>
                                <div className="testimonial-name">{testimonial.name}</div>
                                <div className="testimonial-rating">
                                    {'★'.repeat(testimonial.rating)}
                                    {'☆'.repeat(5 - testimonial.rating)}
                                </div>
                            </div>
                        </div>
                        <div className="testimonial-text">{testimonial.text}</div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Testimonials;
