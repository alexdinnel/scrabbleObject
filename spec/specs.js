describe('LetterValue', function() {
  it('Returns 1 if A, E, I, O, U, L, N, R, S, T', function() {
    LetterValue("A").should.equal(1)
  });
  it('Returns 2 if D or G is entered', function(){
    LetterValue("D").should.equal(2)
  });
  it('Returns 3 if B, C, M, P', function(){
    LetterValue("B").should.equal(3)
  });
  it('Returns 4 if F, H, V, W, Y', function(){
    LetterValue("F").should.equal(4)
  });
  it('Returns 5 if K', function(){
    LetterValue("K").should.equal(5)
  });
  it('Returns 8 if J, X', function(){
    LetterValue("J").should.equal(8)
  });
  it('Returns 10 if Q, Z', function(){
    LetterValue("Q").should.equal(10)
  });
});

describe('Scrabble', function(){
  it('Returns the sum of points for a word', function(){
    Scrabble("COW").should.equal(8)
  });
  it('Capitalizes lower case words', function(){
    Scrabble("qkf").should.equal(19)
  });
  it('Returns Invalid Input if the user enters an invalid character', function(){
    Scrabble("hello there!").should.equal('Invalid Entry')
  });
});
