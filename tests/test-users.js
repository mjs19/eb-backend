const should = require('chai').should(),
expect = require('chai').expect,
supertest = require('supertest'),
api = supertest('https://emotional-breakdown.herokuapp.com');

describe('GET groups', (done) => {
    it('should return a 200 status', () => {
      api.get('/users')
        .set('Accept', 'application/json')
        .expect(200, done);
    });

    it('should return all users', (done) => {
        api.get('/users')
          .set('Accept', 'application/json')
          .end(function(error, response) {
              if(error) {console.log(error);}
              else {
                  console.log("RESPONSE: ", response)
              }

            done();
          });
      }).timeout(5000);

  });

  describe('GET user by :id', (done) => {
    it('should return a 200 status', () => {
      api.get('/users/1')
        .set('Accept', 'application/json')
        .expect(200, done);
    })
});