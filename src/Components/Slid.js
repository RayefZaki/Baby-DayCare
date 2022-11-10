import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import Carousel from 'react-bootstrap/Carousel';
import "./Search.css"
export default function App() {
return (
	<div className='slid' style={{  width: "100%", height:500,padding: 1 ,marginBottom:150}}>
	<Carousel >
		<Carousel.Item interval={1500}>
		<img height={"100"}
			className="d-block w-100"
src="https://cdn.discordapp.com/attachments/1032613167446102037/1039820608990613594/pexels-pavel-danilyuk-8422207.jpg"
			alt="Image One"
		/>
		<Carousel.Caption>
			<div className='opa'>
			<h3>Fun activities and games</h3>
			<p color='black'>more than one activity and educational games</p>
			</div>
		</Carousel.Caption>
		</Carousel.Item>
		<Carousel.Item interval={1500} >
		<img
			className="d-block w-100"
src="https://cdn.discordapp.com/attachments/1032613167446102037/1039820545484656670/pexels-cdc-3992949.jpg"
			alt="Image Two"
		/>
		<Carousel.Caption>
			<div className='opa'>
			<h3>Teaching the basics and preparing for school</h3>
			<p>The right start to teach the basics of several courses</p>
			</div>
		</Carousel.Caption>
		</Carousel.Item  >
		<Carousel.Item interval={1500}>
		<img
			className="d-block w-100"
src="https://cdn.discordapp.com/attachments/1032613167446102037/1039820507844968548/pexels-lukas-296301.jpg"
			alt="Image One"
		/>
		<Carousel.Caption>
		<div className='opa'>
			<h3>outdoor activities</h3>
			<p>Many outdoor activities and sports practices</p>
			</div>
		</Carousel.Caption>
		</Carousel.Item>
	</Carousel>
	</div>
);
}
