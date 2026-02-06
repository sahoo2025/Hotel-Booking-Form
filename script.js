const form = document.getElementById("bookingForm");
const checkin = document.getElementById("checkin");
const checkout = document.getElementById("checkout");
const error = document.getElementById("error");

// Disable past dates
const today = new Date().toISOString().split("T")[0];
checkin.min = today;
checkout.min = today;

// Update checkout minimum date
checkin.addEventListener("change", () => {
    checkout.min = checkin.value;
});

// Form validation
form.addEventListener("submit", function (e) {
    e.preventDefault();

    if (checkout.value <= checkin.value) {
        error.textContent = "Check-out date must be after check-in date.";
        return;
    }

    error.textContent = "";
    alert("Hotel booked successfully!");
    form.reset();
});
