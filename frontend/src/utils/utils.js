export const getMontantTotal = (tab) => {
  return tab.reduce((acc, obj) => acc + obj.montant, 0);
};
