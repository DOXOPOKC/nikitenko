const Segments = () => import(/* webpackChunkName: "Segments" */ '@/views/Segments.vue')
const Segment = () => import(/* webpackChunkName: "Segment" */ '@/views/Segment.vue')
const Checklist = () => import(/* webpackChunkName: "Checklist" */ '@/views/Checklist.vue')

export const publicRoute = [
  {
    name: 'Segments',
    path: '/',
    component: Segments,
  },
  {
    name: 'Segment',
    path: '/segment/:id',
    component: Segment
  },
  {
    name: 'Checklist',
    path: '/checklist/:id',
    component: Checklist
  }
]
  
export const protectedRoute = []