import {defineConfig} from 'vitepress'

export default defineConfig({
    lang: 'en-US',
    base: '/',
    title: "Guides4Crates",
    description: "Guides4Crates",
    head: [['link', {rel: 'icon', href: '/Guides4CratesSmall.webp'}]],
    themeConfig: {
        logo: '/Guides4CratesSmall.webp',
        nav: [
            {
                text: 'Guides',
                items: [
                    {text: 'antex', link: 'https://guides.rs/antex'},
                    {text: 'biff', link: 'https://guides.rs/biff'},
                    {text: 'dfp-number-sys', link: 'https://guides.rs/dfp-number-sys'},
                    {text: 'domrs', link: 'https://guides.rs/domrs'},
                    {text: 'htop', link: 'https://guides.rs/htop'},
                    {text: 'kivi', link: 'https://guides.rs/kivi'}
                ]
            }
        ],
        search: {
            provider: 'local'
        }
    },
    srcDir: "pages"
})
