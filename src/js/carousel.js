export class ImageCarousel {
    constructor() {
        this.mainImage = document.querySelector('.main-image');
        this.thumbnailContainer = document.querySelector('.thumbnail-container');
        this.thumbnails = document.querySelectorAll('.thumbnail');
        this.prevButton = document.querySelector('.scroll-button.prev');
        this.nextButton = document.querySelector('.scroll-button.next');
        this.init();
    }

    init() {
        this.thumbnails.forEach(thumbnail => {
            thumbnail.addEventListener('click', () => this.updateImage(thumbnail));
        });

        this.prevButton?.addEventListener('click', () => this.scroll(-1));
        this.nextButton?.addEventListener('click', () => this.scroll(1));
    }

    updateImage(thumbnail) {
        this.mainImage.src = thumbnail.src;
        this.thumbnails.forEach(t => t.classList.remove('active'));
        thumbnail.classList.add('active');
    }

    scroll(direction) {
        const scrollAmount = 240; // Two thumbnails width + gap
        this.thumbnailContainer.scrollBy({
            left: direction * scrollAmount,
            behavior: 'smooth'
        });
    }
}