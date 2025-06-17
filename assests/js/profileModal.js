document.addEventListener("DOMContentLoaded", function () {
    const voteButtons = document.querySelectorAll(".myProfile");
    const modal = document.getElementById("myProfile");
    const modalBox = modal.querySelector("div");

    voteButtons.forEach((btn) => {
        btn.addEventListener("click", () => {
            modal.classList.remove("pointer-events-none");
            modal.classList.add("opacity-100");
            modal.classList.remove("opacity-0");
            modalBox.classList.remove("scale-95");
            modalBox.classList.add("scale-100");
        });
    });

    document.getElementById("closeModalBtn").addEventListener("click", () => {
        modal.classList.remove("opacity-100");
        modal.classList.add("opacity-0");
        modalBox.classList.remove("scale-100");
        modalBox.classList.add("scale-95");

        // Wait for transition to end before hiding clicks
        setTimeout(() => {
            modal.classList.add("pointer-events-none");
        }, 300);
    });

    // Optional: click outside modal box to close
    window.addEventListener("click", (e) => {
        if (e.target === modal) {
            modal.classList.remove("opacity-100");
            modal.classList.add("opacity-0");
            modalBox.classList.remove("scale-100");
            modalBox.classList.add("scale-95");
            setTimeout(() => {
                modal.classList.add("pointer-events-none");
            }, 300);
        }
    });
});
