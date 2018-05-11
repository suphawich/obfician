import React, { Component } from 'react';
import {
  Button,
  Container,
  Divider,
  Grid,
  Header,
  Icon,
  Image,
  List,
  Menu,
  Responsive,
  Segment,
  Sidebar,
  Visibility,
} from 'semantic-ui-react';
import { Slider } from 'react-burgers';

class Heading extends Component {
	render() {
		return (
      <Menu
        inverted={!false}
        //pointing={!false}
        secondary={!false}
        size='large'
        style={{ fontSize: '20px' }}
      >
          <Menu.Item as='a'>Noey</Menu.Item>
          <Menu.Item position='right'>
          	MENU <Icon name='content' />
          </Menu.Item>
      </Menu>
		);
	}
}


class FirstSegment extends Component {

	state = {
		height: 70,
		go: true
	}
	mouseOverGo() {
		this.setState({
			height: 100,
			go: false
		});
	}
	mouseOverHome() {
		this.setState({
			height: 70,
			go: true
		});
	}

	render() {
		return (
			<Segment
				textAlign = 'center'
				style={{
					marginBottom: '0',
					// minHeight: 700,
	        // backgroundImage: 'url(images/cover-homepage.jpg)',
	        backgroundImage: 'url(images/river.jpg)',
	        // backgroundSize: '100% 100%',
	        backgroundSize: 'cover',
	        height: this.state.height+'vh',
	        backgroundColor: 'red',
	        transition: '1s',
	      }}>
	      <Heading />
	      <Container style={{ marginTop: this.state.height-20+'vh', transition: '1s' }}>
		      <Container
		      	onMouseOver={
		      		() => this.mouseOverGo()
		      	}
		      	style={{
		      		width: '7%',
		      		fontFamily: 'humanst521_btroman',
		      		fontWeight: 'lighter',
		      		fontSize: '14px',
		      		color: this.props.color,
		      		opacity: this.state.go ? '100' : '0',
		      		marginLeft: 'auto',
		      		marginRight: 'auto',
		      		transition: '2s',
		      	}}>GO</Container>
		      <br />
		      <Container
		      	onMouseOver={
		      		() => this.mouseOverHome()
		      	}
		      	style={{
		      		width: '7%',
		      		fontFamily: 'humanst521_btroman',
		      		fontWeight: 'lighter',
		      		fontSize: '14px',
		      		color: this.props.color,
		      		opacity: this.state.go ? '0' : '100',
		      		marginLeft: 'auto',
		      		marginRight: 'auto',
		      		transition: '2s',
		      	}}>HOME</Container>
	      	</Container>
			</Segment>
		);
	}
}

class SecondSegment extends Component {

	state = {
		height: 70,
		go: true
	}
	mouseOverGo() {
		this.setState({
			height: 100,
			go: false
		});
	}
	mouseOverHome() {
		this.setState({
			height: 70,
			go: true
		});
	}

	render() {
		return (
			<Segment
				textAlign = 'center'
				style={{ 
					marginTop: '0px',
					// minHeight: 700,
	        backgroundImage: 'url(images/megazine.jpg)',
	        // backgroundSize: '100%',
	        backgroundSize: 'cover',
	        height: 30+'vh',
	        transition: '1s',
	      }}>
			</Segment>
		);
	}
}


class Benoitnihant extends Component {
	render() {
		return (
			<Responsive>
				<Visibility>
					<FirstSegment color="#ffffff" />
					<SecondSegment />
				</Visibility>
			</Responsive>
		);
	}
}


export default Benoitnihant;
