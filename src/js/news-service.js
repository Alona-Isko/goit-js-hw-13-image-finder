export default class NewsApiService {
    constructor() {
        this.searchQuery = '';
    }

    fetchImages() {
        console.log(this);
        const url = `https://pixabay.com/api/?image_type=photo&orientation=horizontal&q=${this.searchQuery}&page=1&per_page=12&key=23238437-0207b31bcaea78a79b03733f3`;

        fetch(url)
            .then(res => res.json())
            .then(console.log);
    }

    get query() {
        return this.searchQuery;
    }

    set query(newQuery) {
        this.searchQuery = newQuery;
    }
}