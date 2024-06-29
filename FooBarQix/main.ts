function isDivisibleBy(input: number, number: number): boolean {
    return input % number == 0;
}



const outputs = {
    Foo: 'Foo',
    Bar: 'Bar',
    Quix: 'Quix'
}

export function FooBarQuix(input: string): string {
    let x ="";
    const inputNumber = parseInt(input);
    if (isDivisibleBy(inputNumber, 3)) {
            x+= outputs.Foo
    }
    if (inputNumber % 5== 0){
        x+="Bar"
    }
    if (parseInt(input)%7 == 0  ) {
        x+="Quix"
    }

    for(let i=0;i<input.length;i++){
        if(input[i]==='3'){
            x+="Foo"
        }
        if(input[i]==='5'){
            x+="Bar"
        }
        if(input[i]==='7'){
            x+="Quix"
        }
    }
    return x
}

