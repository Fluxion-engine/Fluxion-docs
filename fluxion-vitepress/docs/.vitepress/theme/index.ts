import DefaultTheme from 'vitepress/theme'
import { inBrowser } from 'vitepress'
import './custom.css'
import Layout from './Layout.vue'

export default {
    extends: DefaultTheme,
    Layout,
    enhanceApp({ router }: { router: any }) {
        if (inBrowser) {
            // --- Google Analytics State ---
            let scrollDepths = { 25: false, 50: false, 75: false, 90: false };
            const resetScrollDepths = () => {
                scrollDepths = { 25: false, 50: false, 75: false, 90: false };
            };

            // --- Scroll Depth Tracking ---
            const checkScrollDepth = () => {
                const scrollTop = window.scrollY;
                const docHeight = document.documentElement.scrollHeight - window.innerHeight;
                if (docHeight <= 0) return;

                const scrollPercent = (scrollTop / docHeight) * 100;

                ([25, 50, 75, 90] as const).forEach((depth) => {
                    if (scrollPercent >= depth && !scrollDepths[depth]) {
                        scrollDepths[depth] = true;
                        if (typeof (window as any).gtag !== 'undefined') {
                            (window as any).gtag('event', 'scroll_depth', {
                                'event_category': 'engagement',
                                'event_label': `${depth}%`,
                                'scroll_percentage': depth
                            });
                        }
                    }
                });
            };

            // Throttle scroll event
            let scrollTimeout: any = null;
            window.addEventListener('scroll', () => {
                if (!scrollTimeout) {
                    scrollTimeout = setTimeout(() => {
                        checkScrollDepth();
                        scrollTimeout = null;
                    }, 500);
                }
            });

            // --- Router Hooks ---
            router.onAfterRouteChanged = (to: string) => {
                // Page View
                if (typeof (window as any).gtag !== 'undefined') {
                    (window as any).gtag('config', 'G-8XX1M4DWHW', {
                        'page_path': to
                    });
                }

                // Reset Scroll State
                resetScrollDepths();

                // 404 Tracking (Simple check via title)
                setTimeout(() => {
                    if (document.title.includes('404')) {
                        if (typeof (window as any).gtag !== 'undefined') {
                            (window as any).gtag('event', 'page_not_found', {
                                'event_category': 'error',
                                'event_label': to
                            });
                        }
                    }
                }, 500);
            }

            // --- Performance (Core Web Vitals) ---
            try {
                const observer = new PerformanceObserver((list) => {
                    list.getEntries().forEach((entry) => {
                        if (typeof (window as any).gtag !== 'undefined') {
                            // LCP (Largest Contentful Paint)
                            if (entry.entryType === 'largest-contentful-paint') {
                                (window as any).gtag('event', 'web_vital', {
                                    'event_category': 'performance',
                                    'event_label': 'LCP',
                                    'value': Math.round(entry.startTime),
                                    'metric_name': 'LCP',
                                    'metric_value': entry.startTime
                                });
                            }
                            // CLS (Cumulative Layout Shift)
                            if (entry.entryType === 'layout-shift' && !(entry as any).hadRecentInput) {
                                (window as any).gtag('event', 'web_vital', {
                                    'event_category': 'performance',
                                    'event_label': 'CLS',
                                    'value': Math.round((entry as any).value * 1000),
                                    'metric_name': 'CLS',
                                    'metric_value': (entry as any).value
                                });
                            }
                        }
                    });
                });
                observer.observe({ type: 'largest-contentful-paint', buffered: true });
                observer.observe({ type: 'layout-shift', buffered: true });
            } catch (e) {
                // PerformanceObserver not supported
            }

            // --- JS Error Tracking ---
            window.addEventListener('error', (event) => {
                if (typeof (window as any).gtag !== 'undefined') {
                    (window as any).gtag('event', 'exception', {
                        'description': `${event.message} at ${event.filename}:${event.lineno}`,
                        'fatal': false,
                        'error_message': event.message
                    });
                }
            });

            // --- Search Tracking ---
            window.addEventListener('keydown', (e) => {
                if (e.key === 'Enter') {
                    const target = e.target as HTMLElement;
                    // Check if interactions are with a search input
                    // VitePress search input usually has ID 'local-search-input' or class containing 'search'
                    if (target.tagName === 'INPUT' && (
                        target.getAttribute('type') === 'search' ||
                        target.classList.contains('search-input') ||
                        target.id.includes('search') ||
                        target.closest('.VPLocalSearchBox')
                    )) {
                        const query = (target as HTMLInputElement).value;
                        if (query && typeof (window as any).gtag !== 'undefined') {
                            (window as any).gtag('event', 'search', {
                                'search_term': query
                            });
                        }
                    }
                }
            });

            // --- Click Tracking ---
            window.addEventListener('click', (e) => {
                const target = e.target as HTMLElement;

                // Track External Links
                const link = target.closest('a');
                if (link) {
                    const href = link.getAttribute('href');
                    if (href && href.startsWith('http')) {
                        const isExternal = !href.includes(window.location.hostname);

                        // Check for Social Media
                        const socialMap: Record<string, string> = {
                            'instagram.com': 'Instagram',
                            'facebook.com': 'Facebook',
                            'threads.net': 'Threads',
                            'twitter.com': 'Twitter',
                            'x.com': 'Twitter',
                            'linkedin.com': 'LinkedIn',
                            'reddit.com': 'Reddit',
                            'youtube.com': 'YouTube',
                            't.me': 'Telegram',
                            'discord.com': 'Discord',
                            'discord.gg': 'Discord'
                        };

                        let socialPlatform = null;
                        for (const domain in socialMap) {
                            if (href.includes(domain)) {
                                socialPlatform = socialMap[domain];
                                break;
                            }
                        }

                        if (typeof (window as any).gtag !== 'undefined') {
                            // General External Link Event
                            if (isExternal) {
                                (window as any).gtag('event', 'click_external_link', {
                                    'event_category': 'outbound',
                                    'event_label': href,
                                    'transport_type': 'beacon',
                                    'outbound_link_url': href
                                });
                            }

                            // Specific Social Media Event
                            if (socialPlatform) {
                                (window as any).gtag('event', 'social_click', {
                                    'event_category': 'social',
                                    'event_label': socialPlatform,
                                    'social_platform': socialPlatform,
                                    'social_action': 'navigation',
                                    'destination_url': href
                                });
                            }
                        }
                    }
                }

                // Track Code Copy
                if (target.closest('.copy-code-button') || target.classList.contains('copy-code-button') ||
                    target.closest('.copy') || target.classList.contains('copy') ||
                    target.closest('.vp-copy') || target.classList.contains('vp-copy')) {

                    // Try to find the file name/path if possible from code block info
                    const codeBlock = target.closest('.language-');
                    const label = codeBlock ? codeBlock.className : window.location.pathname;

                    if (typeof (window as any).gtag !== 'undefined') {
                        (window as any).gtag('event', 'copy_code', {
                            'event_category': 'interaction',
                            'event_label': label,
                            'file_path': window.location.pathname
                        });
                    }
                }
            });
        }
    }
}
