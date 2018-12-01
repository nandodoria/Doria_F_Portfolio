(()=> {
    const vm = new Vue({
        el: '#app',

        data: {
            title : "",
            description : "",
            design : "",
            titletwo : "",
            descriptiontwo : "",
            designtwo : "",
            titleangton : "",
            descriptionangton : "",
            designangton : "",
            lotrimage: "",
            displaymodal:"",
            hadiabrowser: ""



        },

        created : function() {
            this.loadProject1();
            this.loadProject2();
            this.loadProject3();
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
                    this.hadiabrowser = data[0].project_image;
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
                    this.descriptionangton = data[0].project_desc;
                    this.designangton = data[0].design_desc;
                })
                .catch(function(error){
                    console.log(error);
                })   
            },












        }
    });

})();