import { h } from 'preact';


export function User(props) {
    return (
        <div class="user">
            <figure class="user__image">
                <img src={props.image} />
                <figcaption> {props.name} </figcaption>
            </figure>
        </div>
    );
}

export default User;
