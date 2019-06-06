import React from 'react';
import { connect } from 'react-redux';
import { CSSTransition } from 'react-transition-group';
import { actionCreators } from './store';
import {HeaderWrapper, Logo, Nav, NavItem,SearchWrapper, NavSearch, Addition,Button } from './style';


const mapStateToProps = (state)=>{
    return{
               //focused in reducer
        // focused:state.header.focused

        //after the 'focused' become immutable
        // focused:state.header.get('focused')
        //after 'state' become immutable
        focused: state.getIn(['header','focused']) //===focused:state.get('header').get('focused') 
    }
}

const mapDispatchToProps = (dispatch)=>{
    return{
        handleInputFocuse(){
            const action  = actionCreators.searchFocus();
            dispatch(action);
        },
        handleInputBlur(){
            dispatch(actionCreators.searchBlur());
        },
    }
}

const Header =(props)=>{
    return(
        <HeaderWrapper>
                <Logo/>
                <Nav>
                    <NavItem className="left active">Home</NavItem>
                    <NavItem className="left">DownLoad</NavItem>
                    <NavItem className="right">Login</NavItem>
                    <NavItem className="right"><i className="iconfont">&#xe33;</i></NavItem>
                    <SearchWrapper>
                        <CSSTransition in={props.focused} timeout={200} classNames="slide">
                        <NavSearch className={props.focused ? 'focused':''} 
                        onFocus={props.handleInputFocuse}
                        onBlur={props.handleInputBlur}
                        ></NavSearch>
                        </CSSTransition>
                        <i className={props.focused ? 'focused iconfont':'iconfont'}>&#xe62d;</i>
                    </SearchWrapper>
                </Nav>
                <Addition>
                    <Button className="newPost"><i className="iconfont">&#xe33;</i> Post</Button>
                    <Button className="reg">Sign Up</Button>                  
                </Addition>
        </HeaderWrapper>
    )
}

export default connect(mapStateToProps,mapDispatchToProps)(Header);