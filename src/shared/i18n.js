export const locales = {
  en: {
    nav: {
      users: 'Users',
      products: 'Products',
      documents: 'Documents',
      contact: 'Contact',
      aboutUs: 'About Us',
      signOut: 'Sign out',
    },
    products: {
      title: 'Stationery Products',
      table: { product: 'Product', salesPercentage: 'Sales Percentage' },
      chartTitle: 'Sales Distribution',
      items: { Notebook: 'Notebook', Pen: 'Pen', Pencil: 'Pencil', Eraser: 'Eraser', Sharpener: 'Sharpener' },
    },
    users: {
      title: 'Users',
      searchPlaceholder: 'Search by name or email...',
      addUser: 'Add User',
      columns: { name: 'Name', email: 'Email', age: 'Age', active: 'Active', type: 'Type', actions: 'Actions' },
      sort: { ascending: 'Ascending', descending: 'Descending', sort: 'Sort' },
      yes: 'Yes',
      no: 'No',
      paginator: { previous: 'Previous', next: 'Next' },
      modal: {
        editTitle: 'Edit User', addTitle: 'Add User',
        name: 'Name', email: 'Email', age: 'Age', type: 'Type', active: 'Active',
        cancel: 'Cancel', save: 'Save',
      },
      delete: {
        title: 'Confirm Deletion',
        question: 'Are you sure you want to delete',
        cannotUndo: 'This action cannot be undone!',
        cancel: 'Cancel', confirm: 'Delete',
      },
      roles: { Administrator: 'Administrator', Operator: 'Operator' },
      actions: { edit: 'Edit', delete: 'Delete' },
    },
    login: {
      title: 'Login', email: 'Email', password: 'Password', signIn: 'Sign in',
      errors: { emailRequired: 'Email is required.', emailInvalid: 'Invalid email format.', passwordRequired: 'Password is required.' },
    },
    documents: {
      title: 'Document Upload',
      helper: 'Only PDF or DOCX files. Select multiple if you want.',
      uploading: 'Uploading...', send: 'Send',
    },
    contact: {
      title: 'Leave your message',
      name: 'Name', email: 'Email', phone: 'Phone', message: 'Message',
      characters: 'characters', send: 'Send',
    },
    about: { title: 'About Us component', id: 'Identifier: About Us' },
  },
  pt: {
    nav: {
      users: 'Usuários', products: 'Produtos', documents: 'Documentos', contact: 'Contato', aboutUs: 'Sobre-nós', signOut: 'Sair',
    },
  },
};

let currentLocale = 'en';

export function setLocale(locale) {
  if (locales[locale]) currentLocale = locale;
}

export function t(path, fallback) {
  const parts = path.split('.');
  let node = locales[currentLocale];
  for (const part of parts) {
    if (!node || typeof node !== 'object') return fallback ?? path;
    node = node[part];
  }
  return node ?? (fallback ?? path);
}


