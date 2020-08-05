describe('calculator.js', function(){
    it('should add number to total', function(){
        const calculator = new Calculator();
        calculator.add(5)

        expect(calculator.total).toBe(5)
    });
    it('should subtract number to total', function(){
        const calculator = new Calculator();
        calculator.total = 30;
        calculator.subtract(5);
        expect(calculator.total).toBe(25)


    });
    it('should multiply number to total', function(){
        const calculator = new Calculator();
        calculator.total = 30;
        calculator.multiply(5)
        expect(calculator.total).toBe(150)
    });
    it('should divide number to total', function(){
        const calculator = new Calculator();
        calculator.total = 30;
        calculator.divide(5)
        expect(calculator.total).toBe(6)
    });
    it('should initialize the toatl', function(){
        const calculator = new Calculator();
        expect(calculator.total).toBe(0);
        expect(calculator.total).toBeFalsy();
    });
    it('has constructor', function(){
        const calculator = new Calculator();
        const calculator2 = new Calculator();
        calculator.total = 200;
        calculator2.total = 200;
        expect(calculator).toEqual(calculator2);

    });
    it('can be instantiated', function(){
        const calculator = new Calculator();
        const calculator2 = new Calculator();
      
        expect(calculator).toBeTruthy();  
        expect(calculator).toBeTruthy();


    });
})