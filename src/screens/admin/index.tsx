import React, { useRef } from "react";
import Sidebar from "../../components/Sidebar";
import { ImExit, ImPen } from "react-icons/im";
import {
  AlertDialog,
  AlertDialogBody,
  AlertDialogContent,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogOverlay,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  Button,
  Drawer,
  DrawerBody,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  Image,
  Progress,
  Select,
  Tab,
  Table,
  TableCaption,
  TableContainer,
  TabList,
  Tabs,
  Tbody,
  Td,
  Tfoot,
  Th,
  Thead,
  Tooltip,
  Tr,
} from "@chakra-ui/react";
import useFetchAllProducts from "../../services/products/useFetchProduct";
import { BsPencil, BsTrash } from "react-icons/bs";
import { ProductService } from "../../services/products/product";
import { useQueryClient } from "@tanstack/react-query";
import { BiLeftArrow, BiRightArrow } from "react-icons/bi";
import Update from "./update";

const tabs = ["draft", "trash", "published"];

export default function Admin() {
  const [limit, setLimit] = React.useState(10);
  const [page, setPage] = React.useState(1);
  const [status, setStatus] = React.useState("draft");
  const [deleting, setDeleting] = React.useState("-1");
  const [editing, setEditing] = React.useState("-1");

  const queryClient = useQueryClient();
  const deleteProduct = async () => {
    await ProductService.delete(deleting);
    await queryClient.invalidateQueries("products" as any);
    setDeleting("-1");
  };

  const onCloseDeleting = () => setDeleting("-1");
  const onCloseEditing = () => setEditing("-1");

  const deleteModalRef = useRef<any>();

  const { data: products, isLoading } = useFetchAllProducts(
    limit,
    page,
    status
  );
  const go = (page: number) => {
    setPage(Math.max(1, page));
  };

  return (
    <div className="flex">
      {/* Modais */}
      <AlertDialog
        isOpen={deleting !== "-1"}
        leastDestructiveRef={deleteModalRef}
        onClose={onCloseDeleting}
      >
        <AlertDialogOverlay>
          <AlertDialogContent>
            <AlertDialogHeader fontSize="lg" fontWeight="bold">
              Deletar Produto
            </AlertDialogHeader>
            <AlertDialogBody>
              Você tem certeza que deseja deletar o produto cod({deleting})?
            </AlertDialogBody>
            <AlertDialogFooter>
              <Button onClick={onCloseDeleting}>Cancelar</Button>
              <Button colorScheme="red" onClick={deleteProduct} ml={3}>
                Deletar
              </Button>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialogOverlay>
      </AlertDialog>
      <Drawer
        isOpen={editing !== "-1"}
        placement="right"
        onClose={onCloseEditing}
      >
        <DrawerOverlay>
          <DrawerContent>
            <Update code={editing} onClose={onCloseEditing} />
          </DrawerContent>
        </DrawerOverlay>
      </Drawer>

      <Sidebar />
      <main className="p-10 w-full overflow-y-scroll h-screen">
        <div className="w-full flex justify-between">
          <h1 className="text-4xl font-semibold mb-3">Admin</h1>
          <button className="bg-red-500 w-10 h-10 center rounded-md ">
            <ImExit size={20} className="text-white" />
          </button>
        </div>
        <hr className="w-full border-gray-300" />
        <div className="py-4">
          <Breadcrumb>
            <BreadcrumbItem>
              <BreadcrumbLink href="#">Home</BreadcrumbLink>
            </BreadcrumbItem>

            <BreadcrumbItem></BreadcrumbItem>
          </Breadcrumb>
        </div>
        <Tabs colorScheme="red" onChange={(i) => setStatus(tabs[i])}>
          <TabList>
            <Tab>Draft</Tab>
            <Tab>Trash</Tab>
            <Tab>Published</Tab>
          </TabList>
          {isLoading && <Progress size="xs" isIndeterminate />}

          <div className="p-3 w-1/4 float-right">
            <Select
              placeholder="Selecione a quantidade de itens"
              onChange={(e) => setLimit(Number(e.target.value))}
            >
              <option value="10">10</option>
              <option value="20">20</option>
              <option value="30">30</option>
            </Select>
          </div>
          <TableContainer>
            <Table variant="simple">
              <TableCaption>Imperial to metric conversion factors</TableCaption>
              <Thead>
                <Tr>
                  <Th>ID</Th>
                  <Th>Nome</Th>
                  <Th>Foto</Th>
                  <Th>Código</Th>
                  <Th>Ações</Th>
                </Tr>
              </Thead>
              <Tbody>
                {products?.map((product) => (
                  <Tr key={product.id}>
                    <Td>{product.id}</Td>
                    <Td>{product.data.product_name}</Td>
                    <Td>
                      <Image
                        src={product.data.image_url}
                        style={{
                          width: "100px",
                          height: "100px",
                          objectFit: "cover",
                        }}
                      />
                    </Td>
                    <Td>{product.data.code}</Td>
                    <Td>
                      <div className="flex gap-4">
                        <Tooltip
                          hasArrow
                          label="Excluir produto"
                          bg="red.500"
                          placement="top"
                        >
                          <button
                            onClick={() => {
                              setDeleting(product.data.code);
                            }}
                            className="bg-red-500 w-10 h-10 center rounded-md "
                          >
                            <BsTrash size={20} className="text-white" />
                          </button>
                        </Tooltip>
                        <Tooltip
                          hasArrow
                          label="Editar produto"
                          bg="green.500"
                          placement="top"
                        >
                          <button
                            onClick={() => {
                              setEditing(product.data.code);
                            }}
                            className="bg-green-500 w-10 h-10 center rounded-md "
                          >
                            <BsPencil size={20} className="text-white" />
                          </button>
                        </Tooltip>
                      </div>
                    </Td>
                  </Tr>
                ))}
              </Tbody>
              <Tfoot>
                <Tr>
                  <Th>ID</Th>
                  <Th>Nome</Th>
                  <Th>Foto</Th>
                  <Th>Código</Th>
                  <Th>Ações</Th>
                </Tr>
              </Tfoot>
            </Table>
            <div className="flex justify-end gap-4">
              <Tooltip hasArrow label="Voltar uma pagina" bg="red.500">
                <button
                  onClick={() => go(page - 1)}
                  className="bg-blue-500 w-10 h-10 center rounded-md "
                >
                  <BiLeftArrow size={20} className="text-white" />
                </button>
              </Tooltip>

              <div className="bg-gray-400 w-10 h-10 center rounded-md ">
                <p className="text-white text-center">{page}</p>
              </div>

              <Tooltip hasArrow label="Ir para a próxima pagina" bg="green.500">
                <button
                  onClick={() => go(page + 1)}
                  className="bg-blue-500 w-10 h-10 center rounded-md "
                >
                  <BiRightArrow size={20} className="text-white" />
                </button>
              </Tooltip>
            </div>
          </TableContainer>
        </Tabs>
      </main>
    </div>
  );
}
