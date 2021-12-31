module.exports = {
    plugins: ['vuepress-plugin-nprogress', '@vuepress/back-to-top'],
    themeConfig: {
        sidebar: 'auto',
        logo: '/imgs/logo2.jpg',
    },
    title: 'bilibili-API-collect',
    description: '',
    base: '/github-action-test/',
    dest: 'dist',
    markdown: {
        html: true,
        // markdown-it-anchor 的选项
        anchor: { permalink: false },
        // markdown-it-toc 的选项
        toc: { includeLevel: [1, 2] },
        extendMarkdown: md => {
            /**
             * add base url before absolute url (/imgs/foo.png --> /base/imgs/foo.png)
             */
            const { parse } = require('node-html-parser');
            const base = '/github-action-test'; // no trailing slash!
            md.renderer.rules.image = function (tokens, idx, _options, _env, _self) {
                const token = tokens[idx],
                    aIndex = token.attrIndex('src'),
                    attr = token.attrs[aIndex][1],
                    alt = token.content;
                if (/^http/.test(attr)) {
                    return `<img src="${attr}" alt="${alt}" referrerpolicy="no-referrer">`;
                }
                switch (attr[0]) {
                    case '/':
                        return `<img src="${base}${attr}" alt="${alt}"`;
                    default:
                        return `<img src="${attr}" alt="${alt}"`;
                }
            };

            /**
             * add base url before absolute url (/imgs/foo.png --> /base/imgs/foo.png), and referrerpolicy to external url
             */
            md.renderer.rules.html_block = function (tokens, idx) {
                const content = tokens[idx].content;
                const root = parse(content);
                const imgs = root.getElementsByTagName('img');
                const length = imgs.length;
                if (length === 0) {
                    return content;
                }
                for (let index = 0; index < length; index++) {
                    const src = imgs[index].getAttribute("src");
                    if (/^http/.test(src)) {
                        imgs[index].setAttribute('referrerpolicy', "no-referrer");
                        continue;
                    }

                    switch (src[0]) {
                        case '/':
                            imgs[index].setAttribute('src', `${base}${src}`); break;
                        default:
                            break;
                    }
                }
                return root.toString();
            };
        }
    }
}