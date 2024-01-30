function openModal(modalId) {
    var modal = document.getElementById(modalId);
    if (modal) {
        modal.style.display = "block";
        // Always disable scrolling when the modal is open
        document.body.style.overflow = "hidden";
    }
}

function closeModal(modalId) {
    var modal = document.getElementById(modalId);
    if (modal) {
        modal.style.display = "none";
        // Always enable scrolling when the modal is closed
        document.body.style.overflow = "auto";
    }
}

document.addEventListener("DOMContentLoaded", function () {
    // Get all modals with class "modal"
    var modals = document.querySelectorAll(".modal");

    // When the user clicks anywhere outside of a modal, close it
    window.addEventListener("click", function (event) {
        modals.forEach(function (modal) {
            if (event.target === modal) {
                closeModal(modal.id);
            }
        });
    });
});
