"use client";

import { Star } from 'lucide-react';

const testimonials = [
    {
        name: "Syafiq",
        profession: "Gifted for Anniversary",
        description: "Thank you @wispofpetalss for the bouquet!! Cantik & she loves it <3",
        avatar: "https://randomuser.me/api/portraits/men/46.jpg",
    },
    {
        name: "Lokman",
        profession: "Surprise for Loved One",
        description: "My love one loved it so much, cantik sangat bunga pun still fresh. Great work, love it!",
        avatar: "https://randomuser.me/api/portraits/men/86.jpg",
    },
    {
        name: "Liyana",
        profession: "Flower Enthusiast",
        description: "hii i have received the bouquet awhile ago 🥹🥹💘 its soo pretty in person thank you so much!! 😭😭💐 i absolutely inlove with the wrapping",
        avatar: "https://randomuser.me/api/portraits/women/44.jpg",
    },
    {
        name: "Ainaa",
        profession: "Birthday Gift",
        description: "Thank you guys! Love love the flowers arrangement",
        avatar: "https://randomuser.me/api/portraits/women/68.jpg",
    },
    {
        name: "Chong Wei",
        profession: "First-time Customer",
        description: "Cantik sangat your bouquet, after this if nak tempah bouquet boleh ke?",
        avatar: "https://randomuser.me/api/portraits/men/15.jpg",
    }
];

const duplicatedTestimonials = [...testimonials, ...testimonials];

const FUITestimonialWithSlide = () => {
    return (
        <section className="py-24 bg-cream-dark border-t border-border-light">
            <div className='max-w-7xl mx-auto w-full'>
                <div className="w-full mx-auto px-6">
                    <div className='mb-12'>
                        <span className="text-sm font-semibold tracking-wider uppercase text-sage mb-2 block text-center">Customer Reviews</span>
                        <h2 className="font-heading text-3xl md:text-5xl font-bold text-charcoal mb-4 text-center">Loved by Our Customers</h2>
                        <p className="mt-4 max-w-xl mx-auto text-base md:text-lg text-center tracking-tight text-text-light">
                            Every bouquet tells a story. Discover what our customers have to say about their experience with us.
                        </p>
                    </div>
                    <div style={{
                        maskImage: 'linear-gradient(to left, transparent 0%, black 20%, black 80%, transparent 95%)',
                    }} className="flex relative overflow-hidden shrink-0 max-w-full">
                        <div className="flex animate-x-slider gap-6 w-max hover:[animation-play-state:paused]">
                            {duplicatedTestimonials.map((testimonial, indx) => {
                                return (
                                    <div key={indx} className="border border-border-light flex flex-col bg-surface rounded-2xl shrink-0 grow-0 w-[280px] md:w-[400px] h-full shadow-sm justify-between transition-transform hover:-translate-y-1">
                                        <p className="px-6 py-6 md:px-8 md:py-8 text-pretty text-base md:text-lg font-medium text-text-light italic leading-relaxed">
                                            "{testimonial.description}"
                                        </p>
                                        <div className="border-t border-border-light w-full flex gap-1 overflow-hidden">
                                            <div className="flex-1 flex gap-4 items-center px-4 md:px-6 py-3 md:py-4">
                                                <div className='flex flex-col flex-1 gap-0 justify-center items-start'>
                                                    <h5 className='text-sm md:text-base font-semibold font-heading text-charcoal'>{testimonial.name}</h5>
                                                    <p className='text-xs md:text-sm text-text-muted'>{testimonial.profession}</p>
                                                </div>
                                            </div>
                                            <div className='w-[1px] bg-border-light' />
                                            <div className='flex items-center px-4 md:px-6 gap-1 text-accent'>
                                                <Star className="w-3 h-3 md:w-4 md:h-4 fill-current" />
                                                <Star className="w-3 h-3 md:w-4 md:h-4 fill-current" />
                                                <Star className="w-3 h-3 md:w-4 md:h-4 fill-current" />
                                                <Star className="w-3 h-3 md:w-4 md:h-4 fill-current" />
                                                <Star className="w-3 h-3 md:w-4 md:h-4 fill-current" />
                                            </div>
                                        </div>
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default FUITestimonialWithSlide;
