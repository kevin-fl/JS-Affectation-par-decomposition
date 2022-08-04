//DESTRUCTURING
//-> permet d extraire des données d un tab ou objet grace a une syntaxe dont la forme 
//-> ressemble a la structure d un tableau ou objet 


//exemple simple via decomposition d un tableau 

const toto = ["un","deux","trois"];

//sans utiliser le destructuring

const un = toto[0];
const deux = toto[1];
const trois = toto[2]

// en utilisant le destructuring 

const [unn,deuxx,troiss]= toto;            //-> on economise  des ln de code



//NB valeurs par defaut 

let a,b;
[a = 5, b = 7] = [1];    //-> a prend la valeur par defaut 1 

console.log(a);        //-> expected output: 1
console.log(b);        //-> expected output: 7        


//ECHANGE DE VARIABLES

let aa= 1;
let bb= 3;


[aa,bb]=[bb,aa];
console.log(aa); //3
console.log(bb); //1


//*NB : XOR veut dire ou    ->  x = x XOR(ou) y 


//* ignorer certaines valeurs 


function f() {
    return [1,2,3];
}

const [aaa, ,bbb] = f();                //-> la valeur 2 est ignoré 
console.log("A vaut " + aaa + " B vaut " + bbb );  //-> aaa vaut 1 , bbb vaut 3


// ignorer ttes les valeurs 

[,,]= f();



                                                                                    //PRATIQUONS ! 


//exemple
const [x , y, z] = [10, 20, "web dev"];
console.log(z);                 //-> affiche "web dev"


// affecter le reste des elements a une variable 
const totoo = ["un","deux","trois",10,100,1000];

[r,g,...leReste] = totoo;    // 
console.log(r);
console.log(g);
console.log(leReste);   //> ["trois" , 10,100,1000]


[,, ...leReste2] = totoo;   
console.log(leReste2);   // les 2 virgules retire les 2 premieres valeurs >["trois" , 10,100,1000]


[, ...leReste2] = totoo;   // retire la premiere valeur
console.log(leReste2);

[...leReste2] = totoo;   //>retire rien 
console.log(leReste2);



