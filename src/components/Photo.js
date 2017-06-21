import { h, Component } from 'preact';

class Photo extends Component {
    constructor(props) {
        super(props);

        this.state = {
            fullSize: 0,
            loadingThumb: true,
            loadingFull: true,
        };

        this.togglePhoto = this.togglePhoto.bind(this);
        this.doneLoadingFull = this.doneLoadingFull.bind(this);
        this.doneLoadingThumb = this.doneLoadingThumb.bind(this);
    }
    togglePhoto() {
        this.setState({
            fullSize: Math.abs(this.state.fullSize - 1)
        });
    }
    doneLoadingFull() {
        this.setState({
            loadingFull: false,
        });
    }
    doneLoadingThumb() {
        this.setState({
            loadingThumb: false,
        });
    }
    render({ title, image, thumbnail, id, color0 }, { fullSize, loadingThumb, loadingFull }) {
        return (
            <span class={fullSize ? 'photo full' : 'photo thumb'} onclick={this.togglePhoto} data-title={title} data-pid={id} data-color={color0}>
                {fullSize
                    ? <img src={image} onload={this.doneLoadingFull} />
                    : <img src={thumbnail} onload={this.doneLoadingThumb} /> 
                }
                {fullSize
                    ? <p>{loadingFull && <p>Loading...</p>}</p>
                    : <p>{loadingThumb && <p>Loading...</p>}</p>
                }
            </span>
        );
    }
}

export default Photo;
