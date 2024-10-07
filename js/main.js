/***************************************************
==================== JS INDEX ======================
****************************************************
01. PreLoader Js


****************************************************/


(function ($) {
	"use strict";

	////////////////////////////////////////////////////
	// 01. Header Sticky
	window.addEventListener("scroll", function(){
        var header = document.querySelector(".header__bottom"); 
        header.classList.toggle("sticky", window.scrollY > 0); 
    }); 

	////////////////////////////////////////////////////
	// 02. Mobile Menu Js
	$('#mobile-menu').meanmenu({
		meanMenuContainer: '.mobile-menu',
		meanScreenWidth: "991",
		meanExpand: ['<i class="fal fa-plus"></i>'],
	});


	////////////////////////////////////////////////////
	// 03. Sidebar Js
	$(".tp-menu-toggle").on("click", function () {
		$(".tp-sidebar-menu").addClass("sidebar-opened");
		$(".body-overlay").addClass("opened");
	});
	$(".close-sidebar").on("click", function () {
		$(".tp-sidebar-menu").removeClass("sidebar-opened");
		$(".body-overlay").removeClass("opened");
	});


	////////////////////////////////////////////////////
	// 04. Body overlay Js
	$(".body-overlay").on("click", function () {
		$(".tp-sidebar-menu").removeClass("sidebar-opened");
		$(".body-overlay").removeClass("opened");
	});

	////////////////////////////////////////////////////
	// 07. Data CSS Js
	$("[data-background]").each(function () {
		$(this).css("background-image", "url( " + $(this).attr("data-background") + "  )");
	});
	
	$("[data-width]").each(function () {
		$(this).css("width", $(this).attr("data-width"));
	});

	$("[data-bg-color]").each(function () {
        $(this).css("background-color", $(this).attr("data-bg-color"));
    });

	// 05. searchbar-form
	$(".header-search-icon").on("click", function () {
		$(".searchbar-form").slideToggle(300);
	});

	// 05. view all services
	$(".view-service-all").on("click", function () {
		$(".service-viewd").fadeIn(300);
		$(".view-service-all").hide();
	});


	// 05. trusted client slide
	$('.trusted-client-slide').slick({
		slidesToShow: 5,
		slidesToScroll: 1,
		autoplay: true,
		arrows: false,
		autoplaySpeed: 2000,
		responsive: [
			{
			  breakpoint: 1000,
			  settings: {
				slidesToShow: 4,
			  }
			},
			{
			  breakpoint: 990,
			  settings: {
				slidesToShow: 3,
			  }
			},
		  ]
	  });


	// 05. Testimonial slide
	$('.testimonial-slide').slick({
		slidesToShow: 3,
		slidesToScroll: 1,
		autoplay: true,
		arrows: false,
		autoplaySpeed: 2000,
		responsive: [
			{
			  breakpoint: 1000,
			  settings: {
				slidesToShow: 2,
			  }
			},
			{
			  breakpoint: 768,
			  settings: {
				slidesToShow: 1,
			  }
			},
		]
	});

	


	// Counter 

	function startCounters(counter) {
		const target = +counter.getAttribute('data-target'); // Get the target value from data-target attribute
		let currentValue = 0;
		const increment = target / 100; // Control the speed by dividing the target into smaller increments

		function updateCounter() {
			if (currentValue < target) {
				currentValue += increment;
				if (currentValue > target) {
					currentValue = target; // Prevent overshooting the target value
				}
				counter.innerText = Math.ceil(currentValue); // Update counter text
				setTimeout(updateCounter, 50); // Adjust speed by changing timeout duration
			}
		}

		updateCounter(); // Start the counter animation
	}

	// Initialize counters when they become visible
	function initCounterOnScroll() {
		const counters = document.querySelectorAll('.counter-value');
		const observer = new IntersectionObserver((entries) => {
			entries.forEach(entry => {
				if (entry.isIntersecting) {
					const counter = entry.target;
					startCounters(counter);
					observer.unobserve(counter); // Stop observing once the counter starts
				}
			});
		}, { threshold: 0.5 }); // Trigger when 50% of the element is visible

		counters.forEach(counter => {
			observer.observe(counter); // Start observing each counter
		});
	}

	// Initialize the Intersection Observer when the page is loaded
	window.onload = initCounterOnScroll;



	

})(jQuery);


/////FaQ section Javascript start
function toggleFAQ(element) {
	const answer = element.nextElementSibling;
	const toggleIcon = element.querySelector('.faq-toggle');

	// Toggle the display of the answer
	if (answer.style.display === "block") {
		answer.style.display = "none";
		toggleIcon.innerHTML = '<i class="fa-solid fa-plus"></i>'; // Use innerHTML to set the icon
	} else {
		answer.style.display = "block";
		toggleIcon.innerHTML = '<i class="fa-solid fa-minus"></i>'; // Use innerHTML to set the icon
	}
}

/// Active navbar color change start
// const menuItems = document.querySelectorAll('.menu-item');

// menuItems.forEach(item => {
//     item.addEventListener('click', function() {
//         // Remove 'page-active' class from all items
//         menuItems.forEach(link => link.classList.remove('page-active'));
        
//         // Add 'page-active' class to the clicked item
//         this.classList.add('page-active');
//     });
// });



