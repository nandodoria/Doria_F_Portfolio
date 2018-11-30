(()=> {
    const vm = new Vue({
        el: '#app',

        data: {
            currentThumb : "",
            title : "",
            description : "",
            design : ""


        },

        created : function() {
            this.loadProject1();
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
            }

            






        }
    });

})();