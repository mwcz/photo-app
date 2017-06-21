import { h } from 'preact';

function Air(props) {
    return (
        <div class="air">
            {props.city}, {props.country} - {props.count} ({props.locations})
        </div>
    );
}

export default Air;
