import { Express } from 'express';

interface Test {
  testName: string;
}

const tests: Test[] = [{ testName: 'Todo 1' }, { testName: 'Todo 2' }];

export function addTestRoutes(app: Express) {

    app.get('/api/test', (req, resp) => resp.send(tests));

    app.post('/api/addTest', (req, resp) => {
        const newTest = {
        testName: `New test ${Math.floor(Math.random() * 1000)}`
        };
        tests.push(newTest);
        resp.send(newTest);
    });
}