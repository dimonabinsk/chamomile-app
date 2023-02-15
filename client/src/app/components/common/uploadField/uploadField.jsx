/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react-hooks/rules-of-hooks */
import React, { useCallback, useRef, useState } from "react";
import fileService from "../../../services/file.service";

const UploadField = () => {
  // определим изменяемый ref для объекта FileReader
  const fileRef = useRef(null);
  const [loading, setLoading] = useState(false);

  const handleSubmit = useCallback((event) => {
    event.preventDefault();
    const fetchData = async (uint8Array, name) => {
      try {
        const response = fileService.upload([...uint8Array], name); // не отправляем в JSON, размер изображения увеличится

        setLoading(false);
        console.log(response);
      } catch (error) {
        console.error(error.message, "function handleSubmit");
      }
    };

    if (!fileRef.current) return void null;

    const reader = new FileReader();
    reader.onloadend = () => {
      const uint8Array = new Uint8Array(reader.result);
      setLoading(true);
      console.log(fileRef.current[0].name);
      fetchData(uint8Array, fileRef.current[0].name);
    };

    // рекомендованный метод
    reader.readAsArrayBuffer(fileRef.current[0]);

    // метод reader.readAsBinaryString(fileRef.current[0])
    // согласно MDN,
    // уже был однажды удален из File API specification,
    // но после его вернули
    // в использование, но все же рекомендуют
    // использовать readAsArrayBuffer
    // https://developer.mozilla.org/en-US/docs/Web/API/FileReader/readAsBinaryString
  }, []);

  const onChange = (e) => {
    return (fileRef.current = e.target.files);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <input
            className="dark:text-main-white"
            onChange={onChange}
            accept="image/*"
            type="file"
            id="button-file"
          />
        </div>
        <button type="submit" className="dark:text-main-white">
          {loading ? "Сохраняю..." : "Сохранить"}
        </button>
      </form>
    </div>
  );
};

export default UploadField;
