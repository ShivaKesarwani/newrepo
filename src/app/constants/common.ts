export const USER = {
  TYPE: {
  	'1': 'Business User',
  	'2': 'Individual User'
  },
  STATUS: {
  	'1': 'Approved',
  	'2': 'Pending',
  	'3': 'Blocked',
    '4': 'Active',
    '5': 'Inactive'
  }
}

export const WALLET = {
  STATUS: {
    ADDED: 'Balance Added',
    DEDUCTED: 'Balance Deducted'
  }
}

export const ORDER = {
  TYPE: {
  	'0': 'All',
    '1': 'New',
  	'2': 'Reprint'
  },
  STATUS: {
    '0': 'All',
    '1': 'Pending',
    '2': 'Order Ready',
    '3': 'On Delivery',
    '4': 'Collected',
    '5': 'Cancelled'
  }
}

export const CATEGORY = {
  STATUS: {
    '5': 'Hidden',
    '4': 'Active'
  }
}

export const STATIC_CONTENT_PAGE_TYPES = [
  'About the Comapny',
  'Career',
  'Contact Us',
  'FAQs',
  'Terms & Conditions',
  'Privacy Policy'
]

export const ACCESS_TOKEN = 'access_token';