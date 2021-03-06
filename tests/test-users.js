const should = require('chai').should(),
expect = require('chai').expect,
supertest = require('supertest'),
api = supertest('https://emotional-breakdown.herokuapp.com');

// note: some api calls already blocked on Capital One computers but works just
// fine on my personal laptop

describe('GET users', (done) => {
    it('should return a 200 status', () => {
      api.get('/users')
        .set('Accept', 'application/json')
        .expect(200, done);
    });

    it('should return all users', (done) => {
        api.get('/users')
          .set('Accept', 'application/json')
          .end(function(error, response) {
              if(error) { console.log(error); }
              expect(response.body).to.be.an('array');
              done();
          });
      })
  });

  describe('GET user by :id', (done) => {
    it('should return a 200 status', () => {
      api.get('/users/1')
        .set('Accept', 'application/json')
        .expect(200, done);
    })
    it('should return a user with correct fields ', (done) => {
        api.get('/users/1')
          .set('Accept', 'application/json')
          .end(function(error, response) {
              if(error) { console.log(error); }
              console.log(response.body);
              expect(response.body.firstName).to.be.a('string');
              expect(response.body.lastName).to.be.a('string');
              expect(response.body.email).to.be.a('string');
              expect(response.body.images).to.be.an('array');
            done();
          });
      })
});
