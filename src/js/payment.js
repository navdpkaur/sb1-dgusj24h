export class PaymentSelector {
    constructor() {
        this.cards = document.querySelectorAll('.payment-card');
        this.init();
    }

    init() {
        this.cards.forEach(card => {
            card.addEventListener('click', () => this.selectPayment(card));
        });
    }

    selectPayment(selectedCard) {
        this.cards.forEach(card => card.classList.remove('selected'));
        selectedCard.classList.add('selected');
    }
}