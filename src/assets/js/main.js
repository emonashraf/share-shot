(function ($) {
  'use strict';

  //============================ Scroll To Top Js Start ========================
  var btn = $('.scroll-top');

  $(window).on('scroll', function () {
    if ($(window).scrollTop() > 300) {
      btn.addClass('show');
    } else {
      btn.removeClass('show');
    }
  });

  btn.on('click', function (e) {
    e.preventDefault();
    $('html, body').animate({
      scrollTop: 0
    }, '300');
  });
  //============================ Scroll To Top Js End ========================

  //============================ faq js stat ========================

  $(document).ready(function () {
    $('.faq__item.open').find('.faq__body').show();

    $('.faq__item .faq__title, .faq__item .faq__number').on('click', function () {
      const $item = $(this).closest('.faq__item');
      const $body = $item.find('.faq__body');
      const $allItems = $('.faq__item');

      if ($item.hasClass('open')) {
        $body.stop(true).slideUp(300);
        $item.removeClass('open');
        return;
      }

      $allItems.each(function () {
        const $openItem = $(this);
        if ($openItem.hasClass('open')) {
          $openItem.find('.faq__body').stop(true).slideUp(300);
          $openItem.removeClass('open');
        }
      });

      $item.addClass('open');
      $body.stop(true).slideDown(300);
    });
  });
  //============================ faq js end ========================
  // ========================= Service Section Hover Js Start ===============
  $('.use-case__list-item').hover(function () {
    var serviceId = $(this).attr('data-use-case-id');
    $(this).addClass('active').siblings().removeClass('active');
    $('#' + serviceId).removeClass('d-none').siblings().addClass('d-none');
    $('#' + serviceId).addClass('show').siblings().removeClass('show');
  });
  // ========================= Service Section Hover Js End ===================
  // ========================= Swiper Js Start ===================
  const testimonialSwiper = new Swiper('.testimonial__slider', {
    loop: true,
    slidesPerView: 1,
    spaceBetween: 10,
    autoplay: {
      delay: 2000,
      disableOnInteraction: false,
    },
    navigation: {
      nextEl: ".custom-next",
      prevEl: ".custom-prev",
    },
    breakpoints: {
      640: {
        slidesPerView: 1.2,
        spaceBetween: 20,
      },
      768: {
        slidesPerView: 1.3,
        spaceBetween: 20,
      },
      1024: {
        slidesPerView: 3,
        spaceBetween: 24,
      },
    },
  });

  // ========================= Brand Js End ===================
  // ========================= Header Sticky Js Start ==============
  $(window).on('scroll', function () {
    if ($(window).scrollTop() >= 300) {
      $('.header__area').addClass('fixed-header');
    } else {
      $('.header__area').removeClass('fixed-header');
    }
  });
  // ========================= Header Sticky Js End===================

  //============================ Filter Js Start ============================
  $(document).on('click', '.filter__btn', function () {
    $('.filter__main, .overlay').addClass('active');
  });

  $(document).on('click', '.filter__close, .overlay', function () {
    $('.filter__main, .overlay').removeClass('active');
  });

  //============================ Filter Js End ==============================

  // ========================= Range Slider Js Start ===================
  const rangeInput = document.querySelectorAll(".range-input input");
  const priceInput = document.querySelectorAll(".price-input span");
  const progress = document.querySelector(".sliderr .progresss");
  let priceGap = 1000;

  rangeInput.forEach(input => {
    input.addEventListener("input", e => {
      let minValue = parseInt(rangeInput[0].value);
      let maxValue = parseInt(rangeInput[1].value);

      if (maxValue - minValue < priceGap) {
        if (e.target.classList.contains("range-min")) {
          rangeInput[0].value = maxValue - priceGap;
        } else {
          rangeInput[1].value = minValue + priceGap;
        }
      } else {
        priceInput[0].textContent = minValue;
        priceInput[1].textContent = maxValue;
        const maxRange = parseInt(rangeInput[0].max);
        progress.style.left = (minValue / maxRange) * 100 + "%";
        progress.style.right = 100 - (maxValue / maxRange) * 100 + "%";
      }
    });
  });

  // ========================= Range Slider Js End ===================


  //============================ Offcanvas Js Start ============================
  $(document).on('click', '.menu__open', function () {
    $('.offcanvas__area, .overlay').addClass('active');
  });

  $(document).on('click', '.menu__close, .overlay', function () {
    $('.offcanvas__area, .overlay').removeClass('active');
  });

  //============================ Offcanvas Js End ==============================


  // ========================== Add Attribute For Bg Image Js Start =====================
  $('.bg-img').css('background-image', function () {
    var bg = 'url(' + $(this).data('background-image') + ')';
    return bg;
  });
  // ========================== Add Attribute For Bg Image Js End =====================
  // ========================== Add Attribute For Mask Image Js Start =====================
  $(".mask-box").css("mask-image", function () {
    var bg = "url(" + $(this).data("mask") + ")";
    return bg;
  });
  // ========================== Add Attribute For Mask Image Js End =====================


  // ========================= Odometer Js Start ===================
  if ($('.odometer').length > 0) {
    $(window).on('scroll', function () {
      $('.odometer').each(function () {
        if ($(this).isInViewport()) {
          if (!$(this).data('odometer-started')) {
            $(this).data('odometer-started', true);
            this.innerHTML = $(this).data('odometer-final');
          }
        }
      });
    });
  }
  // isInViewport helper function
  $.fn.isInViewport = function () {
    let elementTop = $(this).offset().top;
    let elementBottom = elementTop + $(this).outerHeight();
    let viewportTop = $(window).scrollTop();
    let viewportBottom = viewportTop + $(window).height();
    return elementBottom > viewportTop && elementTop < viewportBottom;
  };
  // ========================= Odometer Js End ===================

  // ========================= Magnific Popup Js Start ===================
  $('.popup-video').magnificPopup({
    type: 'iframe',
  });
  // ========================= Magnific Popup Js End ===================

  // ========================= Select2 Js Start =====================
  if ($('.select2').length) {
    $('.select2').select2({
      width: '100%'
    });
  }

  // ========================= Select2 Js End =====================


  // ================== Password Show Hide Js Start ==========
  $(".toggle-password").on("click", function () {
    $(this).toggleClass("fa-eye  fa-eye-slash");
    var input = $($(this).attr("id"));
    if (input.attr("type") == "password") {
      input.attr("type", "text");
    } else {
      input.attr("type", "password");
    }
  });
  // =============== Password Show Hide Js End =================

  //============================ Sidebar Js Start ============================
  $(document).on('click', '.sidebar__open', function () {
    $('.dashboard__sidebar, .overlay').addClass('active');
  });

  $(document).on('click', '.sidebar__close, .overlay', function () {
    $('.dashboard__sidebar, .overlay').removeClass('active');
  });

  //============================ Sidebar Js End ==============================

  $(window).on("scroll", function () {
    const windowHeight = $(window).height();
    const scrollTop = $(window).scrollTop();

    $(".ss-demo").each(function () {
      const $section = $(this);
      const elementTop = $section.offset().top;
      const elementHeight = $section.outerHeight();

      // Section comes into view
      if (
        scrollTop + windowHeight > elementTop + elementHeight * 0.3 &&
        scrollTop < elementTop + elementHeight * 0.9
      ) {
        $section.addClass("active");
      } else {
        $section.removeClass("active");
      }
    });
  });
  

// File change → show preview in upload-file-view
$('#fileInput').on('change', function () {
    let file = this.files[0];
    showPreview(file);
});

function showPreview(file) {
    let previewBox = $('.upload-file-view .upload-file__item');
    previewBox.html(''); // remove old preview

    if (!file) return;

    let reader = new FileReader();
    reader.onload = function (e) {

        // If image file
        if (file.type.startsWith('image/')) {
            previewBox.html(`<img src="${e.target.result}" alt="preview">`);
        }

        // If video file (optional)
        else if (file.type.startsWith('video/')) {
            previewBox.html(`<video src="${e.target.result}" controls></video>`);
        }
    };
    reader.readAsDataURL(file);
}


  // ========================= Scroll Reveal Js Start ===================
  const sr = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 1200,
    delay: 100,
    reset: false,
  })
  sr.reveal('.bottom-reveal, .section-heading__title', {
    delay: 60,
    interval: 100,
    origin: 'bottom',
  })
  sr.reveal('.banner__desc, .banner__btns .btn, .banner__info-item, .section-heading__desc, .features__card, .blog__card', {
    delay: 100,
    interval: 200,
    origin: 'bottom',
  })
  sr.reveal('.right-reveal, .promo-video__desc', {
    delay: 60,
    origin: 'right',
    interval: 200,
  })
  sr.reveal('.left-reveal, .promo-video__title', {
    delay: 60,
    interval: 200,
    origin: 'left',
  })
  sr.reveal('.banner__title, .banner__subtitle, .section-heading__name, .work-process__card', {
    delay: 60,
    origin: 'top',
    interval: 150,
  })
  // ========================= Scroll Reveal Js End ===================
