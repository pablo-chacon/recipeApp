$(document).ready(function() {
    $('#batchSize').on('input', function() {
        let batchSize = $(this).val();
        let roastedNutsAmount = 100 * batchSize;
        let butterAmount = 250 * batchSize;
        let cacaoAmount = 2 * batchSize;
        let sugarAmount = 4.5 * batchSize;
        let eggAmount = 4 * batchSize;
        let saltAmount = 2 * batchSize;
        let vanillaPowderAmount = 2 * batchSize;
        let flourAmount = 3 * batchSize;
        let bakingSodaAmount = 0.5 * batchSize;

        $('#roastedNutsAmount').text(roastedNutsAmount);
        $('#butterAmount').text(butterAmount);
        $('#cacaoAmount').text(cacaoAmount);
        $('#sugarAmount').text(sugarAmount);
        $('#eggAmount').text(eggAmount);
        $('#saltAmount').text(saltAmount);
        $('#vanillaPowderAmount').text(vanillaPowderAmount);
        $('#flourAmount').text(flourAmount);
        $('#bakingSodaAmount').text(bakingSodaAmount);
    });
});