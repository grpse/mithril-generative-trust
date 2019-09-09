import domMock from 'mithril/test-utils/domMock.js';
import pushStateMock from 'mithril/test-utils/pushStateMock';
// global.window = Object.assign(domMock(), pushStateMock());
const testsContext = require.context('.', true, /\.spec\.js$/);
testsContext.keys().forEach(testsContext);
