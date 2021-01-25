export default [
  {
    _tag: 'CSidebarNavItem',
    name: 'Dashboard',
    to: '/dashboard',
    icon: 'cil-speedometer'
  },
  {
    _tag: 'CSidebarNavTitle',
    _children: ['Menu']
  },
  {
    _tag: 'CSidebarNavDropdown',
    name: 'Map',
    route: '/map',
    icon: 'cil-map',
    _children: [
      {
        _tag: 'CSidebarNavItem',
        name: 'Prediction',
        to: '/map/prediction',
      },
      {
        _tag: 'CSidebarNavItem',
        name: 'Risk',
        to: '/map/risk',
      },
      {
        _tag: 'CSidebarNavItem',
        name: 'Total',
        to: '/map/total',
      },
    ],
  },
  {
    _tag: 'CSidebarNavDropdown',
    name: 'Maching Learning',
    route: '/ml',
    icon: 'cil-cursor',
    _children: [
      {
        _tag: 'CSidebarNavItem',
        name: 'CNN',
        to: '/ml/cnn',
      },
      {
        _tag: 'CSidebarNavItem',
        name: 'DNN',
        to: '/ml/dnn',
      },
      {
        _tag: 'CSidebarNavItem',
        name: 'Risk Mapping',
        to: '/ml/riskmap',
      },
    ],
  },
  {
    _tag: 'CSidebarNavItem',
    name: 'Docs',
    to: '/docs',
    icon: 'cil-notes'
  },
  {
    _tag: 'CSidebarNavItem',
    name: 'Scripts',
    to: '/scripts',
    icon: 'cil-notes'
  },
  {
    _tag: 'CSidebarNavItem',
    name: 'Localization',
    to: '/local',
    icon: 'cil-notes'
  }
]

