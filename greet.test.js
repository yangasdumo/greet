describe('TEST MY GREET FUNCTION' , function(){
    
    it(' should pass when enter a name' , function(){
        assert.equal(greet('name'), 'enter name');
   
    });

    it('should pass when you select a language' , function(){
        assert.equal( greet('language'), 'enter name');

    });

    it('should pass invalid name when enter a number' , function(){
        assert.equal( greet(5), 'enter name');

    });
});