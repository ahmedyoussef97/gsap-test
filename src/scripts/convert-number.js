var a = 0;
$(window).scroll(function () {
    var oTop = $("#card-number").offset().top - window.innerHeight;
    if (a == 0 && $(window).scrollTop() > oTop) {
        $(".card-number__count").each(function () {
            var formatter = Intl.NumberFormat('en', { notation: 'compact' });
            var $this = $(this),
                countTo = $this.attr("data-number");
            $({
                countNum: $this.text()
            }).animate(
                {
                    countNum: countTo
                },

                {
                    duration: 850,
                    easing: "swing",
                    step: function () {
                        //$this.text(Math.ceil(this.countNum));
                        $this.text(
                            Math.ceil(this.countNum).toLocaleString("en")
                        );
                    },
                    complete: function () {
                        $this.text(
                            // Math.ceil(this.countNum).toLocaleString("en")
                            formatter.format(this.countNum)
                        );
                        //alert('finished');
                    }
                }
            );
        });
        a = 1;
    }
});


