import EditProductPage from '@/pages/(authenticated)/products/pages/edit-product/edit-product.page';

interface PageProps {
  params: {
    id: string;
  };
}

export default function Page({ params: { id } }: PageProps) {
  return <EditProductPage id={id} />;
}
