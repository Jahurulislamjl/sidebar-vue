import Vue from 'vue'
window.$ = window.jQuery = require('jquery')
import App from './App.vue'
import router from './router'
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import './assets/scss/app.scss'
import '../node_modules/font-awesome/css/font-awesome.min.css'


Vue.config.productionTip = false

new Vue({
    router,
    render: function (h) {
        return h(App)
    },
    mounted() {
        $(document).ready(function () {

            $('#sidebarCollapse').click(function () {

                $('.hd-logo1').toggleClass('d-block')
                $('.hd-logo2').toggleClass('d-none')
                $('.sidebar').toggleClass('sidebar-minimized')
                $('.nav-icon').toggleClass('icon-sizing')
            })

            $('#library-menu-dropdown').click(function() {
                $('#library-menu').toggleClass('d-block')
            })

            $('#patient-menu-dropdown').click(function() {
                $('#patient-menu').toggleClass('d-block')
            })

            // if(window.innerWidth  < 769){
            //     $('.nav-link.router-link-exact-active.router-link-active').click(function(){
            //         $('.sidebar').addClass('d-none')
            //     })
            // }
    
        })
    }
}).$mount('#app')
