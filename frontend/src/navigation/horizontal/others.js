export default [
  {
    header: 'Другое',
    icon: 'MoreHorizontalIcon',
    children: [
      {
        title: 'Faq',
        route: 'pages-faq',
        icon: 'HelpCircleIcon',
      },
      {
        title: 'База знаний',
        route: 'pages-knowledge-base',
        icon: 'AlertCircleIcon',
      },
      {
        title: 'Cards',
        icon: 'CreditCardIcon',
        children: [
          {
            title: 'Basic',
            route: 'card-basic',
          },
          {
            title: 'Advance',
            route: 'card-advance',
          },
          {
            title: 'Statistic',
            route: 'card-statistic',
          },
          {
            title: 'Analytic',
            route: 'card-analytic',
          },
        ],
      },
      {
        title: 'Components',
        icon: 'ArchiveIcon',
        children: [
          {
            title: 'Modal',
            route: 'components-modal',
          },
          {
            title: 'Overlay',
            route: 'components-overlay',
          },
          {
            title: 'Pill',
            route: 'components-pill',
          },
          {
            title: 'Pill Badge',
            route: 'components-pill-badge',
          },
          {
            title: 'Popover',
            route: 'components-popover',
          },
          {
            title: 'Progress',
            route: 'components-progress',
          },
          {
            title: 'Sidebar',
            route: 'components-sidebar',
          },
          {
            title: 'spinner',
            route: 'components-spinner',
          },
          {
            title: 'Tab',
            route: 'components-tab',
          },
          {
            title: 'Time',
            route: 'components-time',
          },
          {
            title: 'Timeline',
            route: 'components-timeline',
          },
          {
            title: 'Toasts',
            route: 'components-toasts',
          },
          {
            title: 'Tooltip',
            route: 'components-tooltip',
          },
        ],
      },
      {
        title: 'Charts',
        icon: 'PieChartIcon',
        children: [
          {
            title: 'Apex Chart',
            route: 'charts-apex-chart',
          },
          {
            title: 'Chartjs',
            route: 'charts-chartjs',
          },
          {
            title: 'Echart',
            route: 'charts-echart',
          },
        ],
      },
      {
        title: 'Forms Elements',
        icon: 'CopyIcon',
        children: [
          {
            title: 'Input Group',
            route: 'forms-element-input-group',
          },
          {
            title: 'Spinbutton',
            route: 'forms-element-spinbutton',
          },
          {
            title: 'File Input',
            route: 'forms-element-file-input',
          },
          {
            title: 'Quill Editor',
            route: 'extensions-quill-editor',
          },
          {
            title: 'Date Time Picker',
            route: 'extensions-date-time-picker',
          },
        ],
      },
    ],
  },
]
