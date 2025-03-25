const cardList = [
    { title: "Card 1", image: "images/card1.jpg", link: "Learn More" },
    { title: "Card 2", image: "images/card2.jpg", link: "Learn More" }
];

const addCards = () => {
    cardList.forEach(item => {
        let cardHTML = `
            <div class="col s6">
                <div class="card">
                    <div class="card-image">
                        <img src="${item.image}">
                        <span class="card-title">${item.title}</span>
                    </div>
                    <div class="card-content">
                        <p>${item.link}</p>
                    </div>
                </div>
            </div>`;
        $("#card-section").append(cardHTML);
    });
};

$(document).ready(() => {
    $(".modal").modal();
    addCards();
});
