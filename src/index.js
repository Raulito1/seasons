import React from 'react';
import ReactDOM from 'react-dom';

// component imports
import SeasonDisplay from './SeasonDisplay';
import Spinner from './Spinner';
import ErrorPage from './ErrorPage';

class App extends React.Component {

   state = {
      lat: null,
      errorMessage: ''
   }

   componentDidMount() {
      window.navigator.geolocation.getCurrentPosition(
         (position) => {
            this.setState({ lat: position.coords.latitude });
         },
         (err) => {
            this.setState({ errorMessage: err.message });
         }
      );
   }

   // helper method to determine season
   renderSeasonDisplay() {
      if (this.state.errorMessage && !this.state.lat) {
         return <ErrorPage errorMessage={this.state.errorMessage} />
      }
      if (!this.state.errorMessage && this.state.lat) {
         return <SeasonDisplay lat={this.state.lat} />
      }

      return <Spinner message="Please accept location request" />
   }

   render() {
      return (
         <div>{this.renderSeasonDisplay()}</div>
      )
   }
}

ReactDOM.render(<App />, document.getElementById('root'));
