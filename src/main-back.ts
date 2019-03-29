class Test {
    constructor(private name: string){

    }

    getName():string{
        return this.name
    }

    get full() :string {
        return this.name
    }

    set full(name:string){
        this.name = name
    }
}

const test = new Test('kang')

console.log(test.full)

test.full = '000'
console.log(test.full)
