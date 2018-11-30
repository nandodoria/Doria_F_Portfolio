(()=> {
    const vm = new Vue({
        el: '#app',

        data: {
            currentThumb : "",
            title : "",
            description : "",
            design : "",
            titletwo : "",
            descriptiontwo : "",
            designtwo : ""
        },

        created : function() {
            this.loadProject1();
            this.loadProject2();
        },

        methods : 
        {

            loadProject1(){
                const url = `includes/index.php?id=1`;

                fetch(url)
                .then (res => res.json())
                .then (data => {
                    this.title = data[0].project_title;
                    this.description = data[0].project_desc;
                    this.design = data[0].design_desc;
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
                })
                .catch(function(error){
                    console.log(error);
                })   
            }








        }
    });

})();