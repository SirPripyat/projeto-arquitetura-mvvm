export default function useMyProductsTableHead() {
  const tableHeader = [
    {
      label: 'Id',
      key: 'id',
    },
    {
      label: 'Tipo',
      key: 'type',
    },
    {
      label: 'Nome',
      key: 'name',
    },
    {
      label: 'Tamanho',
      key: 'size',
    },
    {
      label: 'Quantidade',
      key: 'quantity',
    },
    {
      label: 'Status',
      key: 'status',
    },
    {
      label: 'Editar',
      key: 'edit',
    },
    {
      label: 'Excluir',
      key: 'delete',
    },
  ];

  return {
    tableHeader,
  };
}
