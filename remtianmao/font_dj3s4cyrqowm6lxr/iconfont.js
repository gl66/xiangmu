;(function(window) {

  var svgSprite = '<svg>' +
    '' +
    '<symbol id="icon-icon" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M164.380326 734.540446c-30.865985 0-58.479903 25.990954-58.479903 56.854892 0 30.861892 27.613918 58.480926 58.479903 58.480926 30.860868 0 56.854892-27.619034 56.854892-58.480926C221.234195 760.5314 195.241194 734.540446 164.380326 734.540446L164.380326 734.540446zM164.380326 455.146131c-30.865985 0-58.479903 25.987884-58.479903 56.853869 0 30.860868 27.613918 56.852846 58.479903 56.852846 30.860868 0 56.854892-25.990954 56.854892-56.852846C221.234195 481.132992 195.241194 455.146131 164.380326 455.146131L164.380326 455.146131zM372.298749 284.5835 864.492658 284.5835c29.239951 0 53.606919-22.745027 53.606919-51.979862 0-29.239951-24.366967-53.606919-53.606919-53.606919L372.298749 178.99672c-29.234835 0-53.600779 24.366967-53.600779 53.606919C318.697971 261.838474 343.063915 284.5835 372.298749 284.5835L372.298749 284.5835zM164.380326 174.122713c-30.865985 0-58.479903 27.613918-58.479903 58.479903 0 30.860868 27.613918 56.854892 58.479903 56.854892 30.860868 0 56.854892-25.993001 56.854892-56.854892C221.234195 201.737654 195.241194 174.122713 164.380326 174.122713L164.380326 174.122713zM864.492658 458.392058 372.298749 458.392058c-29.234835 0-53.600779 24.366967-53.600779 53.606919s24.365944 53.607942 53.600779 53.607942L864.492658 565.606919c29.239951 0 53.606919-24.367991 53.606919-53.607942S893.732609 458.392058 864.492658 458.392058L864.492658 458.392058zM864.492658 737.789443 372.298749 737.789443c-29.234835 0-53.600779 24.365944-53.600779 53.605895 0 29.238928 24.365944 53.605895 53.600779 53.605895L864.492658 845.001233c29.239951 0 53.606919-24.366967 53.606919-53.605895C918.098553 762.154363 893.732609 737.789443 864.492658 737.789443L864.492658 737.789443zM864.492658 737.789443"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-sousuo_sousuo" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M1010.255 935.96l-0.028-0.028v0.029h0.028c9.13 10.666 13.71 22.47 13.71 35.412 0 14.478-5.148 26.85-15.445 37.147a50.686 50.686 0 0 1-37.175 15.445 55.596 55.596 0 0 1-17.72-2.873 47.216 47.216 0 0 1-15.445-8.533l-5.718-4.58-282.529-284.548c-67.837 48.013-143.725 71.99-227.604 71.99-8.391 0-16.953-0.37-25.713-1.109a277.608 277.608 0 0 1-25.742-3.441 368.059 368.059 0 0 1-162.44-59.447c-53.36-34.274-96.054-79.585-128.081-135.988a370.903 370.903 0 0 1-36.038-83.425 408.391 408.391 0 0 1-16.014-90.28 387.173 387.173 0 0 1 5.149-91.417 377.331 377.331 0 0 1 50.344-137.723 380.375 380.375 0 0 1 98.358-109.138c33.563-26.68 71.109-47.244 112.665-61.722A384.926 384.926 0 0 1 422.329 0c18.317 0 35.838 1.138 52.649 3.442 44.969 6.087 88.032 19.796 129.218 41.129a381.484 381.484 0 0 1 107.545 82.287c35.81 37.346 63.06 81.519 81.747 132.575 18.687 51.056 26.907 102.852 24.603 155.415-3.043 87.634-33.165 166.48-90.365 236.564l283.639 284.549h-1.11z m-251.64-522.25a320.558 320.558 0 0 0-22.868-137.126 323.573 323.573 0 0 0-40.048-75.432c-16.782-23.608-36.408-44.741-58.878-63.429a338.477 338.477 0 0 0-72.616-46.306A332.277 332.277 0 0 0 385.779 62.86a52.62 52.62 0 0 0-10.297 1.138l-6.883 1.138a324.568 324.568 0 0 0-135.533 54.27 323.26 323.26 0 0 0-98.927 106.862c-28.187 46.448-43.632 98.272-46.334 155.415-2.674 57.143 7.794 110.105 31.458 158.857a319.99 319.99 0 0 0 86.326 114.286 330.57 330.57 0 0 0 126.375 67.44c48.809 13.709 97.988 16.383 147.536 7.992a332.618 332.618 0 0 0 75.517-22.84 345.816 345.816 0 0 0 68.037-39.423 346.356 346.356 0 0 0 57.2-53.73c17.152-20.195 31.459-42.096 42.893-65.704v0.028a328.152 328.152 0 0 0 35.469-134.879z" fill="" ></path>' +
    '' +
    '</symbol>' +
    '' +
    '</svg>'
  var script = function() {
    var scripts = document.getElementsByTagName('script')
    return scripts[scripts.length - 1]
  }()
  var shouldInjectCss = script.getAttribute("data-injectcss")

  /**
   * document ready
   */
  var ready = function(fn) {
    if (document.addEventListener) {
      if (~["complete", "loaded", "interactive"].indexOf(document.readyState)) {
        setTimeout(fn, 0)
      } else {
        var loadFn = function() {
          document.removeEventListener("DOMContentLoaded", loadFn, false)
          fn()
        }
        document.addEventListener("DOMContentLoaded", loadFn, false)
      }
    } else if (document.attachEvent) {
      IEContentLoaded(window, fn)
    }

    function IEContentLoaded(w, fn) {
      var d = w.document,
        done = false,
        // only fire once
        init = function() {
          if (!done) {
            done = true
            fn()
          }
        }
        // polling for no errors
      var polling = function() {
        try {
          // throws errors until after ondocumentready
          d.documentElement.doScroll('left')
        } catch (e) {
          setTimeout(polling, 50)
          return
        }
        // no errors, fire

        init()
      };

      polling()
        // trying to always fire before onload
      d.onreadystatechange = function() {
        if (d.readyState == 'complete') {
          d.onreadystatechange = null
          init()
        }
      }
    }
  }

  /**
   * Insert el before target
   *
   * @param {Element} el
   * @param {Element} target
   */

  var before = function(el, target) {
    target.parentNode.insertBefore(el, target)
  }

  /**
   * Prepend el to target
   *
   * @param {Element} el
   * @param {Element} target
   */

  var prepend = function(el, target) {
    if (target.firstChild) {
      before(el, target.firstChild)
    } else {
      target.appendChild(el)
    }
  }

  function appendSvg() {
    var div, svg

    div = document.createElement('div')
    div.innerHTML = svgSprite
    svgSprite = null
    svg = div.getElementsByTagName('svg')[0]
    if (svg) {
      svg.setAttribute('aria-hidden', 'true')
      svg.style.position = 'absolute'
      svg.style.width = 0
      svg.style.height = 0
      svg.style.overflow = 'hidden'
      prepend(svg, document.body)
    }
  }

  if (shouldInjectCss && !window.__iconfont__svg__cssinject__) {
    window.__iconfont__svg__cssinject__ = true
    try {
      document.write("<style>.svgfont {display: inline-block;width: 1em;height: 1em;fill: currentColor;vertical-align: -0.1em;font-size:16px;}</style>");
    } catch (e) {
      console && console.log(e)
    }
  }

  ready(appendSvg)


})(window)