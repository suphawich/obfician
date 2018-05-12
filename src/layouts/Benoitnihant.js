import React, { Component } from 'react';
import {createStore} from 'redux';
import {connect} from 'react-redux';
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
import '../css/Benoitnihant.css';

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

    constructor(props) {
        super(props);
    }
    mouseOverBack() {
        if (this.props.store.benoitnihant.fgBack) {
            {this.props.store.reset()}
        }
    }
    mouseOverGo() {
        if (this.props.store.benoitnihant.fgGo) {
            {this.props.store.moveFirstSegment(100, false, true, false, 0, false)}
        }
    }
    mouseOverHome() {
        if (this.props.store.benoitnihant.fgHome) {
            {this.props.store.reset()}
        }
    }

	render() {
		return (
			<div
                className='firstSegment'
				style={{
        	        height: this.props.store.benoitnihant.fgHeight+'vh',
                    backgroundImage: 'url(images/river.jpg)',
        	    }}
            >
    	        <Heading />
                <Container>
                    <Container
                        onMouseOver={ (e) => this.mouseOverBack(e) }
                        className='back'
                        style={{
                            opacity: this.props.store.benoitnihant.fgBack ? '100' : '0',
                        }}
                    >BACK</Container>
        		    <Container
        		      	onMouseOver={ (e) => this.mouseOverGo(e) }
                        className='go'
        		      	style={{
        		      		opacity: this.props.store.benoitnihant.fgGo ? '100' : '0',
        		        }}
                    >GO</Container>
        		    <Container
        		      	onMouseOver={ (e) => this.mouseOverHome(e) }
                        className='home'
        		      	style={{
        		      		opacity: this.props.store.benoitnihant.fgHome ? '100' : '0',
                            marginTop: this.props.store.benoitnihant.fgHome ? '30vh' : '0',
        		        }}
                    >HOME</Container>
    	      	</Container>
			</div>
		);
	}
}

class SecondSegment extends Component {

    constructor(props) {
        super(props);
    }
    mouseOverUp() {
        // if (this.props.store.benoitnihant.sgUp) {
            {this.props.store.moveFirstSegment(30, false, false, true, 70, false)}
        // }
    }

	render() {
		return (
			<div
                className='secondSegment'
				style={{
    	            backgroundImage: 'url(images/megazine.jpg)',
    	        }}
            >
                <Container>
        		    <div
        		      	onMouseOver={ (e) => this.mouseOverUp(e) }
                        className='up'
        		      	style={{
        		      		opacity: this.props.store.benoitnihant.sgUp ? '100' : '0',
        		      	}}
                    >UP</div>
                </Container>
			</div>
		);
	}
}


class Benoitnihant extends Component {
	render() {
		return (
			<Responsive>
				<Visibility style={{ overflow: 'hidden' }}>
                    <SecondSegment store={this.props} />
					<FirstSegment store={this.props} />
				</Visibility>
			</Responsive>
		);
	}
}

const mapStateToProps = (state) => {
    return {
        benoitnihant: state.benoitnihant
    };
}
const mapDispatchToProps = (dispatch) => {
    return {
        moveFirstSegment: (fgHeight, fgGo, fgHome, fgBack, sgHeight, sgUp) => {
            dispatch({
                type: "MOVE_FIRST_SEGMENT",
                payload: {
                    fgHeight: fgHeight,
                    fgGo: fgGo,
                    fgHome: fgHome,
                    fgBack: fgBack,
                    sgHeight: sgHeight,
                    sgUp: sgUp,
                }
            });
        },
        reset: () => {
            dispatch({
                type: "RESET"
            });
        },
    };
}
export default connect(mapStateToProps, mapDispatchToProps)(Benoitnihant);
