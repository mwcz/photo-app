import { h, Component } from 'preact';
import linkState from 'linkstate';

import Photo from './Photo';

class PhotoViewer extends Component {
    constructor(props) {
        super(props);

        this.state = {
            photos: null,
            photo: null,
            loading: true,
        };
        this.countrySelect = this.countrySelect.bind(this);
        this.pushState = this.pushState.bind(this);
    }
    componentDidMount() {
        fetch('photos.json')
            .then(rsp => rsp.json())
            .then(photos => {
                console.log(photos);
                this.setState({
                    photos,
                    photo: photos[0],
                    loading: false
                });
            })
            .catch(err => console.error(err));
    }
    pushState(evt) {
        // const country = evt.target.dataset.country;
        // evt.preventDefault();
        // history.pushState({ country }, '', country);
        // return false;
    }
    render(props, { photos, photo, loading }) {
        return (
            <div class="aqv">
                {loading
                        ? <p>Please wait...</p>
                        : (photos.map(p => <Photo {...photo} key={photo.id} />))
                }
            </div>
        );
    }
}

export default PhotoViewer;
