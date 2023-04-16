import { createRouter, createWebHistory } from 'vue-router';
import ClientInquiryPage from "../pages/ClientInquiry.vue";
import ClientApplication from "../pages/CreditApplication.vue";

const routes = [
  {
    path: "/",
    name: 'ClientInquiries',
    component: ClientInquiryPage,
  },
  {
    path: "/CreditApplication",
    name: 'CreditApplication',
    component: ClientApplication,
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router;