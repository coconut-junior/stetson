var darkMode = false;

toggle = document.createElement('dark-toggle');
toggle_outer = document.createElement('toggle-outer');

toggle.style.height = '40px';
toggle.style.width = '75px';
toggle.style.display = 'flex';
toggle.style.flexDirection = 'row-reverse';
toggle.style.overflow = 'hidden';
toggle.style.borderRadius = '100px';
toggle.style.backgroundColor = '#0E1116';
toggle.style.cursor = 'pointer';
toggle.style.backgroundImage = "url('images/toggle.svg')";
toggle.style.backgroundPosition = 'center';
toggle.style.backgroundSize = 'contain';
toggle.style.backgroundRepeat = 'no-repeat';
toggle.style.filter = 'invert()';
toggle.style.marginLeft = '40px';

toggle_outer.style.height = '25px';
toggle_outer.style.width = '25px';
toggle_outer.style.borderRadius = '50%';
toggle_outer.style.backgroundColor = '#0E1116';
toggle_outer.style.position = 'relative';
toggle_outer.style.right = '8px';
toggle_outer.style.top = '8px';
toggle_outer.style.cursor = 'pointer';
toggle_outer.style.backgroundSize = 'contain';
toggle_outer.style.pointerEvents = 'none';
toggle_outer.style.transition = '0.3s';
toggle_outer.style.filter = 'invert()';

function disableDark() {
    document.head.removeChild(darkStyle);
    document.body.style.cssText = 'transition:0.3s;';
    toggle_outer.style.right = '42px';
    toggle_outer.style.backgroundColor = 'white';
    toggle.style.filter = 'none';
    toggle_outer.style.filter = 'none';
    darkMode = true;
}

function enableDark() {
    document.head.appendChild(darkStyle);
    document.body.style.cssText = 'transition:0.3s;';
    toggle_outer.style.right = '8px';
    toggle_outer.style.backgroundColor = '#0E1116';
    toggle.style.filter = 'invert()';
    toggle_outer.style.filter = 'invert()';
    darkMode = false;
}

var tl = gsap.timeline();
toggle.addEventListener('click', function() {
    if (darkMode == true) {
        enableDark();
    }
    else {
        disableDark();
    }
    
    tl.to('toggle-outer', {width:'35px',borderRadius:"15px",duration:0.2,ease: "expo.out"})
    .to('toggle-outer',{width:'25px',borderRadius:"50%",duration:0.2,ease: "expo.out"});
});

document.querySelector('.toggle-container').appendChild(toggle);
toggle.appendChild(toggle_outer);

var darkStyle = document.createElement('style');
  darkStyle.innerHTML = `
    :root {
        --primary : #1D1D2A;
        --secondary: #242636;
        --tertiary: #9899A2;
        --page-color: #2F3142;
    }
    ::selection {
        background-color: #F1EEE9;
        color: #2F3142;
    }
    body {
        background-color: #1D1D2A;
        color: #9899A2;
    }

    h1,h2 {
        color: var(--tertiary);
    }

    .size-chart {
        color: white;
    }

    .info-block {
        color: white;
        background-color: #242636;
    }

    .diagram {
        background-image: url('images/folding-diagram-dark.svg');
    }

    #fade {
        background-color: #2F3142;
    }

    #menu {
        fill: #2F3142;
    }

    #dots {
        filter:invert();
    }

    .clouds {
        display: none;
    }

    .hero {
        background-image: url('images/hero-dark.svg');
    }

    .logo {
        background-image: url('images/logo-dark.svg');
    }

    .logo-small {
        background-image: url('images/logo-small-dark.svg');
    }
    
    `;
  document.head.appendChild(darkStyle);
  disableDark();