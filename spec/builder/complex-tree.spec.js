import generativeTrust from '../../src/index';
import util from 'util';

function testRenderer(tagName, attrs, children) {
    return {
        tagName: tagName || '',
        attrs: attrs || {},
        children: children || ''
    }
}

function log(obj) {
    console.log(util.inspect(obj, { depth: null }));
}

describe('Complex Tree Structure', function() {

    describe('Verify inner attributes', function() {

        let innerLinkHTML = `Click this link <div style="font-weight:700">This <a href="#?MAGIC">LINK</a></div>`;
        let generatedinnerLinkHTML = null;
        
        let innerFooterHTML = `<body>
                <div>
                    Some div content

                    <h1 style="font-size:25px">H1 TITLE</h1>
                    <font>some text here</font>
                    <footer>FOOTER_CONTENT</footer>
                </div>
            </body>`;
        let generatedinnerFooterHTML = null;

        
        before(function() {
            generatedinnerLinkHTML = generativeTrust(innerLinkHTML, {}, testRenderer);
            generatedinnerFooterHTML = generativeTrust(innerFooterHTML, {}, testRenderer);
        });

        it('inner link data should appear', function() {
            expect(generatedinnerLinkHTML.children[1].children[1].children[0].children).equal('LINK');
        });

        it('inner footer data should appear', function() {
            expect(generatedinnerFooterHTML.children[0].children[0].children[3].children[0].children).equal('FOOTER_CONTENT');
        });

    });
});