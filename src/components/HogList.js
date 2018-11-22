import React from 'react'
import Hog from './Hog'
import { Grid } from 'semantic-ui-react'

class HogList extends React.Component {

    render() {
        return ( 
            <div>
                <Grid>
                    {this.props.hogs.map(hog => 
                    <Hog hog={ hog } 
                    />)}
                </Grid>
            </div>
        )
    }

}

export default HogList;