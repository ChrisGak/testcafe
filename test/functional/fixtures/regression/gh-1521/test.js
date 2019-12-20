const expect = require('chai').expect;

describe('[Regression](GH-1521)', function () {
    it('Should wait for a timeout if an element is not in the viewport temporary', function () {
        return runTests('testcafe-fixtures/index-test.js', 'Wait for an out-of-viewport element', { only: 'edge-chromium' });
    });

    it('Should reevaluate selector during waiting for element since it can be changed', function () {
        return runTests('testcafe-fixtures/index-test.js', 'Click on a changing element', { only: 'edge-chromium' });
    });

    it('Should fail if an element is not in the viewport constantly', function () {
        return runTests('testcafe-fixtures/index-test.js', 'Try to click on an out-of-viewport element', {
            only:       'edge-chromium',
            shouldFail: true
        })
            .catch(function (errs) {
                expect(errs[0]).to.contains('The element that matches the specified selector is not visible');
                expect(errs[0]).to.contains(' > 65 |        await t.click(Selector(\'#out-of-viewport-input\', { timeout: 2000 }));');
            });
    });

    it('Should wait for a timeout if an element is overlapped', function () {
        return runTests('testcafe-fixtures/index-test.js', 'Wait until element is not overlapped', { only: 'edge-chromium' });
    });

    it('Should click on an overlapping element after some timeout', function () {
        return runTests('testcafe-fixtures/index-test.js', 'Click on an overlapping element after some timeout', { only: 'edge-chromium' });
    });

    it('Should wait while element is moving', function () {
        return runTests('testcafe-fixtures/index-test.js', 'Click on a moving element', { only: 'edge-chromium' });
    });

    it('Should not wait for a timeout when clicks on a child of svg element', function () {
        // NOTE: ie regression test
        return runTests('testcafe-fixtures/index-test.js', 'Click on svg child');
    });

    it('Should not wait if the offset position of a fixed element is changing', function () {
        return runTests('testcafe-fixtures/index-test.js', 'Click on a fixed element', { only: 'edge-chromium' });
    });

    it('Should raise mouseover/mousemove if hovered element was overlapped', function () {
        return runTests('testcafe-fixtures/index-test.js', 'Hover to an overlapped element', { only: 'edge-chromium' });
    });
});
