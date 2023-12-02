$(document).ready(function() {
    // Array user reviews
    var reviews = [];

    // display reviews
    function displayReviews() {
        $('#reviewsList').empty();
        for (var i = 0; i < reviews.length; i++) {
            var review = reviews[i];
            var listItem = $('<li>').addClass('list-group-item').text(review.name + ': ' + review.review);
            $('#reviewsList').append(listItem);
        }
    }

    // add newreview
    function addReview(name, review) {
        var newReview = {
            name: name,
            review: review
        };
        reviews.push(newReview);
        displayReviews();
    }

    // Submit event
    $('#addReviewForm').submit(function(e) {
        e.preventDefault();
        var name = $('#name').val();
        var review = $('#review').val();
        addReview(name, review);
        $('#name').val('');
        $('#review').val('');
    });
});
