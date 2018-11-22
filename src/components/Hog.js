import React from 'react'
import { Card, Image } from 'semantic-ui-react'

class Hog extends React.Component {
    constructor() {
        super();
        this.state = {
            visibility: false
        } 
    }

    handleClick = () => {
        this.setState({
            visibility: !this.state.visibility
        })
    }

    render() {
        const { hog } = this.props
        return (
            <Card onClick={ this.handleClick }>
                <Image src='/images/avatar/large/matthew.png' />
                <Card.Content>
                    <Card.Header>{ hog.name }</Card.Header>
                    {this.state.visibility 
                    ? (<div><Card.Meta>
                            <span className='date'>{ hog.specialty }</span>
                        </Card.Meta>
                        <Card.Description>
                            <p>Weight: { hog.weight }kg</p>  
                            <p>greased: {hog.greased ? 'Yes' : 'No' }</p>
                            <p>Medal Achieved: { hog.medal }</p>
                        </Card.Description></div>)
                    : null }
                </Card.Content>
            </Card>
        )
    }
} 

export default Hog;