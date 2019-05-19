export class MenuConfig {
	public defaults: any = {
		header: {
			self: {},
			'items': [
		// 		{
		// 			'title': 'Pages',
		// 			'root': true,
		// 			'icon-': 'flaticon-add',
		// 			'toggle': 'click',
		// 			'custom-class': 'kt-menu__item--active',
		// 			'alignment': 'left',
		// 			'translate': 'MENU.PAGES',
		// 			'submenu': {
		// 				'type': 'classic',
		// 				'alignment': 'left',
		// 				'items': [
		// 					{
		// 						'title': 'My Account',
		// 						'icon': 'flaticon-file',
		// 						'page': 'index'
		// 					},
		// 					{
		// 						'title': 'Task Manager',
		// 						'icon': 'flaticon-diagram',
		// 						'badge': {
		// 							'type': 'kt-badge--success',
		// 							'value': '2'
		// 						}
		// 					},
		// 					{
		// 						'title': 'Team Manager',
		// 						'icon': 'flaticon-business',
		// 						'submenu': {
		// 							'type': 'classic',
		// 							'alignment': 'right',
		// 							'bullet': 'line',
		// 							'items': [
		// 								{
		// 									'title': 'Add Team Member',
		// 									'icon': ''
		// 								},
		// 								{
		// 									'title': 'Edit Team Member',
		// 									'icon': ''
		// 								},
		// 								{
		// 									'title': 'Delete Team Member',
		// 									'icon': ''
		// 								},
		// 								{
		// 									'title': 'Team Member Reports',
		// 									'icon': ''
		// 								},
		// 								{
		// 									'title': 'Assign Tasks',
		// 									'icon': ''
		// 								},
		// 								{
		// 									'title': 'Promote Team Member',
		// 									'icon': ''
		// 								}
		// 							]
		// 						}
		// 					},
		// 					{
		// 						'title': 'Projects Manager',
		// 						'page': '#',
		// 						'icon': 'flaticon-chat-1',
		// 						'submenu': {
		// 							'type': 'classic',
		// 							'alignment': 'right',
		// 							'bullet': 'dot',
		// 							'items': [
		// 								{
		// 									'title': 'Latest Projects',
		// 									'icon': ''
		// 								},
		// 								{
		// 									'title': 'Ongoing Projects',
		// 									'icon': ''
		// 								},
		// 								{
		// 									'title': 'Urgent Projects',
		// 									'icon': ''
		// 								},
		// 								{
		// 									'title': 'Completed Projects',
		// 									'icon': ''
		// 								},
		// 								{
		// 									'title': 'Dropped Projects',
		// 									'icon': ''
		// 								}
		// 							]
		// 						}
		// 					},
		// 					{
		// 						'title': 'Create New Project',
		// 						'icon': 'flaticon-users'
		// 					}
		// 				]
		// 			}
		// 		},
		// 		{
		// 			'title': 'Features',
		// 			'root': true,
		// 			'icon-': 'flaticon-line-graph',
		// 			'toggle': 'click',
		// 			'alignment': 'left',
		// 			'translate': 'MENU.FEATURES',
		// 			'submenu': {
		// 				'type': 'mega',
		// 				'width': '1000px',
		// 				'alignment': 'left',
		// 				'columns': [
		// 					{
		// 						'heading': {
		// 							'heading': true,
		// 							'title': 'Task Reports',
		// 							'bullet': 'dot'
		// 						},
		// 						'items': [
		// 							{
		// 								'title': 'Latest Tasks',
		// 								'icon': 'flaticon-map'
		// 							},
		// 							{
		// 								'title': 'Pending Tasks',
		// 								'icon': 'flaticon-user'
		// 							},
		// 							{
		// 								'title': 'Urgent Tasks',
		// 								'icon': 'flaticon-clipboard'
		// 							},
		// 							{
		// 								'title': 'Completed Tasks',
		// 								'icon': 'flaticon-graphic-1'
		// 							},
		// 							{
		// 								'title': 'Failed Tasks',
		// 								'icon': 'flaticon-graphic-2'
		// 							}
		// 						]
		// 					},
		// 					{
		// 						'bullet': 'line',
		// 						'heading': {
		// 							'heading': true,
		// 							'title': 'Profit Margins',
		// 							'bullet': 'dot'
		// 						},
		// 						'items': [
		// 							{
		// 								'title': 'Overall Profits',
		// 								'icon': ''
		// 							},
		// 							{
		// 								'title': 'Gross Profits',
		// 								'icon': ''
		// 							},
		// 							{
		// 								'title': 'Nett Profits',
		// 								'icon': ''
		// 							},
		// 							{
		// 								'title': 'Year to Date Reports',
		// 								'icon': ''
		// 							},
		// 							{
		// 								'title': 'Quarterly Profits',
		// 								'icon': ''
		// 							},
		// 							{
		// 								'title': 'Monthly Profits',
		// 								'icon': ''
		// 							}
		// 						]
		// 					},
		// 					{
		// 						'bullet': 'dot',
		// 						'heading': {
		// 							'heading': true,
		// 							'title': 'Staff Management',
		// 							'bullet': 'dot'
		// 						},
		// 						'items': [
		// 							{
		// 								'title': 'Top Management',
		// 								'icon': ''
		// 							},
		// 							{
		// 								'title': 'Project Managers',
		// 								'icon': ''
		// 							},
		// 							{
		// 								'title': 'Development Staff',
		// 								'icon': ''
		// 							},
		// 							{
		// 								'title': 'Customer Service',
		// 								'icon': ''
		// 							},
		// 							{
		// 								'title': 'Sales and Marketing',
		// 								'icon': ''
		// 							},
		// 							{
		// 								'title': 'Executives',
		// 								'icon': ''
		// 							}
		// 						]
		// 					},
		// 					{
		// 						'heading': {
		// 							'heading': true,
		// 							'title': 'Tools',
		// 							'icon': '',
		// 							'bullet': 'dot'
		// 						},
		// 						'items': [
		// 							{
		// 								'title': 'Analytical Reports',
		// 								'icon': ''
		// 							},
		// 							{
		// 								'title': 'Customer CRM',
		// 								'icon': ''
		// 							},
		// 							{
		// 								'title': 'Operational Growth',
		// 								'icon': ''
		// 							},
		// 							{
		// 								'title': 'Social Media Presence',
		// 								'icon': ''
		// 							},
		// 							{
		// 								'title': 'Files and Directories',
		// 								'icon': ''
		// 							},
		// 							{
		// 								'title': 'Audit & Logs',
		// 								'icon': ''
		// 							}
		// 						]
		// 					}
		// 				]
		// 			}
		// 		},
		// 		{
		// 			'title': 'Apps',
		// 			'root': true,
		// 			'icon-': 'flaticon-paper-plane',
		// 			'toggle': 'click',
		// 			'alignment': 'left',
		// 			'translate': 'MENU.APPS',
		// 			'submenu': {
		// 				'type': 'classic',
		// 				'alignment': 'left',
		// 				'items': [
		// 					{
		// 						'title': 'Reporting',
		// 						'icon': 'flaticon-business'
		// 					},
		// 					{
		// 						'title': 'Social Presence',
		// 						'page': 'components/datatable_v1',
		// 						'icon': 'flaticon-computer',
		// 						'submenu': {
		// 							'type': 'classic',
		// 							'alignment': 'right',
		// 							'items': [
		// 								{
		// 									'title': 'Reached Users',
		// 									'icon': 'flaticon-users'
		// 								},
		// 								{
		// 									'title': 'SEO Ranking',
		// 									'icon': 'flaticon-interface-1'
		// 								},
		// 								{
		// 									'title': 'User Dropout Points',
		// 									'icon': 'flaticon-lifebuoy'
		// 								},
		// 								{
		// 									'title': 'Market Segments',
		// 									'icon': 'flaticon-graphic-1'
		// 								},
		// 								{
		// 									'title': 'Opportunity Growth',
		// 									'icon': 'flaticon-graphic'
		// 								}
		// 							]
		// 						}
		// 					},
		// 					{
		// 						'title': 'Sales & Marketing',
		// 						'icon': 'flaticon-map'
		// 					},
		// 					{
		// 						'title': 'Campaigns',
		// 						'icon': 'flaticon-graphic-2',
		// 						'badge': {
		// 							'type': 'kt-badge--success',
		// 							'value': '3'
		// 						}
		// 					},
		// 					{
		// 						'title': 'Deployment Center',
		// 						'page': '',
		// 						'icon': 'flaticon-infinity',
		// 						'submenu': {
		// 							'type': 'classic',
		// 							'alignment': 'right',
		// 							'items': [
		// 								{
		// 									'title': 'Merge Branch',
		// 									'icon': 'flaticon-add',
		// 									'badge': {
		// 										'type': 'kt-badge--danger',
		// 										'value': '3'
		// 									}
		// 								},
		// 								{
		// 									'title': 'Version Controls',
		// 									'icon': 'flaticon-signs-1'
		// 								},
		// 								{
		// 									'title': 'Database Manager',
		// 									'icon': 'flaticon-folder'
		// 								},
		// 								{
		// 									'title': 'System Settings',
		// 									'icon': 'flaticon-cogwheel-2'
		// 								}
		// 							]
		// 						}
		// 					}
		// 				]
		// 			}
		// 		}
			]
		},
		aside: {
			self: {},
			items: [
				{
					title: 'Dashboard',
					root: true,
					icon: 'flaticon2-architecture-and-city',
					page: 'dashboard',
					translate: 'MENU.DASHBOARD',
					bullet: '',
				},
				{
					title: 'Employee Management',
					root: true,
					bullet: '',
					icon: 'flaticon2-browser-2',
					submenu: [
						{
							title: 'Registration',
							root: true,
							icon: 'flaticon2-architecture-and-city',
							page: 'empRegist/registration'
						}
					]
				},
				{
					title: 'Visitor Management',
					root: true,
					bullet: '',
					icon: 'flaticon2-browser-2',
					submenu: [
						{
							title: 'Registration',
							root: true,
							icon: 'flaticon2-architecture-and-city',
							page: 'visitRegist/registration'
						},
						{
							title: 'Pass Printing',
							root: true,
							icon: 'flaticon2-architecture-and-city',
							page: 'visitRegist/passprint'
						},
						{
							title: 'Pass Reprinting',
							root: true,
							icon: 'flaticon2-architecture-and-city',
							page: 'visitRegist/pass-reprint'
						},
						{
							title: 'Daily Report',
							root: true,
							icon: 'flaticon2-architecture-and-city',
							page: 'visitRegist/daily-report'
						}
					]
				},
				{
					title: 'Crew Management',
					root: true,
					bullet: '',
					icon: 'flaticon2-browser-2',
					submenu: [
						{
							title: 'Registration',
							root: true,
							icon: 'flaticon2-architecture-and-city',
							page: 'crewRegist/registration'
						}
					]
				},
				{
					title: 'Vendor Management',
					root: true,
					bullet: '',
					icon: 'flaticon2-browser-2',
					submenu: [
						{
							title: 'submenu1',
							root: true,
							icon: 'flaticon2-architecture-and-city',
							page: 'vendRegist/registration'
						}
					]
				}
			]
			},
	};

	public get configs(): any {
		return this.defaults;
	}
}
