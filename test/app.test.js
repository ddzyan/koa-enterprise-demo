const request = require('supertest');
const assert = require('assert');

const app = require('../app');

describe('服务测试', () => {
  it('/ test', (done) => {
    request(app)
      .get('/')
      .expect(200)
      .end((err, res) => {
        if (err) assert.fail(err);
        assert.strictEqual(res.body.msg, 'hello word', '返回结果错误');
        done();
      });
  });

  it('/add', (done) => {
    request(app)
      .post('/list')
      .expect(200)
      .end((err, res) => {
        if (err) assert.fail(err);
        const { data } = res.body;
        assert(Array.isArray(data), '返回结果错误');
        done();
      });
  });
});
