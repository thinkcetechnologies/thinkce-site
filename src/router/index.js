import { createRouter, createWebHistory } from 'vue-router'
import HomeComponent from "@/components/HomeComponent";
import ServiceComponent from "@/components/ServiceComponent";
import TeamComponent from "@/components/TeamComponent";


const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeComponent
  },
  {
    path: '/service',
    name: 'service',
    component: ServiceComponent
  },
  {
    path: '/team',
    name: 'team',
    component: TeamComponent
  }

];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

export default router
