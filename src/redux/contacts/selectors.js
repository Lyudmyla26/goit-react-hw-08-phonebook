export const selectContacts = store => store.contacts;
export const selectLoading = state => state.contacts.isLoading;
export const selectError = state => state.contacts.error;

export const getFilteredContacts = store => {
  const { filter, contacts } = store;

  const normalizedFilter = filter;
  const filteredContacts = contacts.items.filter(
    ({ name, number }) =>
      name.toLowerCase().trim().includes(normalizedFilter) ||
      number.trim().includes(normalizedFilter)
  );

  return filteredContacts;
};
