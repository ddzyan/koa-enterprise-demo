const { Service } = require('koa-enterprise');

const posts = [
  {
    id: 1,
    title: 'this is test1',
  },
  {
    id: 2,
    title: 'this is test2',
  },
];

class HomeService extends Service {
  async getList() {
    return [
      {
        id: 1,
        title: 'this is test1',
      },
      {
        id: 2,
        title: 'this is test2',
      },
    ];
  }
}

module.exports = HomeService;
