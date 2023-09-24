"use strict";

let jason = {
    name: "Jason",
    pointDeVie: 100,
  };
  
  // Caractéristiques clichées des survivants.
  const caracteristiques = ["intello","beaugosse égocentrique","solitaire","tête en l'air","sportif","fétard","jolie blonde","fan de survie"];
  
  
  // Création de 5 survivants random avec des caractéristiques.
  let survivants = [];//tableau
  for (let i = 0; i < 5; i++) {//si i est egal à 0 ou si i est inférieur à 5, on ajpute 1 element
    const prenoms = ["Alice", "Bob", "Charlie", "David", "Emma", "Frank", "Grace", "Hannah", "Isaac", "Julia"];//tableau avec prenoms des personnages
    const name = prenoms[Math.floor(Math.random() * prenoms.length)];
    const caracteristique = caracteristiques[Math.floor(Math.random() * caracteristiques.length)];// avoir des caractériques aléatoires avec des personnages
  survivants.push(name,caracteristique);//ajouter auu tableau un survivant
  };

  //création de l'attaque

  function attaque(jason,survivants){//j'appelle la fonction

let mortvictimes=Math.floor(Math.ramdom())*(survivants.length-1);//comme on commence de 0 le tableau nous rajoute 1 element donc on enleve un élement avec le -1
let nombres=Math.random();//fonction nombres permet d'avoir un nombre au hasard
       if(nombres<0.3){;
//pour tuer un personnage 
       console.log(survivants[mortvictimes][1]+" a été tué ");//message dans la console
      survivants.splice(mortvictimes,mortvictimes);//enlever un objet d'un element à un autre donc tuer un des perso
    }else if(nombres>=0.3 && nombres<=0.5){//degats affligés 
      console.log(survivants[mortvictimes][1]+" a equivé l'attaque de Jason et lui a infligé 10 points de dégats");
      let degats=10;//degats infligé à jason
      jason.pointDeVie-=degats;//supprimer de la vie à Jason
    }else if(nombres>0.5){//mort mais fais des degats au tueur 
     console.log(survivants[mortvictimes][1]+" a été touché mais à infligé des dégats au tueur! ");//message dans la console
     jason.pointDeVie-=15;//supp des pv de jason
    survivants.splice(mortvictimes,mortvictimes);}//tuer le personnage 
}

while(jason.pointDeVie>0 && survivants.length!=0){//pour faire en sorte que lorsque Jason a ses pv inferieur à 0 alors il meurt
  attaque(jason,survivants);
}
console.log("Jason est mort, youpi !");//message de fin

//je suis vraiment désolée j'ai essayé de faire de mon mieux 