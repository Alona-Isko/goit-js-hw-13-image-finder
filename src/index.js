import './sass/main.scss';
import NewsApiService from './js/news-service';
// 23238437-0207b31bcaea78a79b03733f3


const refs = {
    searchForm: document.querySelector('#search-form'),
    container: document.querySelector('.gallery'),
    loadMoreBtn: document.querySelector('[data-action="load-more"]')
};
const newsApiService = new NewsApiService();

refs.searchForm.addEventListener('submit', onSearch);
refs.loadMoreBtn.addEventListener('click', onLoadMore);

function onSearch(ev) {
    ev.preventDefault();

    newsApiService.query = ev.currentTarget.elements.query.value;
    newsApiService.resetPage();
    newsApiService.fetchImages();
        // .then(images => console.log(images))
}

function onLoadMore() {
    newsApiService.fetchImages();
        // .then(images => console.log(images))
}

