import mq from 'mithril-query';
import generativeTrust from '../../src/index';

describe('Remove Blacklisted Tags', () => {

    let html = 'my name is "Something" <script id="SCRIPT_TAG"> var x = new XHR() </script> <div id="DIV_TAG">FIND CONTENT</div>';
    let noScriptComponent = null; 
    let noDivComponent = null;

    before(() => {

        {
            const genComponent = generativeTrust(html, {
                eliminateScriptTags: true,
                tagsFilterIsWhitelist: false,
                tagsToFilter: ['script']
            });
            noScriptComponent = mq(genComponent);
        }

        {
            const genComponent = generativeTrust(html, {
                eliminateScriptTags: false,
                tagsFilterIsWhitelist: false,
                tagsToFilter: ['div']
            });
            noDivComponent = mq(genComponent);
        }
    });

    it("tree without script component", function() {
        expect(noScriptComponent.find('script').length).equal(0);
    });

    it('tree without div tag', function() {
        expect(noDivComponent.find('div').length).equal(0);
    });
});
