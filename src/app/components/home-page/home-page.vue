<template>
    <div>
        <p style="margin-bottom:50px;">Bienvenue ma gueule</p>

        <!-- Curve top container -->
        <p class="messageDev">Curvy Bg :</p>
        <div class="flexContainer">
            <div id="chevronUpLeft"></div>
            <div id="chevronUpMiddle"></div>             
            <div id="chevronUpRight"></div> 
        </div>

        <!-- CurvyBackground circle svg -->
        <img id="curvyBackgroundCircle" src="../../../assets/circle.svg" alt="">

        <!-- CurvyBackground circle svg -->
        <img id="curvyBackgroundTrumpet" src="../../../assets/trumpet.svg" alt="">

        <!-- Actual background with linear gradient -->
        <div class="curvyBackground"></div> 

        <!-- Curve bottom container -->
        <div class="flexContainer">
            <div id="chevronDownLeft"></div>
            <div id="chevronDownMiddle"></div>             
            <div id="chevronDownRight"></div> 
        </div>

        <!-- Triangles -->
        <p class="messageDev">Home page triangles :</p>
        <div class="flexContainer" style="justify-content: space-between;">
            <div class="triangleDecorationLeft"></div>
            <div class="triangleDecorationRight"></div>
        </div>

        <!-- Horizontal black separators -->
        <p class="messageDev">Honrizontal black separators :</p>
        <div class="flexContainer" style="justify-content: space-between;margin-top:10px;">
            <div class="blackHorizontalSeparator"></div>
            <div class="blackHorizontalSeparator"></div>
        </div>

        <div style="margin-top:10px;margin-left: auto;margin-right: auto;" class="otherBlackHorizontalSeparator"></div>

        <!-- Horizontal colored separator -->
        <p class="messageDev">Full width colored separator :</p>
        <div class="coloredSeparator" style="margin-top:10px;margin-bottom:10px;"></div>

        <!-- Footer separator -->
        <p class="messageDev">Footer separator :</p>
        <div class="flexContainer" style="justify-content: space-around;">
            <div class="footerSeparator"></div>
            <div class="footerSeparator"></div>
            <div class="footerSeparator"></div>
        </div>

        <!-- Select -->
        <p class="messageDev">Vertical page separator :</p>
        <div class="verticalGreySeparator" style="margin-right: auto;margin-left: auto;"></div>
        
        <!-- 3 Différents buttons -->
        <p class="messageDev">Button :</p>
        <div class="flexContainer" style="justify-content: space-around; margin-top:10px;">
            <button class="whiteButton"><span class="whiteButtonTxt">RÉSERVER MON BILLET</span></button>
            <button class="strawberryButton"><span class="strawberryButtonTxt">ENVOYER UN MAIL</span></button>
            <button class="blackButton"><span class="blackButtonTxt">VOIR PLUS</span></button>
        </div>

        <!-- Select -->
        <p class="messageDev">Select :</p>
        <select class="select-css" name="Filtre" id="filterValue">
            <option class="selectTxt" value="Filtrer par date">Filtrer par date</option>
            <option class="selectTxt" value="Filtrer par artiste">Filtrer par artiste</option>
            <option class="selectTxt" value="Filtrer par prix">Filtrer par prix</option>
        </select>
    </div>
</template>