import {
  Button,
  DrawerBody,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  Select,
  Skeleton,
  Stack,
} from "@chakra-ui/react";
import { useQueryClient } from "@tanstack/react-query";
import React, { useRef } from "react";
import { ProductService, Status } from "../../../services/products/product";
import { useFetchProduct } from "../../../services/products/useFetchProduct";

export default function Update({
  code,
  onClose,
}: {
  code: string;
  onClose: () => void;
}) {
  const { data: product, isLoading } = useFetchProduct(code);
  const refName = useRef<HTMLInputElement>(null);
  const refStatus = useRef<HTMLSelectElement>(null);

  const queryClient = useQueryClient();
  const editProduct = async () => {
    await ProductService.update(code, {
      data: {
        product_name: refName.current?.value,
      },
      status: refStatus.current?.value as Status,
    });
    await queryClient.invalidateQueries("products" as any);
    await queryClient.invalidateQueries("product" as any);
    onClose();
  };
  if (isLoading) {
    return (
      <DrawerBody>
        <DrawerHeader>Carregando...</DrawerHeader>
        <Stack>
          <Skeleton height="40px" />
        </Stack>
      </DrawerBody>
    );
  }
  return (
    <>
      <DrawerHeader>Editar Produto</DrawerHeader>
      <DrawerBody>
        <div className="flex flex-col gap-6">
          <div>
            <label htmlFor="name">Nome</label>
            <input
              type="text"
              name="name"
              id="name"
              className="border border-gray-300 rounded-md p-2"
              defaultValue={product?.data.product_name}
              ref={refName}
            />
          </div>
          <div>
            <label htmlFor="status">Status</label>
            <Select
              name="status"
              id="status"
              className="border border-gray-300 rounded-md p-2"
              defaultValue={product?.data.status}
              ref={refStatus}
            >
              <option value="draft">Rascunho</option>
              <option value="trash">Lixo</option>
              <option value="published">Publicado</option>
            </Select>
          </div>
        </div>
      </DrawerBody>
      <DrawerFooter>
        <Button variant="outline" mr={3} onClick={onClose}>
          Cancelar
        </Button>
        <Button onClick={editProduct} colorScheme="blue">
          Salvar
        </Button>
      </DrawerFooter>
    </>
  );
}
