import React from 'react'
import {Container, Header, Grid } from 'semantic-ui-react'
import Joke from '../components/Joke'

class JokesContainer extends React.Component {
  render() {
    console.log(this.props.userInfo)
    return(
      <React.Fragment>
        <Container>
          <Header>
          My Joke List
          </Header>
          <Grid columns={1}>
            {this.props.userInfo.jokes ? this.props.userInfo.jokes.map(joke =>
              <Joke
                key={joke.id}
                currentJoke={joke}
                handleDeleteJoke={this.props.handleDeleteJoke}
              />) : null}
          </Grid>
        </Container>
      </React.Fragment>
    )
  }
}

export default JokesContainer
