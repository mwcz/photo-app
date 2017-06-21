import { h, Component } from 'preact';
import linkState from 'linkstate';
import sortBy from 'lodash/sortBy';

import Photo from './Photo';

class PhotoViewer extends Component {
    constructor(props) {
        super(props);

        window.PhotoViewer = this;

        this.state = {
            photos: null,
            activePhoto: null,
            loading: true,
        };
        this.pushState = this.pushState.bind(this);
    }
    componentDidMount() {
        fetch('photos.json')
            .then(rsp => rsp.json())
            .then(photoData => {
                console.log(photoData);
                const photos = sortBy(photoData, 'post_date').reverse();
                this.setState({
                    photos,
                    activepid: -1,
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
    render(props, { photos, activepid, loading }) {
        return (
            <div class="photos">
                {loading
                        ? <p>Please wait...</p>
                        : (photos.map(p => <Photo {...p} size={activepid == p.id ? 'full' : 'thumb'} key={p.id} />))
                }
            </div>
        );
    }
}

export default PhotoViewer;
