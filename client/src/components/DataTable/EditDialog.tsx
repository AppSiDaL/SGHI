import { Button } from "primereact/button";
import { Dialog } from "primereact/dialog";
import { InputNumber, InputNumberChangeEvent } from "primereact/inputnumber";
import { InputText } from "primereact/inputtext";
import { InputTextarea } from "primereact/inputtextarea";
import { RadioButton } from "primereact/radiobutton";
import { classNames } from "primereact/utils";
import { Toast } from "primereact/toast";
import React from "react";
import { Herramienta } from "../../types/herramientas";
import { Part } from "../../types/piezas";
import { Orden } from "../../types/orden";

interface EditDialogProps {
  setSubmitted: React.Dispatch<React.SetStateAction<boolean>>;
  setProductDialog: React.Dispatch<React.SetStateAction<boolean>>;
  productDialog: boolean;
  item: Herramienta | Part | Orden;
  submitted: boolean;
  setItem: Function;
  products: Herramienta[] | Part[] | Orden[];
  toast: React.MutableRefObject<Toast | null>;
  setProducts: Function;
  emptyProduct: Herramienta;
}

export default function EditDialog({
  setSubmitted,
  setProductDialog,
  productDialog,
  item,
  submitted,
  setItem,
  products,
  toast,
  setProducts,
  emptyProduct,
}: EditDialogProps) {
  const onInputNumberChange = (e: InputNumberChangeEvent, name: string) => {
    const val = e.value || 0;
    let _product = { ...item };

    // @ts-ignore
    _product[`${name}`] = val;

    setItem(_product);
  };
  const onInputChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    name: string
  ) => {
    const val = (e.target && e.target.value) || "";
    let _product = { ...item };

    // @ts-ignore
    _product[`${name}`] = val;

    setItem(_product);
  };
  const findIndexById = (id: number) => {
    let index = -1;

    for (let i = 0; i < products.length; i++) {
      if (products[i].id === id) {
        index = i;
        break;
      }
    }

    return index;
  };
  const saveProduct = () => {
    setSubmitted(true);

    let _products = [...products];
    let _product = { ...item };

    if (item.id) {
      const index = findIndexById(item.id);

      _products[index] = _product;
      toast.current?.show({
        severity: "success",
        summary: "Successful",
        detail: "Product Updated",
        life: 3000,
      });
    } else {
      _product.id = createId();
      _products.push(_product);
      toast.current?.show({
        severity: "success",
        summary: "Successful",
        detail: "Product Created",
        life: 3000,
      });
    }

    setProducts(_products);
    setProductDialog(false);
    setItem(emptyProduct);
  };

  const createId = (): number => {
    let id = 0;
    let chars = "0123456789";

    for (let i = 0; i < 5; i++) {
      id =
        id * 10 +
        parseInt(chars.charAt(Math.floor(Math.random() * chars.length)));
    }

    return id;
  };
  const hideDialog = () => {
    setSubmitted(false);
    setProductDialog(false);
  };
  const productDialogFooter = (
    <React.Fragment>
      <Button label="Cancel" icon="pi pi-times" outlined onClick={hideDialog} />
      <Button label="Save" icon="pi pi-check" onClick={saveProduct} />
    </React.Fragment>
  );
  return (
    <Dialog
      visible={productDialog}
      style={{ width: "32rem" }}
      breakpoints={{ "960px": "75vw", "641px": "90vw" }}
      header="Product Details"
      modal
      className="p-fluid"
      footer={productDialogFooter}
      onHide={hideDialog}
    >
      <div className="field">
        <label htmlFor="name" className="font-bold">
          Name
        </label>
        <InputText
          id="name"
          value={(item as Herramienta|Part).descripcion }
          onChange={(e) => onInputChange(e, "name")}
          required
          autoFocus
          className={classNames({
            "p-invalid": submitted && !(item as Herramienta|Part).descripcion,
          })}
        />
        {submitted && !(item as Herramienta|Part).descripcion && (
          <small className="p-error">Name is required.</small>
        )}
      </div>
      <div className="field">
        <label htmlFor="description" className="font-bold">
          Description
        </label>
        <InputTextarea
          id="description"
          value={(item as Herramienta|Part).descripcion}
          onChange={(e: any) => onInputChange(e, "description")}
          required
          rows={3}
          cols={20}
        />
      </div>

      <div className="field">
        <label className="mb-3 font-bold">Category</label>
        <div className="formgrid grid">
          <div className="field-radiobutton col-6">
            <RadioButton
              inputId="category1"
              name="category"
              value="Accessories"
              checked={item.codigo === "Accessories"}
            />
            <label htmlFor="category1">Accessories</label>
          </div>
          <div className="field-radiobutton col-6">
            <RadioButton
              inputId="category2"
              name="category"
              value="Clothing"
              checked={(item as Herramienta|Part).descripcion === "Clothing"}
            />
            <label htmlFor="category2">Clothing</label>
          </div>
          <div className="field-radiobutton col-6">
            <RadioButton
              inputId="category3"
              name="category"
              value="Electronics"
              checked={(item as Herramienta|Part).descripcion === "Electronics"}
            />
            <label htmlFor="category3">Electronics</label>
          </div>
          <div className="field-radiobutton col-6">
            <RadioButton
              inputId="category4"
              name="category"
              value="Fitness"
              checked={(item as Herramienta|Part).descripcion === "Fitness"}
            />
            <label htmlFor="category4">Fitness</label>
          </div>
        </div>
      </div>

      <div className="formgrid grid">
        <div className="field col">
          <label htmlFor="price" className="font-bold">
            Price
          </label>
          <InputNumber
            id="price"
            value={item.id}
            onValueChange={(e: any) => onInputNumberChange(e, "price")}
            mode="currency"
            currency="USD"
            locale="en-US"
          />
        </div>
        <div className="field col">
          <label htmlFor="quantity" className="font-bold">
            Quantity
          </label>
          <InputNumber
            id="quantity"
            value={item.id}
            onValueChange={(e: any) => onInputNumberChange(e, "quantity")}
          />
        </div>
      </div>
    </Dialog>
  );
}
