describe('[API] Test Speed', function () {
    it('Should run test with different speed', function () {
        return runTests('./testcafe-fixtures/speed-test.js', 'Speed', { only: 'edge-chromium', speed: 0.5 });
    });

    it('Should run test with different speed in iframe', function () {
        return runTests('./testcafe-fixtures/speed-test.js', 'Speed in iframe', {
            only:            'edge-chromium',
            speed:           0.5,
            selectorTimeout: 10000
        });
    });
});
