import React from "react";
import {
  Button,
  Dialog,
  DialogBody,
  DialogFooter,
  DialogHeader,
  Input,
} from "@material-tailwind/react";

export default function ModalDialog({
  isOpen,
  handler,
  title,
  type,
  confirm,
  cancel,
  change,
  defaultValue,
  label,
  nameInput,
  handleSubmit,
}) {
  //   console.log(prod);
  return (
    <Dialog open={isOpen} handler={handler}>
      <DialogHeader>{title}</DialogHeader>
      <DialogBody divider>
        <form onSubmit={handleSubmit} id="form-price">
          <Input
            type={type}
            onChange={change}
            label={label}
            min={100}
            defaultValue={defaultValue}
            name={nameInput}
            step={10}
            required
          />
        </form>
      </DialogBody>
      <DialogFooter>
        <Button variant="text" color="red" onClick={handler} className="mr-1">
          <span>{cancel}</span>
        </Button>
        <Button
          variant="gradient"
          type="submit"
          color="green"
          form="form-price"
        >
          <span>{confirm}</span>
        </Button>
      </DialogFooter>
    </Dialog>
  );
}
