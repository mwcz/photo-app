import { h } from 'preact';
import { route } from 'preact-router';

function search(query) {
    route(`/air/${encodeURIComponent(query)}`);
}

function Home() {
    return (
        <section>
            <p>Enter a country code</p>
            <input type="search"
                placeholder="eg: US, AU, GB"
                onSearch={e => search(e.target.value)} />
        </section>
    );
}

export default Home;
