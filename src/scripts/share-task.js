function showShareMenu(){
    const alertContainer = document.getElementById("alert-container")
    alertContainer.innerHTML += `
        <div class="blur">
            <div class="share-container">
                <button class="share-section-button">
                    <img class="interact-button-img-scale" src="src/assets/images/share-button-copy.svg" alt="">
                </button>

                <button class="share-section-button">
                    <img class="interact-button-img-scale" src="src/assets/images/share-button-vk.svg" alt="">
                </button>

                <button class="share-section-button">
                    <img class="interact-button-img-scale" src="src/assets/images/share-button-telegram.svg" alt="">
                </button>

                <button class="share-section-button">
                    <img class="interact-button-img-scale" src="src/assets/images/share-button-whatsapp.svg" alt="">
                </button>

                <button class="share-section-button">
                    <img class="interact-button-img-scale" src="src/assets/images/share-button-facebook.svg" alt="">
                </button>
            </div>
        </div>
    `;

    alertContainer.querySelector(".blur").addEventListener("click", closeAlert)
}