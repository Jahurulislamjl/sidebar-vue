<template>

    <!-- sidebar -->
        <nav class="sidebar-nav">

            <ul class="nav flex-column">
                <li class="nav-item">    
                    <router-link to="/" class="nav-link"><i class="nav-icon fa fa-clock-o "></i> Dashboard</router-link>
                </li>

                <li class="nav-item"> 
                    <a class="nav-link dropdown-toggle" id="library-menu-dropdown"><i class="nav-icon fa fa-book"></i> Library</a>
                
                    <ul class="nav-menu-item" id="library-menu">
                        <li class="nav-item">   
                            <router-link to="/exercise" class="nav-link"><i class="nav-icon fa fa-eye"></i> View Exercise</router-link>
                        </li>
                        <li class="nav-item">  
                            <router-link to="/favourites" class="nav-link"><i class="nav-icon fa fa-heart"></i> My Favourites</router-link>
                        </li>
                        <li class="nav-item">
                            <router-link to="/manage-exercise" class="nav-link"><i class="nav-icon fa fa-universal-access"></i> Manage Exercise</router-link>
                        </li>
                    </ul>
                </li>

                <li class="nav-item">
                    <a class="nav-link dropdown-toggle" id="patient-menu-dropdown"><i class="nav-icon fa fa-wheelchair"></i> Patients</a>
                
                    <ul class="nav-menu-item" id="patient-menu">
                        <li class="nav-item">  
                            <router-link to="/exercise" class="nav-link"><i class="nav-icon fa fa-plus-circle"></i> Add Patients</router-link>
                        </li>
                        <li class="nav-item">  
                            <router-link to="/favourites" class="nav-link"><i class="nav-icon fa fa-cog"></i> Manage Patients</router-link>
                        </li>
                        
                    </ul>
                </li>
            </ul>
        </nav>

</template>

<script>
    export default {
        name: "Sidebar"
    }
</script>

<style scoped>

</style>