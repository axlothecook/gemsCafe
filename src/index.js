import './style.css';

let wrapper = document.getElementById('wrapper');

class Header{
    static createHeader(parentDiv){
        const headerDiv = document.createElement('div');
        headerDiv.setAttribute('id', 'header-div');
        parentDiv.appendChild(headerDiv);
    
        const homeBtn = document.createElement('button');
        homeBtn.setAttribute('id', 'home-btn');
        homeBtn.textContent = `Gems' Cafe`;
        homeBtn.addEventListener('click', (e) => {
            parentDiv.remove();
            HomePage.createHomePage();
        });
        headerDiv.appendChild(homeBtn);
    
        const menuBtn = document.createElement('button');
        menuBtn.setAttribute('id', 'menu-btn');
        menuBtn.textContent = 'Menu';
        menuBtn.addEventListener('click', (e) => {
            parentDiv.remove();
            MenuPage.createMenuPage();
        });
        headerDiv.appendChild(menuBtn);
    
        const aboutBtn = document.createElement('button');
        aboutBtn.setAttribute('id', 'about-btn');
        aboutBtn.textContent = 'About';
        aboutBtn.addEventListener('click', (e) => {
            parentDiv.remove();
            AboutPage.createAboutPage();
        });
        headerDiv.appendChild(aboutBtn);

        return parentDiv;
    }
}

class MenuPage{
    static createMenuPage(){
        const menuContent = document.createElement('div');
        menuContent.setAttribute('id', 'menu-content');
        wrapper.appendChild(menuContent);

        Header.createHeader(menuContent);

        const menuBackgroundDiv = document.createElement('div');
        menuBackgroundDiv.setAttribute('id', 'menu-background-div');
        menuContent.appendChild(menuBackgroundDiv);

        const parallaxEffectDiv = document.createElement('div');
        parallaxEffectDiv.setAttribute('id', 'parallax-effect-div');
        menuContent.appendChild(parallaxEffectDiv);

        const menuImgContainer = document.createElement('div');
        menuImgContainer.setAttribute('id', 'menu-img-container');
        parallaxEffectDiv.appendChild(menuImgContainer);

        const menuBkImg = document.createElement('img');
        menuBkImg.setAttribute('id', 'menu-bk-img');
        menuBkImg.src = '../food_img_folder/menu-bgimg.jpg';
        menuImgContainer.appendChild(menuBkImg);

        const menuContainer = document.createElement('div');
        menuContainer.setAttribute('id', 'menu-container');
        menuContent.appendChild(menuContainer);

        const foodChildWrapper = document.createElement('div');
        foodChildWrapper.setAttribute('id', 'food-child-wrapper');
        menuContainer.appendChild(foodChildWrapper);

        for(let i = 1; i < 7; i++){
            const foodDiv = document.createElement('div');
            foodDiv.classList.add('food-div');
            foodChildWrapper.appendChild(foodDiv);

            let foodImg = document.createElement('img');
            foodImg.setAttribute('id', `food${i}-img`);
            foodImg.src = `../food_img_folder/food${i}-img.png`;
            foodDiv.appendChild(foodImg);

            const textDiv = document.createElement('div');
            textDiv.classList.add('text-div');
            foodDiv.appendChild(textDiv);

            let h1TextDiv = document.createElement('div');
            h1TextDiv.classList.add('h1-text-div', `text${i}`);
            textDiv.appendChild(h1TextDiv);

            let h3TextDiv = document.createElement('div');
            h3TextDiv.classList.add('h3-text-div');
            textDiv.appendChild(h3TextDiv);

            let h1 = document.createElement('h1');
            let h3 = document.createElement('h3');

            switch(true){
                case h1TextDiv.classList.contains(`text1`):
                    h1.textContent = 'Antarcticite Lime Mouse Cake';
                    h3.textContent = '1100¥';
                    break;

                case h1TextDiv.classList.contains(`text2`):
                    h1.textContent = 'Cinnabar Chocolate Strawberry Cake';
                    h3.textContent = '1350¥';
                    break;

                case h1TextDiv.classList.contains(`text3`):
                    h1.textContent = 'Zircon Peanut Seashore Cake';
                    h3.textContent = '1800¥';
                    break;
                
                case h1TextDiv.classList.contains(`text4`):
                    h1.textContent = 'Bort Caffè Mocha';
                    h3.textContent = '2200¥';
                    break;

                case h1TextDiv.classList.contains(`text5`):
                    h1.textContent = 'Diamond White Strawberry Cake';
                    h3.textContent = '2300¥';
                    break;

                case h1TextDiv.classList.contains(`text6`):
                    h1.textContent = 'Amethyst Cherry Sprinkles Muffin';
                    h3.textContent = '2750¥';
                    break;
            };
            h1TextDiv.appendChild(h1);
            h3TextDiv.appendChild(h3);
        };
        return menuContent;
    }
}

