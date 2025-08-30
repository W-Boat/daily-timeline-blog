// Timeline Theme JavaScript

(function() {
    'use strict';
    
    // DOM ready
    document.addEventListener('DOMContentLoaded', function() {
        initAnimations();
        initScrollEffects();
        initPerformanceOptimizations();
    });
    
    // Initialize animations
    function initAnimations() {
        // Animate timeline items on scroll
        const timelineItems = document.querySelectorAll('.timeline-item');
        
        if ('IntersectionObserver' in window) {
            const observer = new IntersectionObserver(function(entries) {
                entries.forEach(function(entry) {
                    if (entry.isIntersecting) {
                        entry.target.style.animationDelay = entry.target.dataset.delay || '0ms';
                        entry.target.classList.add('animate-in');
                        observer.unobserve(entry.target);
                    }
                });
            }, {
                threshold: 0.1,
                rootMargin: '50px'
            });
            
            timelineItems.forEach(function(item, index) {
                item.dataset.delay = (index * 100) + 'ms';
                observer.observe(item);
            });
        } else {
            // Fallback for browsers without IntersectionObserver
            timelineItems.forEach(function(item) {
                item.classList.add('animate-in');
            });
        }
    }
    
    // Initialize scroll effects
    function initScrollEffects() {
        let ticking = false;
        
        function updateScrollEffects() {
            const scrolled = window.pageYOffset;
            const rate = scrolled * -0.5;
            
            // Parallax effect for timeline line
            const timelineLine = document.querySelector('.timeline-line');
            if (timelineLine) {
                timelineLine.style.transform = 'translate3d(0, ' + rate + 'px, 0)';
            }
            
            ticking = false;
        }
        
        function requestScrollUpdate() {
            if (!ticking) {
                requestAnimationFrame(updateScrollEffects);
                ticking = true;
            }
        }
        
        // Throttled scroll listener
        window.addEventListener('scroll', requestScrollUpdate, { passive: true });
    }
    
    // Initialize performance optimizations
    function initPerformanceOptimizations() {
        // Lazy load images
        if ('IntersectionObserver' in window) {
            const imageObserver = new IntersectionObserver(function(entries) {
                entries.forEach(function(entry) {
                    if (entry.isIntersecting) {
                        const img = entry.target;
                        img.src = img.dataset.src;
                        img.classList.remove('lazy');
                        imageObserver.unobserve(img);
                    }
                });
            });
            
            document.querySelectorAll('img[data-src]').forEach(function(img) {
                imageObserver.observe(img);
            });
        }
        
        // Preload critical resources
        const preloadResources = [
            '/css/style.css',
            '/js/main.js'
        ];
        
        preloadResources.forEach(function(resource) {
            const link = document.createElement('link');
            link.rel = 'preload';
            link.href = resource;
            link.as = resource.endsWith('.css') ? 'style' : 'script';
            document.head.appendChild(link);
        });
        
        // Smooth scroll for internal links
        document.querySelectorAll('a[href^="#"]').forEach(function(anchor) {
            anchor.addEventListener('click', function(e) {
                e.preventDefault();
                const target = document.querySelector(this.getAttribute('href'));
                if (target) {
                    target.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            });
        });
    }
    
    // Add CSS for animations
    const style = document.createElement('style');
    style.textContent = `
        .timeline-item {
            opacity: 0;
            transform: translateY(30px);
            transition: all 0.6s cubic-bezier(0.4, 0, 0.2, 1);
        }
        
        .timeline-item.animate-in {
            opacity: 1;
            transform: translateY(0);
        }
        
        .timeline-line {
            will-change: transform;
        }
        
        img.lazy {
            opacity: 0;
            transition: opacity 0.3s;
        }
        
        img:not(.lazy) {
            opacity: 1;
        }
        
        /* Reduced motion support */
        @media (prefers-reduced-motion: reduce) {
            .timeline-item,
            .timeline-content,
            .timeline-line,
            * {
                animation-duration: 0.01ms !important;
                animation-iteration-count: 1 !important;
                transition-duration: 0.01ms !important;
                scroll-behavior: auto !important;
            }
        }
        
        /* High contrast mode support */
        @media (prefers-contrast: high) {
            .timeline-dot {
                border-width: 3px;
            }
            
            .timeline-content {
                border-width: 2px;
            }
        }
    `;
    document.head.appendChild(style);
    
})();