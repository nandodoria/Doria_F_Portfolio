(()=> {
    const vm = new Vue({
        el: '#app',

        data: {
            title : "",
            tagline : "",
            description : "",
            descriptionshort : "",
            design : "",
            aspectone : "",
            aspecttwo : "",
            aspectthree : "",

            titletwo : "",
            taglinetwo : "",
            descriptiontwo : "",
            descriptiontwoshort : "",
            designtwo : "",
            hadiaaspectone : "",
            hadiaaspecttwo : "",
            hadiaaspectthree : "",


            titleangton : "",
            taglineangton : "",
            descriptionangton : "",
            descriptionangtonshort : "",
            designangton : "",
            angtonaspectone : "",
            angtonaspecttwo : "",
            angtonaspectthree : "",

            titlereel : "",
            reelaspectone : "",
            reelaspecttwo : "",
            reelaspectthree : "",

            location : "",
            age : "",
            hockeyteam : "",
            indexabout: "",


            lotrimage: "",

            displaymodal:"",

            hadiabrowser: "",

            angtonbrowser: ""



        },

        created : function() {
            this.loadProject1();
            this.loadProject2();
            this.loadProject3();
            this.loadProject4();
            this.loadAbout();
        },

        methods : {

            switchSrc(e){
                this.displaymodal = e.currentTarget.getAttribute('src').split('.')[0] + '_large.jpg';
            },

            loadProject1(){
                const url = `includes/index.php?id=1`;

                fetch(url)
                .then (res => res.json())
                .then (data => {
                    this.title = data[0].project_title;
                    this.description = data[0].project_desc;
                    this.design = data[0].design_desc;
                    this.lotrimage =data[0].project_image;
                    this.tagline = data[0].project_tagline;
                    this.descriptionshort = data[0].project_desc_short;
                    this.aspectone = data[0].project_aspect_one;
                    this.aspecttwo = data[0].project_aspect_two;
                    this.aspectthree = data[0].project_aspect_three;
                })
                .catch(function(error){
                    console.log(error);
                })   
            },

            loadProject2(){
                const url = `includes/index.php?id=2`;

                fetch(url)
                .then (res => res.json())
                .then (data => {
                    this.titletwo = data[0].project_title;
                    this.descriptiontwo = data[0].project_desc;
                    this.designtwo = data[0].design_desc;
                    this.taglinetwo = data[0].project_tagline;
                    this.hadiabrowser = data[0].project_image;
                    this.descriptiontwoshort = data[0].project_desc_short;
                    this.hadiaaspectone = data[0].project_aspect_one;
                    this.hadiaaspecttwo = data[0].project_aspect_two;
                    this.hadiaaspectthree = data[0].project_aspect_three;
                })
                .catch(function(error){
                    console.log(error);
                })   
            },

            loadProject3(){
                const url = `includes/index.php?id=3`;

                fetch(url)
                .then (res => res.json())
                .then (data => {
                    this.titleangton = data[0].project_title;
                    this.taglineangton = data[0].project_tagline;
                    this.angtonbrowser = data[0].project_image;
                    this.descriptionangton = data[0].project_desc;
                    this.designangton = data[0].design_desc;
                    this.descriptionangtonshort = data[0].project_desc_short;
                    this.angtonaspectone = data[0].project_aspect_one;
                    this.angtonaspecttwo = data[0].project_aspect_two;
                    
                })
                .catch(function(error){
                    console.log(error);
                })   
            },


            loadProject4(){
                const url = `includes/index.php?id=4`;

                fetch(url)
                .then (res => res.json())
                .then (data => {
                    this.titlereel = data[0].project_title;
                    this.reelaspectone = data[0].project_aspect_one;
                    this.reelaspecttwo = data[0].project_aspect_two;
                    this.reelaspectthree = data[0].project_aspect_three;
                    
                })
                .catch(function(error){
                    console.log(error);
                })   
            },


            loadAbout(){
                const url = `includes/index.php?id=5`;

                fetch(url)
                .then (res => res.json())
                .then (data => {
                    
                    this.location = data[0].project_aspect_one;
                    this.age = data[0].project_aspect_two;
                    this.hockeyteam = data[0].project_aspect_three;
                    this.indexabout = data[0].project_desc;
                    
                })
                .catch(function(error){
                    console.log(error);
                })   
            },



        }
    });

    var cat1 = document.querySelector("#cat_about");
    var info1 = document.querySelector("#about_overlay");
    var cat2 = document.querySelector("#cat_employment");
    var info2 = document.querySelector("#employment_overlay");
    var cat3 = document.querySelector("#cat_education");
    var info3 = document.querySelector("#education_overlay");
    var hadia_lb = document.querySelector("#hadia_lb")

    if(hadia_lb){
    const imageInstance = basicLightbox.create(document.querySelector('#hadia_lb'));
    //document.querySelectorAll(".hadiaopen").onclick = imageInstance.show
    document.querySelectorAll(".hadiaopen").forEach(item => item.onclick = imageInstance.show);
    }



    function infoshow1(evt){
        //console.log("fired from infoshow1()");
        TweenMax.to(info1, 0.6, {top:"0%"});
    }

    function inforemove1(evt){
        //console.log("fired from infoshow1()");
        TweenMax.to(info1, 0.6, {top:"100%"});
    }

    function infoshow2(evt){
        //console.log("fired from infoshow1()");
        TweenMax.to(info2, 0.6, {top:"0%"});
    }

    function inforemove2(evt){
        //console.log("fired from infoshow1()");
        TweenMax.to(info2, 0.6, {top:"100%"});
    }

    function infoshow3(evt){
        //console.log("fired from infoshow1()");
        TweenMax.to(info3, 0.6, {top:"0%"});
    }

    function inforemove3(evt){
        //console.log("fired from infoshow1()");
        TweenMax.to(info3, 0.6, {top:"100%"});
    }


if (cat1){
    cat1.addEventListener("mouseover", infoshow1, false);
    cat1.addEventListener("mouseout", inforemove1, false);
}

if (cat2){
    cat2.addEventListener("mouseover", infoshow2, false);
    cat2.addEventListener("mouseout", inforemove2, false);
}

if (cat3){
    cat3.addEventListener("mouseover", infoshow3, false);
    cat3.addEventListener("mouseout", inforemove3, false);
}





})();