class AboutPage{
    static createAboutPage(){
        const aboutContent = document.createElement('div');
        aboutContent.setAttribute('id', 'about-content');
        wrapper.appendChild(aboutContent);
    
        Header.createHeader(aboutContent);

        const aboutBackgroundDiv = document.createElement('div');
        aboutBackgroundDiv.setAttribute('id', 'about-background-div');
        aboutContent.appendChild(aboutBackgroundDiv);

        const textAndBkContainer = document.createElement('div');
        textAndBkContainer.setAttribute('id', 'text-and-bk-container');
        aboutContent.appendChild(textAndBkContainer);

        const aboutBkContainer1 = document.createElement('div');
        aboutBkContainer1.setAttribute('id', 'about-bk-container-1');
        textAndBkContainer.appendChild(aboutBkContainer1);

        const aboutContainer1 = document.createElement('div');
        aboutContainer1.classList.add('about-container', 'ac-upper');  
        aboutBkContainer1.appendChild(aboutContainer1);

        const aboutText1 = document.createElement('div');
        aboutText1.classList.add('about-text', 'at-upper');    
        aboutContainer1.appendChild(aboutText1);

        const h1First = document.createElement('h1');
        h1First.textContent = 'Who are we Gems?'
        aboutText1.appendChild(h1First);

        const h3First = document.createElement('h3');
        h3First.textContent = 'Our maids represent sentient beings made from various precious gemstones. The foods are based on their unique personality traits derived from their mineral properties.';
        aboutText1.appendChild(h3First);

        const h3Second = document.createElement('h3');
        h3Second.textContent = 'You can freely enjoy their company while eating! However, do be careful not to break their body in the meanwhile. You will have to pay a compensation cost.';
        aboutText1.appendChild(h3Second);

        const aboutBkContainer2 = document.createElement('div');
        aboutBkContainer2.setAttribute('id', 'about-bk-container-2');
        textAndBkContainer.appendChild(aboutBkContainer2);

        const aboutContainer2 = document.createElement('div');
        aboutContainer2.classList.add('about-container', 'ac-lower')
        aboutBkContainer2.appendChild(aboutContainer2);

        const lunarianImgContainer = document.createElement('div');
        lunarianImgContainer.setAttribute('id', 'lunarian-img-container');
        aboutContainer2.appendChild(lunarianImgContainer);

        const aboutText2 = document.createElement('div');
        aboutText2.classList.add('about-text', 'at-lower')
        aboutContainer2.appendChild(aboutText2);

        const h1Second = document.createElement('h1');
        h1Second.textContent= 'Where to visit the Cafe';
        aboutText2.appendChild(h1Second);

        const h3Third = document.createElement('h3');
        h3Third.textContent = 'Take a bite or taste the nectar at the Palace on Island Below The Sky.';
        aboutText2.appendChild(h3Third);

        const h3Forth = document.createElement('h3');
        h3Forth.textContent = 'You might just be lucky enough to catch a view of our Gems fighting the Lunarians!';
        aboutText2.appendChild(h3Forth);

        return aboutContent;
    };
}

class HomePage{
    static createHomePage(){
        const content = document.createElement('div');
        content.setAttribute('id', 'content');
        wrapper.appendChild(content);
    
        Header.createHeader(content);
    
        const backgroundDiv = document.createElement('div');
        backgroundDiv.setAttribute('id', 'background-div');
        content.appendChild(backgroundDiv);
    
        const parallaxEffectDiv = document.createElement('div');
        parallaxEffectDiv.setAttribute('id', 'parallax-effect-div');
        content.appendChild(parallaxEffectDiv);
    
        const restaurantContainer = document.createElement('div');
        restaurantContainer.setAttribute('id', 'restaurant-container');
        parallaxEffectDiv.appendChild(restaurantContainer);
    
        const restaurantImg = document.createElement('img');
        restaurantImg.setAttribute('id', 'restaurant-img');
        restaurantImg.src = '../img-folder/restaurant-img.jpg';
        restaurantContainer.appendChild(restaurantImg);
    
        const phosContainer = document.createElement('div');
        phosContainer.setAttribute('id', 'phos-container');
        parallaxEffectDiv.appendChild(phosContainer);
    
        const phosImg = document.createElement('img');
        phosImg.setAttribute('id', 'phos-img');
        phosImg.src = '../img-folder/phos.png';
        phosContainer.appendChild(phosImg);
    
        const footer = document.createElement('div');
        footer.setAttribute('id', 'footer');
        content.appendChild(footer);
    
        const bottomLeftDiv = document.createElement('div');
        bottomLeftDiv.setAttribute('id', 'bottom-left-div');
        footer.appendChild(bottomLeftDiv);
    
        const pebbleImg = document.createElement('img');
        pebbleImg.setAttribute('id', 'pebble-img');
        pebbleImg.src = '../img-folder/pebble.png';
        bottomLeftDiv.appendChild(pebbleImg);
    
        const bottomRightDiv = document.createElement('div');
        bottomRightDiv.setAttribute('id', 'bottom-right-div');
        bottomRightDiv.addEventListener('click', (e) => {
            wrapper.remove();
            MenuPage.createMenuPage();
        });
        footer.appendChild(bottomRightDiv);
    
        const bottomRightImg = document.createElement('img');
        bottomRightImg.setAttribute('id', 'bottom-right-img');
        bottomRightImg.src = '../img-folder/bottom-right-img.png';
        bottomRightDiv.appendChild(bottomRightImg);
    
        return content;
    };
}

window.addEventListener('DOMContentLoaded', (e) => {
    HomePage.createHomePage();
});