// ========================= Custom Dropzone Start =====================
    function updatePreview(input, file) {
      var $dropzone = $(input).closest('.custom-dropzone');
      var $preview = $dropzone.find('.dropzone-filed__preview');
      var $closeBtn = $dropzone.find('.dropzone-filed__close');

      $preview.html('').removeClass('active');
      $closeBtn.hide();

      if (file) {
        var reader = new FileReader();
        reader.onload = function (e) {
          var content;
          if (file.type.startsWith('image/')) {
            var img = document.createElement('img');
            img.src = e.target.result;
            content = img;
          } else if (file.type.startsWith('video/')) {
            var video = document.createElement('video');
            video.src = e.target.result;
            video.controls = true;
            content = video;
          }

          $preview.html(content).addClass('active');
          $closeBtn.show();
        };
        reader.readAsDataURL(file);
      }
    }
    $('.custom-dropzone input[type="file"]').on('change', function () {
      updatePreview(this, this.files[0]);
    });
    $('.custom-dropzone').on('click', '.dropzone-filed__close', function () {
      var $dropzone = $(this).closest('.custom-dropzone');
      $dropzone.find('.dropzone-filed__preview').html('').removeClass('active');
      $dropzone.find('input[type="file"]').val('');
      $dropzone.find('input[type="file"].required').prop('required', true);
      $(this).hide();
    });
    $('.dropzone-filed__preview').each(function () {
      if (!$(this).hasClass('active')) {
        $(this).closest('.custom-dropzone').find('.dropzone-filed__close').hide();
      }
    });
    $('.dropzone-filed').on('dragover dragleave drop', function (e) {
      e.preventDefault();
      e.stopPropagation();

      var $dropzone = $(this).closest('.custom-dropzone');
      var $fileInput = $dropzone.find('input[type="file"]');

      if (e.type === 'dragover') {
        $(this).addClass('dragging');
      } else if (e.type === 'dragleave' || e.type === 'drop') {
        $(this).removeClass('dragging');
      }

      if (e.type === 'drop') {
        var files = Array.from(e.originalEvent.dataTransfer.files);
        var accept = $fileInput.attr('accept');
        var acceptedTypes = accept ? accept.split(',').map(type => type.trim()) : [];

        var invalidFiles = files.filter(file => {
          var fileType = file.type;
          var fileName = file.name.toLowerCase();
          return !acceptedTypes.some(type => {
            return (type.startsWith('.') && fileName.endsWith(type)) || fileType === type;
          });
        });

        if (invalidFiles.length > 0) {
          alert('Some files are not allowed. Please check the accepted file types.');
          return;
        }

        if (!$fileInput.prop('multiple') && files.length > 1) {
          alert('This input only allows one file.');
          return;
        }

        var dt = new DataTransfer();
        files.forEach(function (file) {
          dt.items.add(file);
        });
        $fileInput[0].files = dt.files;
        $fileInput.trigger('change');
      }
    });
    $('.custom-dropzone input').each(function () {
      if ($(this).prop('required')) {
        $(this).addClass('required');
      }
      if ($(this).closest('.custom-dropzone').find('.dropzone-filed__preview').hasClass('active')) {
        $(this).prop('required', false);
      }
    });
    // ========================= Custom Dropzone End ==========
  // ========================== Table Data Label Js Start =====================
  if ($('th').length) {
    Array.from(document.querySelectorAll('table')).forEach(table => {
      let heading = table.querySelector('thead') ? table.querySelectorAll('thead tr th') : null;
      Array.from(table.querySelectorAll('tbody tr')).forEach((row) => {
        Array.from(row.querySelectorAll('td')).forEach((column, i) => {
          if (heading && heading[i]) {
            column.setAttribute('data-label', heading[i].innerText);
          }
        });
      });
    });
  }
  // ========================== Table Data Label Js End =====================


  // ========================== Label Required Js Start =====================
  $.each($('input, select, textarea'), function (i, element) {
    if (element.hasAttribute('required')) {
      $(element).closest('.form-group').find('label').first().addClass('required');
    }
  });
  // ========================== Label Required Js End =====================

  // ========================= Preloader Js Start =====================
  $(window).on("load", function () {
    $(".preloader").fadeOut();
  })
  // ========================= Preloader Js End=====================

})(jQuery);
