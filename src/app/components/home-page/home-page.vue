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
        <img id="curvyBackgroundCircle" src="../../../assets/fill-1.svg" alt="">

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
            <div class="blackVerticalLine"></div>
            <div class="blackVerticalLine"></div>
        </div>

        <div style="margin-top:10px;margin-left: auto;margin-right: auto;" class="otherBlackVerticalLine"></div>

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
        
        <!-- 3 Différents buttons -->
        <p class="messageDev">Button :</p>
        <div class="flexContainer" style="justify-content: space-around; margin-top:10px;">
            <button class="whiteButton"><span class="whiteButtonTxt">RÉSERVER MON BILLET</span></button>
            <button class="strawberryButton"><span class="strawberryButtonTxt">ENVOYER UN MAIL</span></button>
            <button class="blackButton"><span class="blackButtonTxt">VOIR PLUS</span></button>
        </div>
    </div>
</template>