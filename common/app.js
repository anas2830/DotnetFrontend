function showToast(message, type = "success") {
    const toastEl = document.getElementById("appToast");
    const toastMsg = document.getElementById("toastMessage");

    toastMsg.innerText = message;

    toastEl.classList.remove("bg-success", "bg-danger", "bg-warning");
    toastEl.classList.add(
        type === "success" ? "bg-success" :
        type === "error" ? "bg-danger" :
        "bg-warning"
    );

    const toast = new bootstrap.Toast(toastEl, {
        delay: 5000
    });

    toast.show();
}