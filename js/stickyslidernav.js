$(function () {
    $('.timeline-nav').slick({
        slidesToShow: 12,
        slidesToScroll: 1,
        asNavFor: '.timeline-slider',
        centerMode: false,
        focusOnSelect: true,
        mobileFirst: true,
        arrows: false,
        infinite: false,
        responsive: [
        {
        breakpoint: 768,
        settings: {
            slidesToShow: 8 } },
    
    
        {
        breakpoint: 0,
        settings: {
            slidesToShow: 4,
            slidesToScroll: 2 } }] });

    $('.timeline-slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        asNavFor: '.timeline-nav',
        centerMode: true,
        cssEase: 'ease',
        edgeFriction: 0.5,
        mobileFirst: true,
        speed: 500,
        responsive: [
        {
        breakpoint: 0,
        settings: {
            centerMode: false } },
    
    
        {
        breakpoint: 768,
        settings: {
            centerMode: true } }] 
    });            
});

var typed = new Typed('.typing',{
    strings: ["An Engineer", "A Robotics Enthusiast", "A Researcher", "A Blogger", "A Budding Astrologer"],
    loop: true,
    typeSpeed: 80,
    backSpeed: 40
});


class StickyNavigation {

    constructor() {
        this.currentId = null;
        this.currentTab = null;
        this.tabContainerHeight = 70;
        let self = this;
        $('.et-hero-tab').click(function() {
            self.onTabClick(event, $(this));
        });
        $(window).scroll(() => { this.onScroll(); });
        $(window).resize(() => { this.onResize(); });
    }

    onTabClick(event, element) {
        event.preventDefault();
        let scrollTop = $(element.attr('href')).offset().top - this.tabContainerHeight + 1;
        $('html, body').animate({ scrollTop: scrollTop }, 600);
    }

    onScroll() {
        this.checkTabContainerPosition();
        this.findCurrentTabSelector();
    }

    onResize() {
        if (this.currentId) {
            this.setSliderCss();
        }
    }

    checkTabContainerPosition() {
        let offset = $('.et-hero-tabs').offset().top + $('.et-hero-tabs').height() - this.tabContainerHeight;
        
        if($(window).scrollTop() > offset) {
            $('.et-hero-tabs-container').addClass('et-hero-tabs-container--top');
        }
        else {
            $('.et-hero-tabs-container').removeClass('et-hero-tabs-container--top');
        }
    }

    findCurrentTabSelector(element) {
        let newCurrentId;
        let newCurrentTab;
        let self = this;
        $('.et-hero-tab').each(function() {
            let id = $(this).attr('href');
            let offsetTop = $(id).offset().top - self.tabContainerHeight;
            let offsetBottom = $(id).offset().top + $(id).height() - self.tabContainerHeight;
            if ($(window).scrollTop() > offsetTop && $(window).scrollTop() < offsetBottom) {
                newCurrentId = id;
                newCurrentTab = $(this);
            }
        });

        if (this.currentId != newCurrentId || this.currentId === null) {
            this.currentId = newCurrentId;
            this.currentTab = newCurrentTab;
            this.setSliderCss();
        }
    }

    setSliderCss() {
        let width = 0;
        let left = 0;
        if (this.currentTab) {
            width = this.currentTab.css('width');
            left = this.currentTab.offset().left;
        }
        $('.et-hero-tab-slider').css('width', width);
        $('.et-hero-tab-slider').css('left', left);
    }
}

new StickyNavigation();