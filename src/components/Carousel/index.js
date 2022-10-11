import './index.scss';
import { useState } from 'react';

const Carousel = (props) => {
	let [curr, setCurr] = useState(0);
	const next = () => curr < props.gallery.length - 1 ? setCurr(++curr) : console.log('end');
	const prev = () => curr > 0 ? setCurr(--curr) : console.log('end');

	let gallery = [];
	for (let i = 0; i < props.gallery.length; i++) {
		gallery.push(
			// id={i === 0 ? 'current' : i === 1 ? 'next' : ''}
			<span className="carousel-item" id={curr === i ? 'current' : curr + 1 === i ? 'next' : curr + 1 < i ? 'carousel-hidden-right' : curr - 1 === i ? 'prev' : 'carousel-hidden-left'} onClick={curr === i ? '' : curr + 1 === i ? next : prev} >
				< img src={props.gallery[i]} alt="" />
			</ span >
		);
	};

	return (
		<div className="carousel">
			{gallery}
			<i className="fas fa-caret-square-left fa-3x button-left" onClick={prev}></i>
			<i className="fas fa-caret-square-right fa-3x button-right" onClick={next}></i>
		</div>
	);
};

export default Carousel;