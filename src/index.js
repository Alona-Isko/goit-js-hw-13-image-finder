import imagesTpl from './templates/images.hbs';
import './sass/main.scss';
import NewsApiService from './js/apiService';
import LoadMoreBtn from './js/load-more';

const refs = {
    searchForm: document.querySelector('#search-form'),
    container: document.querySelector('.gallery'),
};

const loadMoreBtn = new LoadMoreBtn({
    selector: '[data-action="load-more"]',
    hidden: true,
});

const newsApiService = new NewsApiService();


refs.searchForm.addEventListener('submit', onSearch);
loadMoreBtn.refs.button.addEventListener('click', fetchImages);

function onSearch(ev) {
    ev.preventDefault();

    newsApiService.query = ev.currentTarget.elements.query.value;
    if (newsApiService.query === '') {
        return alert('Error');
    }

    loadMoreBtn.show();
    newsApiService.resetPage();
    clearContainer();
    fetchImages();  
}

function fetchImages() {
    loadMoreBtn.disable();
    newsApiService.fetchImages()
        .then(hits => {
            createImageGallery(hits);

            loadMoreBtn.enable();

            refs.container.scrollIntoView({ behavior: 'smooth', block: 'end' });
        });
}

function createImageGallery(hits) {
    refs.container.insertAdjacentHTML('beforeend', imagesTpl(hits));
}

function clearContainer() {
    refs.container.innerHTML = '';
}
