const should = require('chai').should(),
expect = require('chai').expect,
supertest = require('supertest'),
api = supertest('https://emotional-breakdown.herokuapp.com');

// note: some api calls already blocked on Capital One computers but works just
// fine on my personal laptop

describe('GET gifs', (done) => {
    it('should return a 200 status', () => {
      api.get('/gifs')
        .set('Accept', 'application/json')
        .expect(200, done);
    });


    it('should return all gifs', (done) => {
        api.get('/gifs')
          .set('Accept', 'application/json')
          .end(function(error, response) {
              if(error) { console.log(error); }
              expect(response.body).to.be.an('array');
              done();
          });
      })
  });

  describe('GET gif by emotion', (done) => {
    it('should return a 200 status', () => {
      api.get('/gifs/angry')
        .set('Accept', 'application/json')
        .expect(200, done);
    })
    it('should return a gif with correct fields ', (done) => {
        api.get('/gifs/angry')
          .set('Accept', 'application/json')
          .end(function(error, response) {
              if(error) { console.log(error); }
              expect(response.body.emotion).to.be.a('string');
              expect(response.body.url).to.be.a('string');
            done();
          });
      })
});
