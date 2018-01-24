import React from 'react';
import Module from './Module';
import * as api from '../api';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

class App extends React.Component {
	state = {};
	componentDidUpdate() {
		if(this.state.refresh == true){
			this.setState({
				refresh: false
			})
		}
	}
	componentDidMount() {

		document.addEventListener('scroll', () =>{
			// for(let i = 0; i <= 3; i++){
			// 	if(window.scrollY - document.getElementById("page-" + i).offsetTop >= -300){
			// 		document.getElementById("page-" + i).classList.add("active");
			// 	}
			// }
			// for(let i = 0; i < document.getElementsByClassName("app").length; i++){
			// 	var el = document.getElementsByClassName("app")[i];
			// 	if(window.scrollY - el.offsetTop >= -300){
			// 		el.classList.add("active");
			// 	}
			// }
			// console.log(window.scrollY);
			for(let i = 0; i < document.getElementsByTagName("*").length; i++){
				var elo = document.getElementsByTagName("*")[i];
				// if((window.scrollY) - elo.getBoundingClientRect().top >= 0){
				if(elo.getBoundingClientRect().top - (window.innerHeight) <= -100){
					// console.log("Active: ", i ," OffsetTop: ", elo.getBoundingClientRect().bottom);
					elo.classList.add("active");
					// elo.classList.add(elo.getBoundingClientRect().top);
				}
			}
			for(let i = 0; i < (document.getElementsByClassName("app").length -1); i++){
				var elo = document.getElementsByClassName("app")[i];
				if(elo.getBoundingClientRect().top - (window.innerHeight) <= -100){
					elo.classList.add("active");
					this.setState({
						page: i
					})
				}
			}
		});

		this.setState(function(props){
			return {
				carousel: {
					left: 0,
					stop: 0,
					direction: 0,
					ndirection: 0,
					speed: 50,
					nspeed: 50,
				},
				location: {
					me:1
				},
				page: 0,
				refresh: false,
				contents: [
					[
						{
							type: "\'header\'",
							message: "\'Patrick Manville\'"
						},
						{
							type: "\'text\'",
							message: "\'Web Developer\'"
						},
						{
							type: "\'button\'",
							message: "\'Email\'",
							onClickEvent: "\'mailto:patrickmanville@yahoo.co.uk\'"
						},
						{
							type: "\'button\'",
							message: "\'LinkedIn\'",
							onClickEvent: "\'https://uk.linkedin.com/in/patrick-manville\'"
						},
					],
					[
						{
							type: "\'header\'",
							message: "\'About\'"
						},
						{
							type: "\'text\'",
							message: "\'Let me introduce myself\'"
						},
						{
							type: "\'image\'",
							src:"\'/assets/images/me.jpg\'"	
						},
						{
							type: "\'paragraph\'",
							message: "\'I am a front-end developer with four years\\' professional experience creating and maintaining fully responsive web apps for a variety of global clients predominantly in the technology and ecommerce sectors.\'"
						},
						{
							type: "\'paragraph\'",
							message: "\'I am dedicated to creating high-performing, reusable code and ensuring the best customer experience possible.  I have recently relocated to the Netherlands from the UK and am looking for exciting new opportunities.\'"
						},
					],
					[
						{
							type: "\'header\'",
							message: "\'Work\'"
						},
						{
							type: "\'text\'",
							message: "\'See some of my work in action\'"
						},
						{
							type: "\'work\'",
							urls: [
								{
									name: "PreciseTV",
									description: "By Tomorrow People",
									img: "/assets/images/precise.png",
									url: "http://www.precise.tv/"
								},
								{
									name: "Arkadin",
									description: "By Tomorrow People",
									img: "/assets/images/arkadin.png",
									url: "http://connected.arkadin.com/"
								},
								{
									name: "Tomorrow People",
									description: "By Tomorrow People",
									img: "/assets/images/tomorrow-people.png",
									url: "http://www.tomorrow-people.com/"
								},
								{
									name: "TechData",
									description: "By Tomorrow People",
									img: "/assets/images/techdata.png",
									url: "http://trustedadvisor.techdata.co.uk/"
								},
								{
									name: "Cubiks",
									description: "By Tomorrow People",
									img: "/assets/images/cubiks.png",
									url: "https://practicetests.cubiks.com/"
								},
								{
									name: "Qualco",
									description: "By Tomorrow People",
									img: "/assets/images/qualco.png",
									url: "http://www.qualco.co.uk/"
								},
								{
									name: "Hyster-Yale",
									description: "By Tomorrow People",
									img: "/assets/images/hyster-yale.png",
									url: "http://dependable.hyster.com/HysterXT"
								},
								{
									name: "Sanderson",
									description: "By Tomorrow People",
									img: "/assets/images/sanderson.png",
									url: "https://www.sanderson.com/"
								},
							]
						}
					],
					[
						{
							type: "\'header\'",
							message: "\'Skills\'"
						},
						{
							type: "\'text\'",
							message: "\'Here\\'s what I do best\'"
						},
						{
							type: "\'skill\'",
							message: "\'HTML\'",
							rating: "\'5\'"
						},
						{
							type: "\'skill\'",
							message: "\'CSS\'",
							rating: "\'5\'"
						},
						{
							type: "\'skill\'",
							message: "\'Sass\'",
							rating: "\'5\'"
						},
						{
							type: "\'skill\'",
							message: "\'JavaScript\'",
							rating: "\'5\'"
						},
						{
							type: "\'skill\'",
							message: "\'jQuery\'",
							rating: "\'5\'"
						},
						{
							type: "\'skill\'",
							message: "\'ReactJS\'",
							rating: "\'4\'"
						},
						{
							type: "\'skill\'",
							message: "\'AngularJS\'",
							rating: "\'3\'"
						},
						{
							type: "\'skill\'",
							message: "\'Redux\'",
							rating: "\'3\'"
						},
						{
							type: "\'skill\'",
							message: "\'NodeJS\'",
							rating: "\'3\'"
						},
						{
							type: "\'skill\'",
							message: "\'PHP\'",
							rating: "\'3\'"
						},
						{
							type: "\'skill\'",
							message: "\'EJS\'",
							rating: "\'3\'"
						},
						{
							type: "\'skill\'",
							message: "\'Git\'",
							rating: "\'4\'"
						},
						{
							type: "\'skill\'",
							message: "\'Gulp\'",
							rating: "\'4\'"
						},
						{
							type: "\'skill\'",
							message: "\'Grunt\'",
							rating: "\'4\'"
						},
						{
							type: "\'skill\'",
							message: "\'Bootstrap\'",
							rating: "\'3\'"
						},
						{
							type: "\'skill\'",
							message: "\'Drupal\'",
							rating: "\'4\'"
						},
						{
							type: "\'skill\'",
							message: "\'Wordpress\'",
							rating: "\'4\'"
						},
						{
							type: "\'skill\'",
							message: "\'Responsive Design\'",
							rating: "\'5\'"
						},
						{
							type: "\'skill\'",
							message: "\'Semantic HTML\'",
							rating: "\'3\'"
						},
						{
							type: "\'skill\'",
							message: "\'REST APIs\'",
							rating: "\'4\'"
						}
					],
					[
						{
							type: "\'header\'",
							message: "\'Experience\'"
						},
						{
							type: "\'text\'",
							message: "\'My coding experience at a glance\'"
						},
						{
							type: "\'experience\'",
							date: "\'2016 - Present\'",
							position: "\'Lead Developer\'",
							location: "\'Tomorrow People\'",
							message: "\'Creating and maintaining pixel-perfect web apps based on UX design and leading a team of web developers in a fast-paced digital agency for global clients predominantly in the technology sector.\'"
						},
						{
							type: "\'experience\'",
							date: "\'2013 - 2016\'",
							position: "\'Junior Developer\'",
							location: "\'Tomorrow People\'",
							flipped: "\'yes\'",
							message: "\'Building and maintaining high-performing responsive microsites and landing pages and working closely with digital designers to improve UX and drive conversions.\'"
						},
						{
							type: "\'experience\'",
							date: "\'2008 - 2012\'",
							position: "\'BSc Computer Games Design\'",
							location: "\'Staffordshire University\'",
							message: "\'Using front end languages such as HTML, CSS & JavaScript to complete web-based projects as well as studying object oriented programming in Java and C++.\'"
						
						},
					]
				]
			}
		});







		var makeCarousel = () => {
			// console.log(this);
			var left = 0;
			var direction = 0;
			var ndirection = 0;
			var stop = 0;
			var speed = 50;
			var nspeed = 50;
			var go = () => {
				if (window.outerWidth > 600) {
				    if(stop == 0){
				        document.getElementsByClassName("works-inner")[0].style.marginLeft = (-left / 5) + '%';
				        if (direction == 0){
				            left ++;
				            if (left >= 1500) {
				                direction = 1;
								ndirection = 1;
				            }
				        }
				        else {
				            left --;
				            if (left <= 0) {
				                direction = 0;
								ndirection = 0;
				            }
				        }
				    }
				}
			};
			var interval = setInterval(go, speed);
			var previous = document.getElementsByClassName("previous")[0];
			var next = document.getElementsByClassName("next")[0];


			var rego = (thisspeed, thisdirection) => {
				clearInterval(interval);
				speed = thisspeed; 
				direction = thisdirection;
				interval = setInterval(go, speed);
			}

			document.querySelectorAll(".work").forEach((elem) => {
				elem.addEventListener("mouseover", () => { stop = 1 });
				elem.addEventListener("mouseout", () => { stop = 0 });
			});


			previous.addEventListener("mouseover", () => rego(1,0));
			previous.addEventListener("mouseout", () => rego(nspeed,ndirection));

			next.addEventListener("mouseover", () => rego(1,1));
			next.addEventListener("mouseout", () => rego(nspeed,ndirection));
		};

		window.requestAnimationFrame(makeCarousel);








		// var makeCarousel = () => {
		// 	console.log(this);
		// 	var left = 0;
		// 	var direction = 0;
		// 	var ndirection = 0;
		// 	var stop = 0;
		// 	var speed = 50;
		// 	var nspeed = 50;
		// 	var go = () => {
		// 	    if(stop == 0){
		// 	        document.getElementsByClassName("works-inner")[0].style.marginLeft = (-this.state.carousel.left / 5) + '%';
		// 	        if (this.state.carousel.direction == 0){
		// 	        	this.setState(prevstate => ({
		// 	        		carousel: {
		// 	        			...prevstate.carousel,
		// 	        			left: (this.state.carousel.left + 1)
		// 	        		}
		// 	        	}));
		// 	            if (this.state.carousel.left >= 1500) {
		// 	            	this.setState(prevstate => ({
		// 	            		carousel: {
		// 	            			...prevstate.carousel,
		// 	            			direction: 1,
		// 	            			ndirection: 1
		// 	            		}
		// 	            	}));
		// 	            }
		// 	        }
		// 	        else {
		// 	        	this.setState(prevstate => ({
		// 	        		carousel: {
		// 	        			...prevstate.carousel,
		// 	        			left: (this.state.carousel.left - 1)
		// 	        		}
		// 	        	}));
		// 	            if (this.state.carousel.left <= 0) {
		// 	            	this.setState(prevstate => ({
		// 	            		carousel: {
		// 	            			...prevstate.carousel,
		// 	            			direction: 0,
		// 	            			ndirection: 0
		// 	            		}
		// 	            	}));
		// 	            }
		// 	        }
		// 	    }
		// 	};

		// 	var interval = setInterval(go, this.state.carousel.speed);
		// 	var previous = document.getElementsByClassName("previous")[0];
		// 	var next = document.getElementsByClassName("next")[0];


		// 	var rego = (thisspeed, thisdirection) => {
		// 			clearInterval(interval);
		// 			this.setState(prevstate => ({
		// 				carousel: {
		// 					...prevstate.carousel,
		// 					speed: thisspeed,
		// 					direction: thisdirection
		// 				}
		// 			}));
		// 			interval = setInterval(go, this.state.carousel.speed);
		// 	}

		// 	document.querySelectorAll(".work").forEach((elem) => {
		// 		elem.addEventListener("mouseover", () => { 
		// 			this.setState(prevstate => ({
		// 				carousel: {
		// 					...prevstate.carousel,
		// 					stop: 1
		// 				}
		// 			}));
		// 		});
		// 		elem.addEventListener("mouseout", () => { 
		// 			this.setState(prevstate => ({
		// 				carousel: {
		// 					...prevstate.carousel,
		// 					stop: 0
		// 				}
		// 			}));
		// 		});
		// 	});


		// 	previous.addEventListener("mouseover", () => rego(1,0));
		// 	previous.addEventListener("mouseout", () => rego(this.state.carousel.nspeed,this.state.carousel.ndirection));

		// 	next.addEventListener("mouseover", () => rego(1,1));
		// 	next.addEventListener("mouseout", () => rego(this.state.carousel.nspeed,this.state.carousel.ndirection));
		// };

		// window.requestAnimationFrame(makeCarousel);







	}
	handleClick = (evt) => {
		evt.preventDefault();
		if (this.refs.name !== null ){
			this.setState({
				pageBody: this.refs.name.value
			})
		}
	}
	onInputEvent = (evt) => {
		this.setState({
			myval: evt.target.value
		})
	}
	findType(i){
		if (this.state.contents){
			if (eval("this.state.contents[0][" + i + "]")){
				var result = eval("this.state.contents[0][" + i + "].type");
				result = eval(result);
				return result;
			}
		}
		return 'text';
	}
	findMessage(i){
		if (this.state.contents){
			if (eval("this.state.contents[0][" + i + "]")){
				var result = eval("this.state.contents[0][" + i + "].message");
				result = eval(result);
				return result;
			}
		}
		return '';
	}
	makeModule(thispage){
		var result = [];
		var animation = 0;
		var imgs = 0;
		if (this.state.contents){
			for (var i = 0; i < this.state.contents[thispage].length; i++){ 
				var allprops = { ...this.state.contents[thispage][i]};
				allprops.number = animation;
				for (var p in allprops) {
					allprops[p] = eval(allprops[p]);
					if (p == 'message' && allprops.type != 'paragraph'){
						if (allprops.type == 'button'){
								animation += 15;
						}
						var stop = false;
						var proplength = allprops.message.length - 1;
						allprops.message = allprops.message.split("").map(
							function(x, index){
								animation ++;
								if (stop == true ){
									animation += 15;
									stop = false;
								}
								if (x == "." | x == "?"){
									stop = true;
								}
								var lets = `delay-${animation}`;
								if (x != '~'){
									return <span key={index} className={lets}>{x}</span>;
								}
								return <br key={index}></br>;
							}
						);
					}
				}
				animation += 5;
				allprops.key = i;
				result.push(React.createElement(Module, allprops));
				
			}
		};
		return result;
	}
	page(i){
		return "App page-" + i;
	}
	activePage(i){
		if (i == this.state.page){
			return 'active';
		}
		return '';
	}
	checkIfLoaded(){
		if(this.state.contents){
			return "root-inner loaded"
		}
		return "root-inner";
	}
	apiCall(){
		fetch(`http://localhost:8080/hi`)
			.then(response => {
				response.json()
					.then((data)=>{
						this.setState({
							location: data.hello
						})
						// console.log(this.state.location);
					});
			});
		// var xhttp = new XMLHttpRequest();
		// xhttp.onload = function(){
		// 	var data = JSON.parse(this.responseText);
		// 	// console.log(data);
		// }
		// xhttp.open('get','http://maps.googleapis.com/maps/api/geocode/json?address=utrecht','true');
		// xhttp.send();
		return this.state.location;
	}
	changePage = (i) => {
		window.scrollTo(0, document.getElementById("page-"+ i).offsetTop);
		this.setState({
			page: i
		})
	}
	makeHeader(){
		var result = [];
		for (let i = 0; i <= 4; i++){
			if(this.state.contents){
				var stuff = <li key={i} onClick={this.changePage.bind(this, i)} className={this.activePage(i) + "Page"}>
								{eval(eval("this.state.contents[i][0].message"))}
							</li>
				result.push(stuff);
			}
		}
		return result;
	}
	makePage(){
		var result = [];
		var stuff = <ul key={0} className="header-bar">
						{this.makeHeader()}
					</ul>;
		result.push(stuff);
		for (var i = 0; i <= 4; i++){
			stuff = <section key={i+1} id={'page-' + i} className={this.activePage(i) + ' app page-' + i }>
						<div className="text-section">
							<div className="text-wrapper">
								{this.makeModule(i)}
							</div>
						</div>
					</section>;
			result.push(stuff);
		};
		stuff = <section key={6} className="app footer"><div className="text-section active"><div className="text-wrapper active"><h2 className="text-center active"><span className="delay-12 active">Get in touch</span></h2><a className="button delay-39 active" href="mailto:patrickmanville@yahoo.co.uk"><span className="delay-55 active">E</span><span className="delay-56 active">m</span><span className="delay-57 active">a</span><span className="delay-58 active">i</span><span className="delay-59 active">l</span></a><a className="button delay-64 active" href="https://uk.linkedin.com/in/patrick-manville"><span className="delay-80 active">L</span><span className="delay-81 active">i</span><span className="delay-82 active">n</span><span className="delay-83 active">k</span><span className="delay-84 active">e</span><span className="delay-85 active">d</span><span className="delay-86 active">I</span><span className="delay-87 active">n</span></a></div></div><h3>Copyright © 2018 Patrick Manville</h3></section>;
		result.push(stuff);
		return result;
	}
	render() {
		return (
			<div className={this.checkIfLoaded()}>
				{this.makePage()}
			</div>
		);
	}
}

//<div>{this.apiCall()}</div><div onClick={() => this.props.reducer.add(10)} >{this.props.reducer.result}</div>
				

const mapStateToProps = (state) => {
	return {
		reducer: state.reducer,
		otherReducer: state.otherReducer
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		add: (amount) => {
			dispatch({
				type: "ADD",
				payload: amount
			})
		},
		subtract: (amount) => {
			dispatch({
				type: "SUBTRACT",
				payload: amount
			})
		}
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(App);

