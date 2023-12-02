$(document).ready(function() {
    // Array to store user reviews
    var reviews = [];

    // Function to display reviews
    function displayReviews() {
        $('#reviewsList').empty();
        for (var i = 0; i < reviews.length; i++) {
            var review = reviews[i];
            var listItem = $('<li>').addClass('list-group-item').text(review.name + ': ' + review.review);
            $('#reviewsList').append(listItem);
        }
    }

    // Function to add a new review
    function addReview(name, review) {
        var newReview = {
            name: name,
            review: review
        };
        reviews.push(newReview);
        displayReviews();
    }

    // Submit event for adding a review
    $('#addReviewForm').submit(function(e) {
        e.preventDefault();
        var name = $('#name').val();
        var review = $('#review').val();
        addReview(name, review);
        $('#name').val('');
        $('#review').val('');
    });
});