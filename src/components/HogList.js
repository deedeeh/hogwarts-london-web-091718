import React from 'react'
import Hog from './Hog'
import { Card } from 'semantic-ui-react'

class HogList extends React.Component {

    render() {
        return ( 
            <div>
                {this.props.hogs.map(hog => 
                <Hog hog={ hog } 
            />)}
            </div>
        )
    }

}

export default HogList;