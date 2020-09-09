//cont the esctions
function cont_section(){
  let cont = document.querySelectorAll('.landing__container');
  let contx=cont.length;
  return contx;
}
cont_section();

// create btn

function create_btn(){
  let btn= document.createElement("button");
  btn.id="new-section";
  let head=document.getElementById('navbar__list');
  let text=document.createTextNode("Create New Section");
  btn.appendChild(text);
  head.appendChild(btn);
}
create_btn()

//Make up of btn
function Make_upbtn(){
let bt=document.getElementById("new-section");
bt.style.color="#ffbf46";
bt.style.backgroundColor="#586f7c";
bt.style.cssFloat="right";
bt.style.padding="5px";
bt.style.margin="10px";
}

Make_upbtn();

//create li items
function create_li(){
let x=cont_section();
  let o, text;
  for (let i=1;i<=x;i++){
  text=document.createTextNode("Section "+i);
  o=document.createElement('LI');
  o.appendChild(text);
  document.getElementById("navbar__list").appendChild(o);
  o.setAttribute("href", "#");


}
}
create_li();

//Set id to each li item
function set_id(){
  let v=cont_section();
  let li=document.getElementsByTagName("LI");
  if (v===3){
for(let i=0; i<li.length ; i++){
  let x= i+1
  li[i].id="link"+x;
}
}

else if(v>3) {
  let myLi = document.getElementsByTagName('li')
  let lastLi = myLi[li.length-1];
  lastLi.id="link"+v;

}
}
set_id();



//style of navbar__list
function Make_upul() {
let navbar= document.getElementsByClassName("navbar__menu");
let ul = document.getElementById("navbar__list");
ul.style.backgroundColor="#46425a";
ul.style.textAlign="left";
ul.style.padding="5px";
}

Make_upul();


function Make_upli(){
let li=document.getElementsByTagName("LI");
for (let i=0;i<li.length;i++){
li[i].style.padding="5px";
li[i].style.margin="5px";
li[i].style.fontSize="20px";
li[i].style.color="#ffbf46";
}



 }
Make_upli();


//crate new section by btn
function new_btn(){
  let bt=document.getElementById("new-section");
  let x= cont_section();
  bt.addEventListener("click", function(){
    let section =document.createElement('section');
    let div=document.createElement("div");
    div.className ="landing__container";
    section.appendChild(div);



//H2
let e= cont_section()+1;
    let h2=document.createElement("H2");
    let spantext=document.createTextNode("Section "+e);
      h2.appendChild(spantext);
      div.appendChild(h2);
      h2.style.fontSize="3em";

//P
    let p=document.createElement("P");
    div.appendChild(p);
    let text=document.createTextNode("Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi fermentum metus faucibus lectus pharetra dapibus. Suspendisse potenti. Aenean aliquam elementum mi, ac euismod augue. Donec eget lacinia ex. Phasellus imperdiet porta orci eget mollis. Sed convallis sollicitudin mauris ac tincidunt. Donec bibendum, nulla eget bibendum consectetur, sem nisi aliquam leo, ut pulvinar quam nunc eu augue. Pellentesque maximus imperdiet elit a pharetra. Duis lectus mi, aliquam in mi quis, aliquam porttitor lacus. Morbi a tincidunt felis. Sed leo nunc, pharetra et elementum non, faucibus vitae elit. Integer nec libero venenatis libero ultricies molestie semper in tellus. Sed congue et odio sed euismod.");
    p.appendChild(text);
    let c=document.createElement("P");
    let text2=document.createTextNode("Aliquam a convallis justo. Vivamus venenatis, erat eget pulvinar gravida, ipsum lacus aliquet velit, vel luctus diam ipsum a diam. Cras eu tincidunt arcu, vitae rhoncus purus. Vestibulum fermentum consectetur porttitor. Suspendisse imperdiet porttitor tortor, eget elementum tortor mollis non");
    c.appendChild(text2);
    div.appendChild(c);
    p.style.lineHeight="1.6em";
    c.style.lineHeight="1.6em";

  //add new li with added section

  // DEBUG:

 let litext=document.createTextNode("Section "+ e);
 let o=document.createElement('LI');
 o.appendChild(litext);
 document.getElementById("navbar__list").appendChild(o);

let  a = document.createElement("a");
a.setAttribute('href', "#section3");
o.appendChild(a);



//appending to main
let parent = document.getElementsByTagName('main');
 let u =parent[0];
 u.appendChild(section)
  });

}
new_btn();



//set id to new section
function set_section_id(){
  let x= cont_section();
  if(x>3){
let  se=document.querySelectorAll("SECTION");
let len=se.length;
let w= len;
se[len-1].id="section"+w;
}
}

set_section_id();


//splite of id
function splite_id(){
  let se=document.querySelectorAll("SECTION");
  let li=document.querySelectorAll("LI");
  let x,v;
  for (let i=0;i<se.length;i++){
    x=li[i].id.split("");
    v=se[i].id.split("");
    if(x[4]===v[7]){
      li[i].addEventListener("click",function(){
        se[i].scrollIntoView({behavior: "smooth", block: "end", inline: "nearest"});
          se[i].classList.add("active");
          for(let c=0;c<se.length;c++){
                        if(se[c].id!=se[i].id){
                            //remove class
                            se[c].classList.remove("active");
                        }
                  }

      });

    }

  }
}
splite_id();

//calculte the top of section
function sectop(){
  const sectop= document.querySelectorAll('SECTION');

  for (const sectiontop of sectop) {
    window.addEventListener("scroll",function(){
      if (sectiontop.getBoundingClientRect().top< window.innerHeight&& sectiontop.getBoundingClientRect().bottom>window.innerHeight){
        sectiontop.classList.add('active');
      }
      else{
        sectiontop.classList.remove("active");
      }


    });

    /*
    let y= sectiontop.getBoundingClientRect().top;
    paragraph.classList.add('read');*/
  }

}
sectop();

//auto function
function checked(){
let x= document.querySelector("main")
x.addEventListener("DOMSubtreeModified",function(){
  cont_section();
//console.log(cont_section());

Make_upul();
Make_upli();
set_id();
set_section_id();
splite_id();
sectop();
});
}

checked();
