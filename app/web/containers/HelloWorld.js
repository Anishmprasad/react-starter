import React from 'react'
import { render } from 'react-dom'
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';

// import 'styles/study/ChooseMission.scss';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import {helloWorldAction} from '../../actions/helloWorld';


class helloWorld extends React.Component{

constructor(props){
    super(props)
}

componentDidMount(){
    this.props.helloWorldAction();
}

render(){
    return(
        <div>
            <h1>helloworld</h1>
           <div>
                {
                this.props.starwars.map((post,i) =>
                    <a key={i} href="javascript:void(0);">
                        <h3 key={i} onClick={() => this.resultpointer(post)} className={"animated fadeInLeft delay bubble float"} dangerouslySetInnerHTML={{__html: post.name}}></h3>
                    </a>
                    )
                }
            </div>
        </div>
    )
}

}
function mapStateToProps(state) {
  console.log('starwars->',state)
  return {
      starwars:state.helloWorld
  };
}
function mapDispatchToProps(dispatch){
  return bindActionCreators({helloWorldAction},dispatch);
}


export default connect(mapStateToProps,mapDispatchToProps)(helloWorld);