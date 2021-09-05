export default class NewsApiService {
    constructor() {
        this.searchQuery = '';
        this.page = 1;
    }

    fetchImages() {
        // console.log('до:', this);
        const url = `https://pixabay.com/api/?image_type=photo&orientation=horizontal&q=${this.searchQuery}&page=${this.page}&per_page=12&key=23238437-0207b31bcaea78a79b03733f3`;

        return fetch(url)
            .then(res => res.json())
            .then(data => {
                // console.log(data);
                this.incrementPage();
                console.log(this);
            });

                // return data.images;
    }

    incrementPage() {
        this.page += 1;
    }

    resetPage() {
        this.page = 1;
    }

    get query() {
        return this.searchQuery;
    }

    set query(newQuery) {
        this.searchQuery = newQuery;
    }
}