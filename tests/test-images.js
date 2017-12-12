const should = require('chai').should(),
expect = require('chai').expect,
supertest = require('supertest'),
api = supertest('https://emotional-breakdown.herokuapp.com');

// note: some api calls already blocked on Capital One computers but works just
// fine on my personal laptop

describe('GET images', (done) => {
    it('should return a 200 status', () => {
      api.get('/images')
        .set('Accept', 'application/json')
        .expect(200, done);
    });

    it('should return all images', (done) => {
        api.get('/images')
          .set('Accept', 'application/json')
          .end(function(error, response) {
              if(error) { console.log(error); }
              expect(response.body).to.be.an('array');
              done();
          });
      })
  });

  describe('GET image by :id', (done) => {
    it('should return a 200 status', () => {
      api.get('/images/1')
        .set('Accept', 'application/json')
        .expect(200, done);
    })
    it('should return a user with correct fields ', (done) => {
        api.get('/images/1')
          .set('Accept', 'application/json')
          .end(function(error, response) {
              if(error) { console.log(error); }
              expect(response.body.userId).to.be.a('number');
              expect(response.body.url).to.be.a('string');
              expect(response.body.neutral).to.be.a('number');
            done();
          });
      })
});
