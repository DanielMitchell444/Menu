const items = {
 name: 'Sandwhich',
 img: ' ./closeup-unpeeled-boiled-egg-half-eggs-white-background-food-menu-concept-closeup-unpeeled-boiled-egg-half-eggs-117215484.jpg'
}




const button1 = document.querySelectorAll('.buttons1');
const image = document.querySelector('.image');
const card = document.querySelectorAll('.card');
const content = document.querySelector('.content');



button1.forEach(item => {
 item.addEventListener('click', (e) => {

    var data = e.target.dataset.id
  
  if(item.getAttribute('data-id') === "All"){

   content.innerHTML = `
   <div class = "card">
    <img src = "./pixzolo-photography-BiWb1Y8wpZk-unsplash.jpg" class = "image">
    <h2>Sandwhich</h2>
    <p>$8</p>
   </div>

   <div class = "card">
    <img src = "./photo-1612487439139-c2d7bac13577.avif" class = "image" data-id=" breakfast">
    <h2>Fried Egg</h2>
    <p>$7</p>
   </div>

   <div class = "card">
    <img src = "./pixzolo-photography-ZB8NK8cB4EE-unsplash.jpg">
    <h2>Grilled Cheese</h2>
    <p>$8</p>
   </div>

   <div class = "card">
    <img src = "./closeup-unpeeled-boiled-egg-half-eggs-white-background-food-menu-concept-closeup-unpeeled-boiled-egg-half-eggs-117215484.jpg">
    <h2>Boiled Egg</h2>
    <p>$5</p>
   </div>

   <div class = "card">
    <img src = "./closeup-unpeeled-boiled-egg-half-eggs-white-background-food-menu-concept-closeup-unpeeled-boiled-egg-half-eggs-117215484.jpg">
    <h2>Boiled Egg</h2>
    <p>$5</p>
   </div>
</div>
   
   `
}

  else if(item.getAttribute('data-id') === "breakfast"){
   

    
    content.innerHTML = `
   
   

   <div class = "card">
    <img src = "./photo-1612487439139-c2d7bac13577.avif" class = "image" data-id=" breakfast">
    <h2>Fried Egg</h2>
    <p>$7</p>
   </div>

   <div class = "card">
   <img src = "./closeup-unpeeled-boiled-egg-half-eggs-white-background-food-menu-concept-closeup-unpeeled-boiled-egg-half-eggs-117215484.jpg">
   <h2>Boiled Egg</h2>
   <p>$5</p>
  </div>

  <div class = "card">
   <img src = "./closeup-unpeeled-boiled-egg-half-eggs-white-background-food-menu-concept-closeup-unpeeled-boiled-egg-half-eggs-117215484.jpg">
   <h2>Boiled Egg</h2>
   <p>$5</p>
  </div>
   
    
    `
 
   }

else if(item.getAttribute('data-id') === "lunch"){
  content.innerHTML = `
  <div class = "card">
    <img src = "./pixzolo-photography-BiWb1Y8wpZk-unsplash.jpg" class = "image">
    <h2>Sandwhich</h2>
    <p>$8</p>
   </div>

   <div class = "card">
   <img src = "./pixzolo-photography-ZB8NK8cB4EE-unsplash.jpg">
   <h2>Grilled Cheese</h2>
   <p>$8</p>
  </div>
  
  `
}

 })
})
