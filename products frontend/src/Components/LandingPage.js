import React from 'react';
import Home from './Home';
import React from 'react';
import Home from './Home';


class LandingPage extends React.Component {

    componentDidMount() {
        this.props.hideShell(false)
    }
    render(){
        return(
            <div>
            <Home/>
            {/* <Feature/> */}
            </div>
        )
    }
}

export default LandingPage; 
