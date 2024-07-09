export class tag{
static ANGULAR=new tag('Angular','Red');
static TYPESCRIPT=new tag('Typescript','green');
static TAILWINDCSS=new tag('Tailwind','blue');
static JAVASCRIPT=new tag('Javascript','orange');
static HTML=new tag('HTML','brown');
static ANGULAR3=new tag('Angular','purple');
static ANGULAR4=new tag('Angular','orange');
static ANGULAR5=new tag('Angular','blue');
static ANGULAR6=new tag('Angular','Red');

    private constructor(private readonly key:string, public readonly color:string){

    }
    toString(){
        return this.key;
    }
}